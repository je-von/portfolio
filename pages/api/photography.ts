import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../@types/prop.types'
import PhotographyData from './photography_data.json'
import arrayShuffle from 'array-shuffle'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const photographs = PhotographyData.map((p: Data) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      type: p.type,
      images: Array.from(Array(p.imagesCount), (_, i) => `/assets/photography/${p.type}/${p.slug}/${i}.jpg`),
    }))
    const message = 'Photography data fetched succesfully'

    res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

    return res.status(200).json({
      photographs: arrayShuffle(photographs),
      message,
    })
  }
}
