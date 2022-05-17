import type { NextComponentType } from 'next'

import Link from 'next/link'
import { useState } from 'react'
import { AiFillEye, AiOutlineClose, AiOutlineGithub } from 'react-icons/ai'
import { BsArrowDown, BsInfoCircle } from 'react-icons/bs'
import { HiArrowDown } from 'react-icons/hi'
import { MdArrowDownward, MdArrowDropDown, MdClose } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import useSWR from 'swr'
import { Data } from '../../@types/prop.types'
import { fetcher } from '../../lib/fetcher'
import ProjectsData from '../../pages/api/projects.json'
import Tooltip from '../Misc/Tooltip'
const Projects: NextComponentType = () => {
  const { data } = useSWR<Data>('/api/github', fetcher)
  const [count, setCount] = useState(3)
  const [repo, setRepo] = useState(null)

  const modal = (
    <>
      <div className="fixed inset-0 z-50 mt-10 flex h-[90vh] items-center justify-center overflow-x-hidden text-black outline-none focus:outline-none">
        <div className="relative my-6 mx-auto h-[90vh] w-auto max-w-[90vw] sm:max-w-[50vw]">
          {/*content*/}
          <div className="relative flex  w-full flex-col rounded-lg border-0 bg-gray-900 shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="flex text-3xl font-semibold">
                {repo?.name} <p className="ml-2 font-thin text-gray-500">README</p>
              </h3>
              <button
                className="float-right ml-auto border-0 p-1 text-2xl leading-none outline-none focus:outline-none"
                onClick={() => setRepo(null)}
              >
                <MdClose className="text-white" />
              </button>
            </div>
            {/*body*/}
            <div className="relative w-full flex-auto overflow-hidden p-6">
              <p className="my-4 w-full break-words text-lg leading-relaxed text-slate-500">
                <ReactMarkdown className="text-white" rehypePlugins={[rehypeRaw]}>
                  {repo?.readme}
                </ReactMarkdown>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  )

  console.log(data)
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <div className="flex items-center text-3xl font-bold text-black dark:text-white">
        Featured Projects{' '}
        <Tooltip
          content={
            <div className="flex w-24 px-2 py-1">
              <p className="w-full whitespace-pre-wrap break-words text-xs font-thin text-white dark:text-black">{data?.message}</p>
            </div>
          }
          direction="bottom"
        >
          <BsInfoCircle className="ml-3 text-sm" />
        </Tooltip>
      </div>
      <div className="my-4 flex w-full flex-wrap items-center justify-center">
        {data?.repositories.slice(0, count).map((repo: any) => (
          <div
            onClick={() => setRepo(repo)}
            key={repo.id}
            className="mx-2 my-4 min-h-fit  min-w-[16rem] shrink-0 grow-0 basis-1/4 cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
          >
            <div className="flex h-full min-h-[12rem] w-full flex-col items-center justify-center rounded-lg bg-white px-2 text-center font-medium text-black dark:bg-black dark:text-white">
              <p className="text-xl font-semibold">{repo.name}</p>
              <p className="max-h-2/4 w-full text-ellipsis line-clamp-2">{repo.description}</p>
              <div className="mt-1 flex w-full flex-wrap items-center justify-evenly">
                {repo.topics.slice(0, 5).map((topic: any, index: any) => (
                  <div className="mb-1 rounded-lg bg-lightText px-2 py-1 text-xs text-white dark:bg-zinc-800" key={index}>
                    {topic}
                  </div>
                ))}
              </div>
              <div className="mb-1 flex w-full items-center justify-evenly ">
                <Link href={repo.repoUrl} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-pointer items-center rounded-lg px-2 py-1 text-lightText hover:scale-110"
                  >
                    <AiOutlineGithub className="mr-1" />
                    github
                  </a>
                </Link>
                {repo.appUrl ? (
                  <Link href={repo.appUrl} passHref>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex cursor-pointer items-center rounded-lg px-2 py-1 text-lightText hover:scale-110"
                    >
                      <AiFillEye className="mr-1" />
                      live
                    </a>
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="rounded-full bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-2 text-center font-jost text-xl font-medium text-black duration-100 hover:scale-105"
          onClick={() => {
            if (count < data?.repositories.length) setCount((prev) => prev + 3)
            else window.open('https://github.com/je-von?tab=repositories', '_blank')
          }}
        >
          {count < data?.repositories.length ? <MdArrowDropDown /> : <AiOutlineGithub />}
        </button>
      </div>
      {repo ? modal : ''}
    </div>
  )
}

export default Projects
