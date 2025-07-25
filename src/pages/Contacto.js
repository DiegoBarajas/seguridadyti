import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact/Contact'

const Contacto = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <title>SERVINTEC | Contacto</title>

            <Navbar />
            <Contact />
            <Footer />
        </>
    )
}

export default Contacto