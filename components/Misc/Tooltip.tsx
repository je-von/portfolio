import React, { useState } from 'react'

const Tooltip = (props) => {
  let timeout
  const [active, setActive] = useState(false)

  const showTip = () => {
    setActive(true)
  }

  const hideTip = () => {
    setActive(false)
  }

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip min-h-fit max-w-md ${props.direction || 'top'}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  )
}

export default Tooltip
