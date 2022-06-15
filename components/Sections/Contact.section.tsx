import type { NextComponentType } from 'next'
import { Icon } from '../Misc/Icon.component'
import { FiLinkedin, FiMail } from 'react-icons/fi'
import { RiGithubLine, RiInstagramLine } from 'react-icons/ri'
const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<RiGithubLine />} url="https://github.com/je-von" newTab={true} />
        <Icon icon={<FiLinkedin />} url="https://www.linkedin.com/in/jevon-levin/" newTab={true} />
        <Icon icon={<FiMail />} url="mailto:jevon.levin@gmail.com" newTab={true} />
        <Icon icon={<RiInstagramLine />} url="http://instagram.com/jevonlevin" newTab={true} />
      </div>
    </div>
  )
}

export default Contact
