import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../@types/prop.types'
import Repos from './github_temp.json'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const mapFunc = (repo: Data) => ({
      id: repo.id,
      repoUrl: repo.html_url,
      name: repo.name,
      description: repo.description,
      appUrl: repo.homepage,
      language: repo.language,
      topics: repo.topics,
      createdAt: repo.created_at,
    })

    let repositories = null
    let message = ''
    try {
      const userReposResponse = await fetch('https://api.github.com/users/je-von/repos?sort=pushed&direction=desc&per_page=9')
      const temp = await userReposResponse.json()
      repositories = temp.map(mapFunc)
      message = 'Data fetched from api.github.com'
    } catch (e: any) {
      // return res.status(500).json({ message: e.message })
      repositories = Repos.map(mapFunc)
      message = 'Fail to fetch from api.github.com (now showing saved projects from 17/05/2022)'
    }

    for (let repo of repositories) {
      try {
        const readmeResponse = await fetch(`https://raw.githubusercontent.com/je-von/${repo.name}/master/README.md`)
        const temp = await readmeResponse.text()
        repo.readme = temp
      } catch (e: any) {}
    }

    res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

    return res.status(200).json({
      repositories,
      message,
    })
  }
}
