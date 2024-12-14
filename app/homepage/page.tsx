import CallToAction from "./components/CallToAction"
import Contact from "./components/Contact"
import Health from "./components/Health"
import Hero from "./components/Hero"
import Prepositions from "./components/Prepositions"
import Services from "./components/Services"

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Health />
        <Services />
        <Prepositions />
        <CallToAction />
        <Contact />
    </div>
  )
}

export default HomePage