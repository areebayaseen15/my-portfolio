import Hero from "./Components/hero";
import Contact from "./Components/contact"
import Skill from "./Components/skill";
import AboutMe from "./Components/About";
import Navbar from "./Components/navbar";
import MarqueeProjects from "./Components/projects";


export default function Home() {
  return (
    <div>
       <Navbar />
    <Hero/>
    <AboutMe/>
    <Skill/>

    <MarqueeProjects/>
    <Contact/>
    </div>
  )
  }