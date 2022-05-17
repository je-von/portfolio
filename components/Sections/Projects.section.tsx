import type { NextComponentType } from 'next'

import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsArrowDown } from 'react-icons/bs'
import { HiArrowDown } from 'react-icons/hi'
import { MdArrowDownward, MdArrowDropDown } from 'react-icons/md'
import useSWR from 'swr'
import { Data } from '../../@types/prop.types'
import { fetcher } from '../../lib/fetcher'
import ProjectsData from '../../pages/api/projects.json'
const Projects: NextComponentType = () => {
  const { data } = useSWR<Data>('/api/github', fetcher)
  const [count, setCount] = useState(3)

  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold">Featured Projects</p>
      <div className="my-4 flex flex-wrap items-center justify-center">
        {data?.message ? (
          <h4>Maximum rate limit reached.</h4>
        ) : (
          data?.repositories.slice(0, count).map((repo: any) => (
            <Link href={repo.repoUrl} passHref key={repo.id}>
              <a className="mx-2 my-4 h-[8rem] w-[14rem] basis-1/4 cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-white px-2 text-center font-medium text-black dark:bg-black dark:text-white">
                  <p className="text-xl font-semibold">{repo.name}</p>
                  <p className="max-h-2/4 w-full text-ellipsis line-clamp-2">{repo.description}</p>
                </div>
              </a>
            </Link>
          ))
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="rounded-full bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-2 text-center font-jost text-xl font-medium text-black duration-100 hover:scale-105"
          onClick={() => {
            if (count < data?.repositories.length) setCount((prev) => prev + 3)
            else window.open('https://github.com/je-von', '_blank')
          }}
        >
          {count < data?.repositories.length ? <MdArrowDropDown /> : <AiOutlineGithub />}
        </button>
      </div>
    </div>
  )
}

export default Projects
