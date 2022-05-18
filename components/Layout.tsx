import { ThemeProvider } from 'next-themes'
import { Component, useState } from 'react'
import useSWR from 'swr'
import { Data } from '../@types/prop.types'
import AppContext from '../context/AppContext'
import { fetcher } from '../lib/fetcher'
import Header from './Navigation/Header.nav'
import Contact from './Sections/Contact.section'
import { AnimatePresence, motion } from 'framer-motion'

const Layout = (props) => {
  const { data: repoData } = useSWR<Data>('/api/github', fetcher)
  const [githubRepos, setGithubRepos] = useState(repoData)

  const { data: photoData } = useSWR<Data>('/api/photography', fetcher)
  const [photographyData, setPhotographs] = useState(photoData)

  return (
    <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <AppContext.Provider
        value={{
          state: {
            githubRepos: repoData,
            photographyData: photoData,
          },
          setGithubRepos: setGithubRepos,
          setPhotographs: setPhotographs,
        }}
      >
        <ThemeProvider attribute="class">
          <div className="flex min-h-screen flex-col px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
            <Header />
            {props.children}
            <div className="bottom-0 mt-auto flex justify-center">
              <Contact />
            </div>
          </div>
        </ThemeProvider>
      </AppContext.Provider>
    </AnimatePresence>
  )
}

export default Layout
