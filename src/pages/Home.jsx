import React from 'react'
import Hero from '../components/Hero/Hero'
import CardSection from '../components/ImpactProjects/CardSection'
import ImpactProjects from '../components/Impact/ImpactProject'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='mt-20'>
        <Hero />
        {/* <CardSection /> */}
        <ImpactProjects />
        <WhoWeAre />
        
    </div>
  )
}

export default Home