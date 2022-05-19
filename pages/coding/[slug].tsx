import type { NextPage } from 'next'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { AiFillEye, AiOutlineGithub } from 'react-icons/ai'
import { HiShare } from 'react-icons/hi'
import { MdKeyboardArrowRight, MdOpenInNew, MdOutlineFileDownload, MdShare } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Toast from '../../components/Misc/Toast'
import Motion from '../../components/Motion'
import AppContext from '../../context/AppContext'
import ErrorPage from '../404'
const ProjectDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const value = useContext(AppContext)
  const { githubRepos } = value.state

  const repo = githubRepos?.repositories?.find((r) => r.name == slug)

  const [toast, setToast] = useState(null)
  useEffect(() => {
    if (toast)
      setTimeout(() => {
        setToast(null)
      }, 3000)
  }, [toast])

  if (!repo) {
    return <ErrorPage />
  }

  return (
    <Motion title={`Jevon Levin | ${slug}`} description="Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!">
      <div className="my-8 w-full px-3 font-sen">
        {toast}
        <div>
          <div className="flex w-full items-center justify-between">
            <p className=" text-3xl font-bold text-black dark:text-white">{repo.name}</p>
            <div
              className="cursor-pointer hover:scale-110"
              onClick={() => {
                navigator.clipboard.writeText(`${repo.name} by Jevon - ${window.location.href}`)

                setToast(
                  <Toast
                    message="URL Copied succesfully! Now, you can paste and share this page to anyone! &#128513;"
                    onClose={() => {
                      setToast(null)
                    }}
                  />
                )
              }}
            >
              <MdShare className="mr-1 text-lg text-black dark:text-white" />
            </div>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-400">
            {new Date(repo.createdAt).toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })}
          </p>

          <p className="mt-1 text-lg text-gray-600">{repo.description}</p>
          <div className="mt-1 flex w-full flex-wrap items-center sm:w-1/2">
            {repo.topics.map((topic: any, index: any) => (
              <div className="mr-1 mb-1 rounded-lg bg-lightText px-2 py-1 text-xs text-white dark:bg-zinc-800" key={index}>
                {topic}
              </div>
            ))}
          </div>
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
                {repo.isDownloadable ? (
                  <>
                    <MdOutlineFileDownload className="mr-1 text-black dark:text-white" />
                    download app
                  </>
                ) : (
                  <>
                    <AiFillEye className="mr-1 text-black dark:text-white" />
                    view app online
                  </>
                )}

                <MdKeyboardArrowRight />
              </a>
            </Link>
          ) : (
            ''
          )}
          {/* <div className="flex w-fit cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2">
            <MdShare className="mr-1 text-black dark:text-white"></MdShare>
            share
            <MdKeyboardArrowRight />
          </div> */}
          <div className="readme mt-5 w-full max-w-[90vw] overflow-hidden rounded-lg border bg-white px-7 py-4 text-black dark:border-0 dark:bg-[#0d1117] dark:text-white">
            <Link href={repo.repoUrl + '#readme'} passHref>
              <a target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xs hover:underline dark:text-gray-100">
                README <MdOpenInNew className="ml-1" />
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
