import type { NextComponentType, NextPageContext } from 'next'

import Link from 'next/link'
import { VscGithubAlt } from '../Misc/Icons.collection'

import type { linkProps } from '../../@types/prop.types'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { FaSun } from 'react-icons/fa'
import { BsMoon, BsSun } from 'react-icons/bs'

const TextLink: NextComponentType<NextPageContext, {}, linkProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a className="cursor-pointer rounded-md py-2 px-3 text-xl text-black duration-100 hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black">
        {text}
      </a>
    </Link>
  )
}

const Header: NextComponentType = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <header className={`flex flex-row items-center justify-between py-8`}>
      <p className="flex flex-row gap-x-4">
        <TextLink text={<i className="fa-solid fa-house"></i>} url="/" />
        <TextLink text={<i className="fa-solid fa-code"></i>} url="/#coding" />
        <TextLink text={<i className="fa-solid fa-camera"></i>} url="/#photography" />
      </p>
      <div onClick={toggleTheme} className="flex">
        <TextLink text={theme === 'light' ? <BsMoon /> : <BsSun />} url="#" />
      </div>
    </header>
  )
}

export default Header
