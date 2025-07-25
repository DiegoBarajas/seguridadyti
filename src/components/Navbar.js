import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import logoPng from '../assets/images/logo.png'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const currentRoute = useLocation().pathname;  

    const links = [
        {
            text: "Inicio",
            to: "/",
            title: "Ir al inicio"
        },
        {
            text: "Portafolio",
            to: "/portfolio",
            title: "Nuestros trabajos"
        },
        {
            text: "Contacto",
            to: "/contact",
            title: "Contactanos"
        },
    ]

    return (
        <header className="sticky top-0 bg-white shadow z-50">
            {/* Gradient bar */}
            <div className="bg-gradient-to-r from-[#005aab] to-green-800 h-1 animate-pulse"></div>

            <nav className="flex items-center justify-between px-4 py-3 md:px-8">
                {/* Logo */}
                <Link to='/' title='Servicios integrales en tecnologia'>
                    <img
                        src={logoPng}
                        alt="Company Logo"
                        className="h-6 md:h-8"
                    />
                </Link>

                {/* Hamburger Button with Animation */}
                <button
                    className="md:hidden relative w-8 h-8 flex items-center justify-center z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span
                        className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                        mobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                        }`}
                    />
                    <span
                        className={`block absolute h-0.5 w-6 bg-black transition duration-300 ease-in-out ${
                        mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                        mobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                        }`}
                    />
                </button>


                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm font-medium">
                {
                    links.map((link, indx) => 
                        <li key={`navbar-item-${indx}`}>
                            <Link 
                                className={ clsx(link.to === currentRoute ? "text-[#004a8c] font-bold" : "hover:text-[#005aab]") }
                                title={link.title} to={link.to}
                            >{link.text}</Link>
                        </li>
                    )
                }
                </ul>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <ul className="flex flex-col space-y-4 text-center p-6 bg-white shadow-md md:hidden">
                    {
                        links.map((link, indx) => 
                            <li key={`navbar-mobile-item-${indx}`}>
                                <Link
                                    className={ clsx(link.to === currentRoute ? "text-[#004a8c] font-bold" : "hover:text-[#005aab]") } 
                                    title={link.title} 
                                    to={link.to} 
                                    onClick={() => setMobileMenuOpen(false)}>{link.text}</Link>
                            </li>
                        )
                    }
                </ul>
            )}
        </header>
    );
};

export default Navbar;