import Hero from "@/components/hero/Hero"
import About from "@/components/about/About"
import Skills from "@/components/skills/Skills"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import Contact from "@/components/contact/Contact"
import Projects from "@/components/projects/Projects"
import Education from "@/components/education/Education"
import Experience from "@/components/experience/Experience"
import Dissertation from "@/components/dissertation/Dissertation"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Dissertation />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}