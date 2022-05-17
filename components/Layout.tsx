import { ThemeProvider } from 'next-themes'
import { Component, useState } from 'react'
import useSWR from 'swr'
import { Data } from '../@types/prop.types'
import AppContext from '../context/AppContext'
import { fetcher } from '../lib/fetcher'
import Header from './Navigation/Header.nav'
import Contact from './Sections/Contact.section'

const Layout = (props) => {
  const { data } = useSWR<Data>('/api/github', fetcher)
  const [githubRepos, setGithubRepos] = useState(data)
  return (
    <AppContext.Provider
      value={{
        state: {
          githubRepos: data,
        },
        setGithubRepos: setGithubRepos,
      }}
    >
      <ThemeProvider attribute="class">
        <div className="flex min-h-screen flex-col px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
          <Header />
          <div className="">{props.children}</div>
          <div className="bottom-0 mt-auto flex justify-center">
            <Contact />
          </div>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default Layout
