import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../@types/prop.types'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const userReposResponse = await fetch('https://api.github.com/users/je-von/repos?sort=pushed&direction=desc&per_page=9')

      let repositories = await userReposResponse.json()

      repositories = repositories
        .filter((repo: Data) => !repo.fork)
        .map((repo: Data) => ({
          id: repo.id,
          repoUrl: repo.html_url,
          name: repo.name,
          description: repo.description,
          appUrl: repo.homepage,
          language: repo.language,
          topics: repo.topics,
          createdAt: repo.created_at,
        }))

      res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

      return res.status(200).json({
        repositories,
      })
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
}
