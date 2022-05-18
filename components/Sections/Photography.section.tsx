import type { NextComponentType } from 'next'

import Link from 'next/link'
import { useContext, useState } from 'react'
import { AiFillEye, AiOutlineClose, AiOutlineGithub } from 'react-icons/ai'
import { BsArrowDown, BsInfoCircle } from 'react-icons/bs'
import { HiArrowDown } from 'react-icons/hi'
import { MdArrowDownward, MdArrowDropDown, MdClose } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import useSWR from 'swr'
import { Data } from '../../@types/prop.types'
import AppContext from '../../context/AppContext'
import { fetcher } from '../../lib/fetcher'
import Tooltip from '../Misc/Tooltip'
import PhotographyData from '../../pages/api/photography.json'
import Image from 'next/image'
import Carousel from '../Misc/Carousel/Carousel'

const Photography: NextComponentType = () => {
  const photographs = PhotographyData

  const [count, setCount] = useState(3)

  const value = useContext(AppContext)

  return (
    <div className="my-16 px-3 font-sen" id="photography">
      <div className="flex items-center text-3xl font-bold text-black dark:text-white">
        Photography
        {/* <Tooltip
          content={
            <div className="flex w-24 px-2 py-1">
              <p className="w-full whitespace-pre-wrap break-words text-xs font-thin text-white dark:text-black">{'info'}</p>
            </div>
          }
          direction="bottom"
        >
          <BsInfoCircle className="ml-3 text-sm" />
        </Tooltip> */}
      </div>
      <div className="my-4 flex w-full flex-wrap items-center justify-center">
        {photographs?.map((p, index) => (
          <div
            // onClick={() => setRepo(repo)}
            key={index}
            className="relative mx-2 my-4 min-h-fit min-w-[16rem] shrink-0 grow-0 basis-1/4 rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105 sm:min-w-[26rem]"
          >
            {/* <Carousel photographData={p} key={index} /> */}
            <div className="relative h-48 w-full sm:h-72">
              {/* <Image src={`/assets/photography/${p.type}/${p.slug}/0.jpg`} layout="fill" className="rounded-lg" alt="avatar" objectFit="cover" /> */}
              <div
                style={{ backgroundImage: `url('/assets/photography/${p.type}/${p.slug}/0.jpg')` }}
                className={`absolute inset-0 bg-cover bg-center `}
              ></div>
              <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-6xl font-semibold text-black/0 duration-200 hover:bg-white/60 hover:text-black dark:text-white/0 hover:dark:bg-black/60 hover:dark:text-white">
                {p.title}
              </div>
            </div>
            {/* <div className="flex h-full min-h-[12rem] w-full flex-col items-center justify-center rounded-lg bg-white px-2 text-center font-medium text-black dark:bg-black dark:text-white">
              <Link href={`/photography/${p.slug}`} passHref>
                <p className="cursor-pointer text-xl font-semibold hover:scale-110 hover:underline">{p.title}</p>
              </Link>
              <p className="max-h-2/4 w-full text-ellipsis line-clamp-2">{p.description}</p>

              <div className="my-1 rounded-lg bg-lightText px-2 py-1 text-xs text-white dark:bg-zinc-800" key={index}>
                {p.type}
              </div>
            </div> */}
          </div>
        ))}
        {/*  */}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="rounded-full bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-2 text-center font-jost text-xl font-medium text-white duration-100 hover:scale-105 dark:text-black"
          // onClick={() => {
          //   if (count < githubRepos?.repositories.length) setCount((prev) => prev + 3)
          //   else window.open('https://github.com/je-von?tab=repositories', '_blank')
          // }}
        >
          {true ? <MdArrowDropDown /> : <AiOutlineGithub />}
        </button>
      </div>
    </div>
  )
}

export default Photography
