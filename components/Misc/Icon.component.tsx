import React, { FC } from 'react'
import type { NextComponentType, NextPageContext } from 'next'

import Link from 'next/link'

import type { iconProps } from '../../@types/prop.types'

const Icon: NextComponentType<NextPageContext, {}, iconProps> = ({ icon, url, newTab }) => {
  return (
    <Link href={url} passHref>
      <a
        target={newTab && '_blank'}
        rel={newTab && 'noopener noreferrer'}
        className="cursor-pointer rounded-md p-2 text-xl text-black duration-100 hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
      >
        {icon}
      </a>
    </Link>
  )
}

export { Icon }
