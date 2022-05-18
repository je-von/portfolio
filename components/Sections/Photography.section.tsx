import type { NextComponentType } from 'next'

import { useContext, useState } from 'react'
import { AiFillInstagram, AiOutlineGithub } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdArrowDropDown } from 'react-icons/md'

import AppContext from '../../context/AppContext'
import Tooltip from '../Misc/Tooltip'

const Photography: NextComponentType = () => {
  const [count, setCount] = useState(2)

  const value = useContext(AppContext)

  const { photographyData } = value.state

  return (
    <div className="my-16 px-3 font-sen" id="photography">
      <div className="flex items-center text-3xl font-bold text-black dark:text-white">
        Photography
        <Tooltip
          content={
            <div className="flex w-24 px-2 py-1">
              <p className="w-full whitespace-pre-wrap break-words text-xs font-thin text-white dark:text-black">
                Hover / tap on each photographs to view the details.
              </p>
            </div>
          }
          direction="bottom"
        >
          <BsInfoCircle className="ml-3 text-sm" />
        </Tooltip>
      </div>
      <div className="my-4 flex w-full flex-wrap items-center justify-center">
        {photographyData?.photographs?.slice(0, count).map((p, index) => (
          <div
            // onClick={() => setRepo(repo)}
            key={index}
            className="relative mx-2 my-4 min-h-fit min-w-[16rem] shrink-0 grow-0 basis-1/3 rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105 sm:min-w-[23rem]"
          >
            {/* <Carousel photographData={p} key={index} /> */}
            <div className="relative h-48 w-full sm:h-72">
              {/* <Image src={`/assets/photography/${p.type}/${p.slug}/0.jpg`} layout="fill" className="rounded-lg" alt="avatar" objectFit="cover" /> */}
              <div style={{ backgroundImage: `url('${p.images[0]}` }} className="absolute inset-0 rounded-lg bg-cover bg-center"></div>
              <div className="group absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg px-2 text-center text-black/0 duration-200 hover:bg-white/80 group-hover:text-black dark:text-white/0 hover:dark:bg-black/60 group-hover:dark:text-white">
                <p className="cursor-pointer text-xl font-semibold text-black/0 line-clamp-2 hover:scale-110 hover:underline group-hover:text-black dark:text-white/0 dark:group-hover:text-white">
                  {p.title}
                </p>
                <p className="max-h-2/4 w-full text-ellipsis leading-normal text-opacity-0 line-clamp-3 group-hover:text-black dark:text-opacity-0 dark:group-hover:text-white sm:line-clamp-5">
                  {p.description}
                </p>

                <div
                  className="my-1 rounded-lg bg-opacity-0 px-2 py-1 text-xs text-opacity-0 group-hover:bg-lightText group-hover:text-white dark:group-hover:bg-zinc-800"
                  key={index}
                >
                  {p.type}
                </div>
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
          onClick={() => {
            if (count < photographyData?.photographs?.length) setCount((prev) => prev + 2)
            else window.open('http://instagram.com/jevonlevin', '_blank')
          }}
        >
          {count < photographyData?.photographs?.length ? <MdArrowDropDown /> : <AiFillInstagram />}
        </button>
      </div>
    </div>
  )
}

export default Photography
