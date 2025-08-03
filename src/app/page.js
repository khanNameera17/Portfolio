import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/home/home";
import Projects from "@/components/projects";
import Services from "@/components/services";




export default function Home() {
  return (
    <>
      <section id="#">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
