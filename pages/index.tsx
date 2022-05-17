import type { NextPage } from 'next'

import { Header, About, Projects, Skills, Contact } from '../components'
import Motion from '../components/Motion'

const Home: NextPage = () => {
  return (
    <Motion title="Jevon Levin | Home" description="Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!">
      <>
        <About />
        {/* <Skills /> */}
        <Projects />
      </>
    </Motion>
  )
}

export default Home
