import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TeamMember = (props) => {

  const cardAnimation = {
    hidden: { x: 0},
    visible: { x: [0, 10, -10, 10, 0] },
  }

  const member = props.member
  const borderStyle = { borderRadius: member.borderImg }
  const shakeDelay = member.delay

  const [animation, setAnimation] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)
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
    <motion.div
      className='card-div-container'
      initial={{ x: 0 }}
      animate={{ x: !hover ? [0, 10, -10, 0] : 0 }}
      transition={{ duration: 0.3, delay: shakeDelay, repeat: Infinity, repeatDelay: 2}}
    >
      <div
      className='team-card card'
      ref={cardRef}
      onMouseEnter={() => {
        setAnimation(prevAnimation => !prevAnimation)
        setHover(true)} }
      onMouseLeave={() => {
        setAnimation(prevAnimation => !prevAnimation)
        resetProperties()
        setHover(false)
      }}
      variants={cardAnimation}
    >
      <img src={member.photo} alt="" style={borderStyle} />
      <div className="team-card-text">
        <h1>{member.name}</h1>
        <span>{member.title}</span>
      </div>
    </div>
    </motion.div>
    
  )
}

export default TeamMember