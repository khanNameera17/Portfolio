'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.scss'

gsap.registerPlugin(ScrollTrigger)

const defaultProjects = [
  {
    title: 'Analytics Dashboard',
    description:
      'A comprehensive data visualization tool that provides real-time analytics and insights for business metrics.',
    tags: ['React', 'D3.js', 'Node.js'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be6b1ffd-10d1-462c-b987-f63063fbe85f.png'
  },
  {
    title: 'Fitness Tracker',
    description:
      'Mobile application that tracks workouts, nutrition, and provides personalized fitness recommendations.',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d07269ae-4948-4352-9c10-3c624803f9d1.png'
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Complete online shopping solution with product catalog, cart functionality, and payment integration.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
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
