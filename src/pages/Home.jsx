import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import ExperienceArchive from '../components/ExperienceArchive.jsx'
import Skills from '../components/Skills.jsx'
import Education from '../components/Education.jsx'
import About from '../components/About.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <ExperienceArchive />
      <Skills />
      <Projects />
      
    </>
  )
}
