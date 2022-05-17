import type { NextPage } from 'next'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useContext } from 'react'
import { AiFillEye, AiOutlineGithub } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
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
      <div className="my-8 w-full px-3 font-sen">
        <div>
          <div className="flex w-full justify-between">
            <p className="text-3xl font-bold text-black dark:text-white">{repo.name}</p>
            <p className="text-sm">
              {new Date(repo.createdAt).toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
            </p>
          </div>
          <p className="mt-1 text-lg text-gray-600">{repo.description}</p>
          <Link href={repo.repoUrl} passHref>
            <a
              className="mt-4 flex w-fit cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub className="mr-1 text-black dark:text-white" />
              view source code
              <MdKeyboardArrowRight />
            </a>
          </Link>
          {repo.appUrl ? (
            <Link href={repo.appUrl} passHref>
              <a
                className="flex w-fit cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillEye className="mr-1 text-black dark:text-white" />
                view live app
                <MdKeyboardArrowRight />
              </a>
            </Link>
          ) : (
            ''
          )}
          <div className="readme mt-5 w-full max-w-[90vw] rounded-lg border bg-white px-7 py-4 text-black dark:border-0 dark:bg-[#0d1117] dark:text-white">
            <Link href={repo.repoUrl + '#readme'} passHref>
              <a target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xs hover:underline dark:text-gray-100">
                README
              </a>
            </Link>
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
