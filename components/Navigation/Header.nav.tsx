import type { NextComponentType, NextPageContext } from 'next'

import { useTheme } from 'next-themes'
import { FaCode } from 'react-icons/fa'
import { BsMoon, BsSun } from 'react-icons/bs'
import { Icon } from '../Misc/Icon.component'
import { TiHome } from 'react-icons/ti'
import { HiCamera } from 'react-icons/hi'

const Header: NextComponentType = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <header className={`flex flex-row items-center justify-between py-8`}>
      <p className="flex flex-row gap-x-4">
        <Icon icon={<TiHome className="text-2xl" />} url="/" newTab={false} />
        <Icon icon={<FaCode className="text-2xl" />} url="/#coding" newTab={false} />
        <Icon icon={<HiCamera className="text-2xl" />} url="/#photography" newTab={false} />
      </p>
      <div onClick={toggleTheme} className="flex">
        <Icon icon={theme === 'light' ? <BsMoon /> : <BsSun />} url="#" newTab={false} />
      </div>
    </header>
  )
}

export default Header
