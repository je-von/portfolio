import type { NextPage } from 'next'

import { Header, About, Coding, Contact } from '../components'
import Motion from '../components/Motion'
import Photography from '../components/Sections/Photography.section'

const Home: NextPage = () => {
  return (
    <Motion title="Jevon Levin | Home" description="Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!">
      <>
        <About />
        {/* <Skills /> */}
        <Coding />
        <Photography />
      </>
    </Motion>
  )
}

export default Home
