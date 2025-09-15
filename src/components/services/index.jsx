"use client";
import React from "react";
import "./style.scss";

const services = [
  {
    title: "Web Development",
    // bgColor: "#fde9d9", // light peach
    icon: "👁️", // you can replace with SVG/icon
  },
  {
    title: "App Development",
    // bgColor: "#a4f3d2", // mint green
    icon: "🧠",
  },
  {
    title: "WordPress",
    // bgColor: "#d1d2ff", // soft purple
    icon: "💻",
  },
  {
   title: "Shopify",
   // bgColor: "blue", // soft purple
   icon: "💻",
 },
 {
  title: "Branding",
  // bgColor: "blue", // soft purple
  icon: "💻",
},
];

const Services = () => {
 return (
   <section className="services-section">
     <div className="row">
       {services.slice(0, 3).map((service, index) => (
         <div
           // key={index}
           className="service-card"
           style={{ backgroundColor: service.bgColor }}
         >
           {/* <div className="service-icon">{service.icon}</div> */}
           <h2 className="service-title">{service.title}</h2>
         </div>
       ))}
     </div>

     <div className="row">
       {services.slice(3).map((service, index) => (
         <div
       
           className="service-card"
           style={{ backgroundColor: service.bgColor }}
         >
           {/* <div className="service-icon">{service.icon}</div> */}
           <h2 className="service-title">{service.title}</h2>
         </div>
       ))}
     </div>
   </section>
 );
};


export default Services;
