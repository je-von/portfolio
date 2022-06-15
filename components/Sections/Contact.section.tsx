import type { NextComponentType } from 'next'

import { BsSpotify, MdEmail, AiOutlineGithub, AiOutlineTwitter } from '../Misc/Icons.collection'

import { Icon } from '../Misc/Icon.component'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/je-von" />
        <Icon icon={<FaLinkedin />} url="https://www.linkedin.com/in/jevon-levin/" />

        <Icon icon={<MdEmail />} url="mailto:jevon.levin@gmail.com" />

        <Icon icon={<AiFillInstagram />} url="http://instagram.com/jevonlevin" />
      </div>
    </div>
  )
}

export default Contact
