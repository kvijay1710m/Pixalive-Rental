import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/Footer/Footer'
import Whyus from '../components/Whyus/Whyus'

const Contact = () => {
  return (
    <>
        <div className='mt-18'>
            <ContactForm/>
            <Whyus />
            <Footer />
        </div>
    </>
  )
}

export default Contact