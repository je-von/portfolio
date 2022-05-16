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
    <a
      href={url}
      className="cursor-pointer rounded-md py-2 px-3 text-xl text-black duration-100 hover:bg-black hover:text-white dark:text-gray-200 dark:hover:bg-white dark:hover:text-black"
    >
      {text}
    </a>
  )
}

const Header: NextComponentType = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <header className={`flex flex-row items-center justify-between py-8`}>
      <p className="flex flex-row gap-x-4">
        <TextLink text={<i className="fa-solid fa-house"></i>} url="#" />
        <TextLink text={<i className="fa-solid fa-code"></i>} url="#projects" />
        <TextLink text={<i className="fa-solid fa-camera"></i>} url="#contact" />
      </p>
      <TextLink text={theme === 'light' ? <BsMoon onClick={toggleTheme} /> : <BsSun onClick={toggleTheme} />} url="#" />
    </header>
  )
}

export default Header
