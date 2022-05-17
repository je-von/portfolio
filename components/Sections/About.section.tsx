import type { NextComponentType } from 'next'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { HiOutlineArrowNarrowRight } from '../Misc/Icons.collection'
import Tooltip from '../Misc/Tooltip'

const About: NextComponentType = () => {
  // const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="my-8 flex flex-row justify-between px-3 font-sen sm:items-center">
      <div>
        <p className="text-3xl font-bold text-black dark:text-white">Jevon Levin</p>
        <p className="mt-1 text-lg text-gray-600">Fullstack Developer, Photographer, and a Student</p>

        <div className="mt-4 text-gray-400">
          Build web app, take pictures,{' '}
          <Tooltip content={<Image src="/assets/hershey.jpg" width="70" height="70" className="rounded-lg" alt="avatar" />} direction="right">
            <div className="cursor-pointer">
              cuddle with <b>Hershey</b>.
            </div>
          </Tooltip>
          {/* <div className="ml-1 cursor-pointer" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            {isHovering ? <Image src="/assets/hershey.jpg" width="50" height="50" className="rounded-full" alt="avatar" /> : <b>Hershey.</b>}
          </div> */}
        </div>

        <Link href="#" passHref>
          <a
            className="mt-4 flex w-fit cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            read my resume
            <MdKeyboardArrowRight />
          </a>
        </Link>
      </div>

      <div className="custom:block">
        <Image src="/assets/me.jpg" width="112" height="112" className="rounded-full" alt="avatar" />
      </div>
    </div>
  )
}

export default About
