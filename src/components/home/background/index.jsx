"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const AnimatedBubbleParticles = ({
  className = "",
  backgroundColor = "transparent", // Changed to transparent to avoid obscuring particles
  particleColor = "#ff0000", // Bright red for visibility during debugging
  particleSize = 50, // Larger size for visibility
  spawnInterval = 200,
  height = "100vh",
  width = "100vw",
  enableGooEffect = false, // Disable gooey effect for testing
  blurStrength = 10,
  pauseOnBlur = true,
  zIndex = -1,
  friction = { min: 1, max: 2 },
  scaleRange = { min: 0.4, max: 2.4 },
  children,
}) => {
  const containerRef = useRef(null);
  const particlesRef = useRef(null);
  const animationRef = useRef();
  const intervalRef = useRef();
  const particlesArrayRef = useRef([]);
  const isPausedRef = useRef(false);
  const gooId = "goo-filter";

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const createParticleElement = useCallback(() => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.cssText = `display: block; width: ${particleSize}px; height: ${particleSize}px; position: absolute; transform: translateZ(0px);`;
    svg.setAttribute("viewBox", "0 0 67.4 67.4");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "33.7");
    circle.setAttribute("cy", "33.7");
    circle.setAttribute("r", "33.7");
    circle.setAttribute("fill", particleColor);

    svg.appendChild(circle);
    console.log("Particle element created:", svg);
    return svg;
  }, [particleSize, particleColor]);

  const createParticle = useCallback(() => {
    const element = createParticleElement();
    if (particlesRef.current) {
      particlesRef.current.appendChild(element);
      console.log("Particle appended to DOM:", element);
    }

    const x = Math.random() * dimensions.width;
    const y = dimensions.height + 100;
    const steps = dimensions.height / 2;
    const frictionValue = friction.min + Math.random() * (friction.max - friction.min);
    const scale = scaleRange.min + Math.random() * (scaleRange.max - scaleRange.min);
    const siner = (dimensions.width / 2.5) * Math.random();
    const rotationDirection = Math.random() > 0.5 ? "+" : "-";

    element.style.transform = `translateX(${x}px) translateY(${y}px)`;

    return {
      x,
      y,
      vx: 0,
      vy: 0,
      scale,
      rotation: 0,
      rotationDirection,
      siner,
      steps,
      friction: frictionValue,
      element,
    };
  }, [createParticleElement, dimensions, friction, scaleRange]);

  const updateParticle = (particle) => {
    particle.y -= particle.friction;

    const left = particle.x + Math.sin((particle.y * Math.PI) / particle.steps) * particle.siner;
    const top = particle.y;
    const rotation = particle.rotationDirection + (particle.y + particleSize);

    if (particle.element) {
      const element = particle.element;
      element.style.transform = `translateX(${left}px) translateY(${top}px) scale(${particle.scale}) rotate(${rotation}deg)`;
    }

    if (particle.y < -particleSize) {
      if (particle.element && particle.element.parentNode) {
        particle.element.parentNode.removeChild(particle.element);
      }
      return false;
    }

    return true;
  };

  const animate = useCallback(() => {
    if (isPausedRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    particlesArrayRef.current = particlesArrayRef.current.filter(updateParticle);
    console.log("Particles count:", particlesArrayRef.current.length);

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const spawnParticle = useCallback(() => {
    if (!isPausedRef.current && dimensions.width > 0 && dimensions.height > 0) {
      const particle = createParticle();
      particlesArrayRef.current.push(particle);
      console.log("Particle spawned:", particle);
    }
  }, [dimensions, createParticle]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        console.log("Container dimensions:", rect.width, rect.height);
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!pauseOnBlur) return;

    const handleBlur = () => {
      isPausedRef.current = true;
    };
    const handleFocus = () => {
      isPausedRef.current = false;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [pauseOnBlur]);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      animationRef.current = requestAnimationFrame(animate);
      intervalRef.current = window.setInterval(spawnParticle, spawnInterval);
      console.log("Animation and spawn interval started");
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      particlesArrayRef.current.forEach((particle) => {
        if (particle.element && particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      particlesArrayRef.current = [];
      console.log("Animation and particles cleaned up");
    };
  }, [dimensions, spawnInterval, animate, spawnParticle]);

  return (
    <div
      ref={containerRef}
      className={`particle-container ${className}`}
      style={{
        backgroundColor,
        zIndex,
        width,
        height,
      }}
    >
      <div
        ref={particlesRef}
        className="particle-layer"
        style={{
          filter: enableGooEffect ? `url(#${gooId})` : undefined,
        }}
      />

      <div className="particle-content">{children}</div>

      {enableGooEffect && (
        <svg className="particle-filter">
          <defs>
            <filter id={gooId}>
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={blurStrength} />
              <feColorMatrix
                in="blur"
                result="colormatrix"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
              />
              <feBlend in="SourceGraphic" in2="colormatrix" />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};

export { AnimatedBubbleParticles };
export default AnimatedBubbleParticles;