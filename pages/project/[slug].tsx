import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import { useContext } from 'react'
import Motion from '../../components/Motion'
import AppContext from '../../context/AppContext'
import ErrorPage from '../404'

const ProjectDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const value = useContext(AppContext)
  const { githubRepos } = value.state

  const repo = githubRepos?.repositories?.find((r) => r.name == slug)

  if (!repo) {
    return <ErrorPage />
  }

  return (
    <Motion title={`Jevon Levin | ${slug}`} description="Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!">
      <div className="my-8 flex flex-row justify-between px-3 font-sen sm:items-center">
        <div>
          <p className="text-3xl font-bold text-black dark:text-white">{repo.name}</p>
          <p className="mt-1 text-lg text-gray-600">{repo.description}</p>
        </div>
      </div>
    </Motion>
  )
}

export default ProjectDetail
