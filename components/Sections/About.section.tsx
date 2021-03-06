import type { NextComponentType } from 'next'

import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'

import Tooltip from '../Misc/Tooltip'

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row justify-between px-3 font-sen sm:items-center">
      <div>
        <p className="text-3xl font-bold text-black dark:text-white">Jevon Levin</p>
        <p className="mt-1 text-lg text-gray-600">Full Stack Developer, Photographer, and a Student</p>

        <div className="mt-4 flex flex-wrap items-center text-gray-400">
          <div className="mr-1">Build web app, take pictures,</div>
          <Tooltip content={<Image src="/assets/hershey.jpg" width="70" height="70" className="rounded-lg" alt="avatar" />} direction="right">
            <div className="flex cursor-pointer items-center">
              cuddle with{' '}
              <Link href={'http://instagram.com/hershey.maltipoo'}>
                <a target="_blank" rel="noopener noreferrer">
                  <b className="ml-1 items-center text-gray-400"> Hershey</b>
                </a>
              </Link>
              <BsInfoCircle className="ml-2 text-xs" />
            </div>
          </Tooltip>
        </div>

        <Tooltip
          content={
            <div className="flex w-24 px-2 py-1">
              <p className="w-full whitespace-pre-wrap break-words text-xs font-thin text-white dark:text-black">
                Sorry 😔, this feature isn&apos;t available yet!
              </p>
            </div>
          }
          direction="bottom"
        >
          <Link href="#" passHref>
            <a
              className="mt-4 flex w-fit cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <AiOutlineAlignLeft className="mr-1 text-black dark:text-white" />
              read my resume
              <MdKeyboardArrowRight />
            </a>
          </Link>
        </Tooltip>
      </div>

      <div className="custom:block">
        <Image src="/assets/me.jpg" width="112" height="112" className="rounded-full" alt="avatar" />
      </div>
    </div>
  )
}

export default About
