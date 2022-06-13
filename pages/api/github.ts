import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../@types/prop.types'
import Repos from './github_temp.json'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const convert = (repo: Data) => {
      return repo
        .filter((r) => r.name !== 'je-von' && !r.fork)
        .splice(0, 9)
        .map((r) => ({
          id: r.id,
          repoUrl: r.html_url,
          name: r.name,
          description: r.description,
          appUrl: r.homepage,
          language: r.language,
          topics: r.topics,
          createdAt: r.created_at,
          isDownloadable: r.homepage.includes('install') || r.homepage.includes('.exe'),
        }))
    }

    let repositories = null
    let message = ''
    try {
      const userReposResponse = await fetch('https://api.github.com/users/je-von/repos?sort=pushed&direction=desc')
      const temp = await userReposResponse.json()
      repositories = convert(temp)
      message = 'Data fetched from GitHub API 🎉'
    } catch (e: any) {
      // return res.status(500).json({ message: e.message })
      repositories = convert(Repos)
      message = 'GitHub API max rate limit exceeded. Now showing saved repositories from 06/06/2022.'
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
