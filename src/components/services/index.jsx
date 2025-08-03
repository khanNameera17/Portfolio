"use client";
import React from "react";
import "./style.scss";

const services = [
  {
    title: "SEO",
    // bgColor: "#fde9d9", // light peach
    icon: "👁️", // you can replace with SVG/icon
  },
  {
    title: "USER EXPERIENCE",
    // bgColor: "#a4f3d2", // mint green
    icon: "🧠",
  },
  {
    title: "Web App",
    // bgColor: "#d1d2ff", // soft purple
    icon: "💻",
  },
  {
   title: "Mobile App",
   // bgColor: "blue", // soft purple
   icon: "💻",
 },
 
];

const Services = () => {
  return (
    <section className="services-section">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-card"
          style={{ backgroundColor: service.bgColor }}
        >
          <div className="service-icon">{service.icon}</div>
          <h2 className="service-title">{service.title}</h2>
        </div>
      ))}
    </section>
  );
};

export default Services;
