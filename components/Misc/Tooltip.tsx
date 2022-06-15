import React, { useState } from 'react'

const Tooltip = (props) => {
  const [active, setActive] = useState(false)

  const showTip = () => {
    setActive(true)
  }

  const hideTip = () => {
    setActive(false)
  }

  return (
    <div className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && <div className={`Tooltip-Tip min-h-fit max-w-md ${props.direction || 'top'}`}>{props.content}</div>}
    </div>
  )
}

export default Tooltip
