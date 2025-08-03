"use client";
import React from "react";
import "./style.scss";
import ScrollStack, { ScrollStackItem } from "./scrollStack";

const Projects = () => {
  return (
    <section id="projects" style={{ height: "100vh", overflow: "hidden" }}>
      <ScrollStack>
        <ScrollStackItem>
          <h2>Project 1</h2>
          <p>This is the first project card</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Project 2</h2>
          <p>This is the second project card</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Project 3</h2>
          <p>This is the third project card</p>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
};

export default Projects;
