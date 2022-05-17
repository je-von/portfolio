import type { NextPage } from 'next'

import { Header, About, Coding, Skills, Contact } from '../components'
import Motion from '../components/Motion'

const Home: NextPage = () => {
  return (
    <Motion title="Jevon Levin | Home" description="Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!">
      <>
        <About />
        {/* <Skills /> */}
        <Coding />
      </>
    </Motion>
  )
}

export default Home
