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
      <div className="card"><h2>About Us</h2></div>
      <div className="card"><h2>Our Vision</h2></div>
      <div className="card"><h2>Team</h2></div>
      <div className="card"><h2>Why Choose Us</h2></div>
    </div>
  );
};

export default About;
