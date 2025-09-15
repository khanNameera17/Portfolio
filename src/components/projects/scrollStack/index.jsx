'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.scss'

gsap.registerPlugin(ScrollTrigger)

const defaultProjects = [
  {
    title: 'HRMS Dashboard',
    description:
      'A comprehensive human resource management tool that provides real-time Attendance data and insights for business metrics.',
    tags: ['React', 'Mongo DB', 'Node.js'],
    image: '/assets/HRMS.png'
  },
  {
    title: 'Hotel Booking',
    description:
      'A user-friendly hotel booking web application that allows customers to search, compare, and reserve rooms seamlessly.',
    tags: ['Next', 'Mongo DB', 'Node.js'],
    image: '/assets/Hotel-Booking.png'
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Complete online shopping solution with product catalog, cart functionality, and payment integration.',
    tags: ['Wordpress'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb6735c9-86b8-405f-ad40-0ad9b7967ff6.png'
  }
]

export default function ScrollStackProjects({ projects = defaultProjects }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.projectCard')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${projects.length * 80}%`, // shorter scroll
          scrub: true,
          pin: true,
        }
      })

      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          { y: '120%', opacity: 0 },
          { y: `${-i * 60}px`, opacity: 1, duration: 1 }, // bigger spacing
          i
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [projects])

  return (
    <section
      className="scrollStackContainer"
      style={{ height: `${projects.length * 40}vh` }}
      ref={containerRef}
    >
      {projects.map((p, i) => (
        <article key={i} className="projectCard">
          <div className="projectCardImage">
            <img src={p.image} alt={p.title} />
          </div>
          <div className="projectCardContent">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
