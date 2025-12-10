import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ContactUs from '../components/ContactUs/ContactUs'
import BetterFuture from '../components/ContactUs/BetterFuture'
import Footer from '../components/Footer/Footer'
import FAQ from '../components/Contribute/FAQ'


const Contact = () => {
  return (
    <div className='mt-20'>
        <ContactUs />
        <BetterFuture />
        <FAQ />
       
    </div>
  )
}

export default Contact