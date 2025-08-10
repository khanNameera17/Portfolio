"use client";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.scss";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".card");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 2),
      ease: "none",
      scrollTrigger: {
        trigger: scrollRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 2),
        end: () => "+=" + scrollRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="scrolling-wrapper" ref={scrollRef}>
      <div className="card">
        <h2>About Us</h2>
        <p>
          White Cinette is a premier digital solutions studio crafting elegant,
          high-performance websites, mobile applications, and tailored
          marketing strategies. We partner with brands nationwide, blending
          innovation, design, and technology to transform visions into impactful
          digital experiences.
        </p>
      </div>

      <div className="card">
        <h2>Our Vision</h2>
        <p>
          We envision a digital-first world where every brand—big or small—has
          the opportunity to thrive through technology. Our goal is to bridge
          creativity and functionality, delivering solutions that inspire lasting
          connections with audiences.
        </p>
      </div>

      <div className="card">
        <h2>Team</h2>
        <p>
          Our team is a blend of innovators, designers, developers, and
          strategists united by a passion for excellence. We combine diverse
          skills and perspectives to create unique solutions tailored to each
          client.
        </p>
      </div>

      <div className="card">
        <h2>Why Choose Us</h2>
        <p>
          Partnering with White Cinette means working with a dedicated team that
          understands your vision and works tirelessly to bring it to life. We
          combine cutting-edge technologies, user-centered design, and
          data-driven strategies to deliver lasting results.
        </p>
      </div>
    </div>
  );
};

export default About;
