import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Works from '../components/Portfolio/Works'

const Portfolio = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <Navbar />
            <Works />
            <Footer />
        </>
    )
}

export default Portfolio