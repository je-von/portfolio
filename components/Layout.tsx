import { ThemeProvider } from 'next-themes'
import { useState } from 'react'
import useSWR from 'swr'
import { Data } from '../@types/prop.types'
import AppContext from '../context/AppContext'
import { fetcher } from '../lib/fetcher'
import Header from './Navigation/Header.nav'
import Contact from './Sections/Contact.section'
import { AnimatePresence, motion } from 'framer-motion'
import { MutatingDots } from 'react-loader-spinner'
const Layout = (props) => {
  const { data: repoData, isValidating: isValidatingRepo } = useSWR<Data>('/api/github', fetcher)
  const [githubRepos, setGithubRepos] = useState(repoData)

  const { data: photoData, isValidating: isValidatingPhoto } = useSWR<Data>('/api/photography', fetcher)
  const [photographyData, setPhotographs] = useState(photoData)

  const content = (child) => (
    <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <ThemeProvider attribute="class">{child}</ThemeProvider>
    </AnimatePresence>
  )

  if ((isValidatingPhoto && !photoData) || (isValidatingRepo && !repoData)) {
    // if ((isValidatingPhoto || !photoData )|| (isValidatingRepo || !repoData)) {
    return content(
      <div className="flex h-screen w-screen items-center justify-center">
        <MutatingDots color="#D8B4FE" secondaryColor="#FCA5A5" height={100} width={110} />
      </div>
    )
  }

  return (
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
      {content(
        <div className="flex min-h-screen flex-col px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
          <Header />
          {props.children}
          <div className="bottom-0 mt-auto flex justify-center">
            <Contact />
          </div>
        </div>
      )}
    </AppContext.Provider>
  )
}

export default Layout
