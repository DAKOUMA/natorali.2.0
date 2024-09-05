import React, { useEffect, useRef, useState } from 'react'

const TeamMember = (props) => {
  const member = props.member
  const borderStyle = { borderRadius: member.borderImg }

  const [animation, setAnimation] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const cardRef = useRef(null)

  const handleMousePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const setProperties = (properties) => {
    for (const [property, value] of Object.entries(properties)) {
      cardRef.current.style.setProperty(property, value)
    }
  }

  const mousePosition = () => {
    const card = cardRef.current.getBoundingClientRect()
    const mouseX = position.x - card.left
    const mouseY = position.y - card.top

    const properties = {
      '--mouseDegX': `${Math.floor(((mouseX / card.width) - 0.5) * 25)}deg`,
      '--mouseDegY': `${Math.floor(((mouseY / card.height) - 0.5) * 25)}deg`,
      '--mousePxX': `${Math.floor(((mouseX / card.width) - 0.5) * 20) / 2}px`,
      '--mousePxY': `${Math.floor(((mouseY / card.height) - 0.5) * 20) / 2}px`,
    }

    setProperties(properties)
  }

  const resetProperties = () => {
    const properties = {
      '--mouseDegX': '0deg',
      '--mouseDegY': '0deg',
      '--mousePxX': '0px',
      '--mousePxY': '0px',
    }
    setProperties(properties)
  }

  /** */

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMousePosition)
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMousePosition)
      }
    }
  })

  useEffect(() => {
    if (cardRef.current && animation) {
      mousePosition()
    }
  }, [position])

  return (
    <div
      className='team-card card'
      ref={cardRef}
      onMouseEnter={() => setAnimation(prevAnimation => !prevAnimation)}
      onMouseLeave={() => {
        setAnimation(prevAnimation => !prevAnimation)
        resetProperties()
      }}
    >
      <img src={member.photo} alt="" style={borderStyle} />
      <div className="team-card-text">
        <h1>{member.name}</h1>
        <span>{member.title}</span>
      </div>
    </div>
  )
}

export default TeamMember