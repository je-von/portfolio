import type { NextComponentType } from 'next'

import Link from 'next/link'
import ProjectsData from '../../pages/api/projects.json'
const Projects: NextComponentType = () => {
  const projectsComponent = []

  const projects = ProjectsData
  for (let key in projects) {
    let project = projects[key]
    projectsComponent.push(
      <Link href={'/project/' + key} passHref key={key}>
        <a className="mx-2 my-4 h-[8rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-white px-2 text-center font-medium text-black dark:bg-black dark:text-white">
            <p className="text-xl font-semibold">{project.title}</p>
            <p className="h-2/4 w-full text-ellipsis line-clamp-2">{project.short_desc}</p>
          </div>
        </a>
      </Link>
    )
  }
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold">Featured Projects</p>
      <div className="my-4 flex flex-wrap items-center justify-center">{projectsComponent}</div>
    </div>
  )
}

export default Projects
