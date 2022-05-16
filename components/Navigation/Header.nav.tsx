import type { NextComponentType, NextPageContext } from 'next'

import Link from 'next/link'
import { VscGithubAlt } from '../Misc/Icons.collection'

import type { linkProps } from '../../@types/prop.types'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const TextLink: NextComponentType<NextPageContext, {}, linkProps> = ({ text, url }) => {
  return (
    <a
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-black duration-100 hover:bg-black hover:text-white dark:text-gray-200 dark:hover:bg-white dark:hover:text-black"
    >
      {text}
    </a>
  )
}

const Header: NextComponentType = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className={`py-8 font-jost sm:flex sm:flex-row sm:items-center sm:justify-between`}>
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" url="#" />
        <TextLink text="Skills" url="#skills" />
        <TextLink text="Projects" url="#projects" />
        <TextLink text="Contact" url="#contact" />
      </p>

      <Image
        src="/assets/icon/sun.svg"
        width={30}
        height={30}
        alt="Toggle theme"
        className="toggleTheme cursor-pointer"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </header>
  )
}

export default Header
