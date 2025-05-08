import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ContactUs from '../components/JoinUs/ContactUs'
import BetterFuture from '../components/JoinUs/BetterFuture'
import Footer from '../components/Footer/Footer'
import FAQ from '../components/Contribute/FAQ'


const JoinUs = () => {
  return (
    <div className='mt-20'>
        <ContactUs />
        <BetterFuture />
        <FAQ />
       
    </div>
  )
}

export default JoinUs