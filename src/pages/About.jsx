import AboutIntro from '../components/About/AboutIntro'
import AboutHero from '../components/About/AboutHero'
import MilestonesSection from '../components/About/Milestones'
import AboutValues from '../components/About/AboutValues'
import Spotlight from '../components/About/Spotlight'
import FounderSection from '../components/About/Founder'
import Shapers from '../components/About/Shapers'
import TestimonialCarousel from '../components/About/TestimonialCarousel'

const About = () => {
  return (
    <div className= "w-full mt-20">

        <AboutIntro />
        <AboutHero />
        <MilestonesSection />
        <AboutValues />
        <Spotlight />
        <FounderSection />
        <Shapers />
        {/* <TestimonialSection /> */}
        <TestimonialCarousel />
        
    </div>
  )
}

export default About