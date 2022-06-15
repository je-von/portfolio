import type { NextPage } from 'next'

import { About, Coding } from '../components'
import Motion from '../components/Motion'
import Photography from '../components/Sections/Photography.section'

const Home: NextPage = () => {
  return (
    <Motion title="Jevon Levin | Home" description="Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!">
      <>
        <About />
        <Coding />
        <Photography />
      </>
    </Motion>
  )
}

export default Home
