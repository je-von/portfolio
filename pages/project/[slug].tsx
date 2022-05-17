import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Motion from '../../components/Motion'
import AppContext from '../../context/AppContext'
import ErrorPage from '../404'

const ProjectDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const value = useContext(AppContext)
  const { githubRepos } = value.state

  const repo = githubRepos?.repositories?.find((r) => r.name == slug)

  if (!repo) {
    return <ErrorPage />
  }

  return (
    <Motion title={`Jevon Levin | ${slug}`} description="Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!">
      <div className="my-8 flex flex-row justify-between px-3 font-sen sm:items-center">
        <div>
          <p className="text-3xl font-bold text-black dark:text-white">{repo.name}</p>
          <p className="mt-1 text-lg text-gray-600">{repo.description}</p>

          <div className="mt-5 max-w-[90vw] rounded-lg border bg-white px-7 py-4 text-black dark:border-0 dark:bg-[#0d1117] dark:text-white">
            <p className="cursor-pointer hover:underline dark:text-gray-100">README</p>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="pt-2">
              {repo?.readme}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Motion>
  )
}

export default ProjectDetail
