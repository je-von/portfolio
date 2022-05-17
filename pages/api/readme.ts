import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../@types/prop.types'
import Repos from './github_temp.json'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { repoName } = req.query
    try {
      const userReposResponse = await fetch(`https://raw.githubusercontent.com/je-von/${repoName}/master/README.md`)
      const readme = await userReposResponse.text()
      return res.status(200).json({
        readme,
        message: 'README fetched successfully!',
      })
    } catch (e: any) {
      return res.status(500).json({
        message: e.message,
      })
    }
  }
}
