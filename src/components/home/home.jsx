"use client";
import React, { useState } from "react";
import "./style.scss";
import CurvedLoop from "./background/curvedLoop/curvedLoop";
import AnimatedBubbleParticles from "./background";


const Hero = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setTransform({ x, y });
  };

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>
      <AnimatedBubbleParticles
        particleColor="#b8a4ff"
        particleSize={30}
        spawnInterval={500}
        initialParticleCount={20}
        height="100vh"
        width="100vw"
        enableGooEffect={true}
        blurStrength={10}
        pauseOnBlur={true}
        zIndex={1}
        className="particle-background"
      />

      <CurvedLoop
        marqueeText="This ✦ Website ✦ Is ✦ Under ✦ Construction !"
        speed={2}
        curveAmount={200}
        direction="left"
        interactive={true}
        className="custom-text-style"
      />

      <h1
        className="hero-text"
        style={{
          transform: `rotateX(${transform.y}deg) rotateY(${transform.x}deg)`,
        }}
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
      >
        White-Cinette
      </h1>

      {/* {hovered && (
        <p className={`hero-subtext ${hovered ? "active" : ""}`}>
          We are a creative tech company building 3D, AI & immersive experiences.
        </p>
      )} */}
      <p className="hero-subtext active">
  We are a creative tech company building 3D, AI & immersive experiences.
</p>

    </div>
  );
};

export default Hero;