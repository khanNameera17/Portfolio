'use client'
import React, { useState } from 'react'
import './style.scss'
import CurvedLoop from './curvedLoop'

const Hero = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 30
    const y = (e.clientY / innerHeight - 0.5) * 30
    setTransform({ x, y })
  }

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>

<CurvedLoop 
  marqueeText="This ✦ Website ✦ Is ✦ Under ✦ Construction !"
  speed={3}
  curveAmount={400}
  direction="left"
  interactive={true}
  className="custom-text-style"
/>


      <h1
        className="hero-text"
        style={{
          transform: `rotateX(${transform.y}deg) rotateY(${transform.x}deg)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        White-Cinette
      </h1>

      {hovered && (
        <p className="hero-subtext">
          We are a creative tech company building 3D, AI & immersive experiences.
        </p>
      )}
    </div>
  )
}

export default Hero
