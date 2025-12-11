import Hero from '../components/Hero/Hero'
import ImpactProjects from '../components/Impact/ImpactProject'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'


const Home = () => {
  return (
    <div className='mt-20'>
        <Hero />
        <ImpactProjects />
        <WhoWeAre />
        
    </div>
  )
}

export default Home