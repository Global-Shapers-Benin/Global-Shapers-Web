import React from 'react'
import AboutIntro from '../components/About/AboutIntro'
import AboutHero from '../components/About/AboutHero'
import MilestonesSection from '../components/About/Milestones'
import AboutValues from '../components/About/AboutValues'
import Spotlight from '../components/About/Spotlight'
import FounderSection from '../components/About/Founder'
import Shapers from '../components/About/Shapers'
import TestimonialSection from '../components/About/Testimonials'
import TestimonialCarousel from '../components/About/TestimonialCarousel'
import Footer from '../components/Footer/Footer'

const About = () => {
  return (
    <div className= "w-full">
        <AboutIntro />
        <AboutHero />
        <MilestonesSection />
        <AboutValues />
        <Spotlight />
        <FounderSection />
        <Shapers />
        {/* <TestimonialSection /> */}
        <TestimonialCarousel />
        <Footer />
    </div>
  )
}

export default About