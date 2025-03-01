import React, { useState, useEffect } from 'react';
import logo from '../images/logo/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleInfo, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navitems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [infoToggle, setInfoToggle] = useState(false);
    const [fixedHeader, setFixedHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setFixedHeader(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when resizing to desktop
   

    return (
        <header className={`bg-gray-900 text-white fixed w-full z-50 transition-all duration-300 ${fixedHeader ? "shadow-lg" : ""}`}>
            {/* Header Top - Mobile Info Bar */}
            <div className={`w-full bg-blue-600 py-2 px-4 transition-all duration-300 ${infoToggle ? "block" : "hidden"} md:hidden`}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-4">
                        <a href="/signUp" className="text-white font-medium hover:underline">Create Account</a>
                        <span className="text-white/50">|</span>
                        <a href="/signIn" className="text-white font-medium hover:underline">Log In</a>
                    </div>
                    <button onClick={() => setInfoToggle(false)} className="text-white hover:opacity-75 transition-opacity">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            </div>

            {/* Header Bottom */}
            <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
                {/* Logo */}
                <a href="/">
                    <img src={logo} alt="Logo" className="h-10 transition-opacity hover:opacity-80" />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-8">
                        <a href="/" className="nav-link">Home</a>
                        <a href="/about" className="nav-link">About</a>
                        <a href="/blog" className="nav-link">Blog</a>
                        <a href="/contact" className="nav-link">Contact</a>
                    </div>
                    <div className="ml-8 flex space-x-4">
                        <a href="/signUp" className="primary-btn">Create Account</a>
                        <a href="/signIn" className="secondary-btn">Login</a>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex gap-4">
                    <button 
                        onClick={() => setInfoToggle(!infoToggle)}
                        className="text-white hover:text-blue-400 transition-colors"
                        aria-label="Toggle info menu"
                    >
                        <FontAwesomeIcon icon={faCircleInfo} className="text-2xl" />
                    </button>
                    <button 
                        onClick={() => setMenuToggle(!menuToggle)}
                        className="text-white hover:text-blue-400 transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        <FontAwesomeIcon icon={menuToggle ? faTimes : faBars} className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden bg-gray-800 text-white transition-all duration-300 ease-in-out overflow-hidden ${
                menuToggle ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}>
                <div className="container mx-auto px-4">
                    <a href="/" className="block py-3 border-b border-gray-700 hover:bg-gray-700">Home</a>
                    <a href="/about" className="block py-3 border-b border-gray-700 hover:bg-gray-700">About</a>
                    <a href="/blog" className="block py-3 border-b border-gray-700 hover:bg-gray-700">Blog</a>
                    <a href="/contact" className="block py-3 hover:bg-gray-700">Contact</a>
                    <div className="py-4 border-t border-gray-700">
                        <a href="/signUp" className="block primary-btn text-center mb-3">Create Account</a>
                        <a href="/signIn" className="block secondary-btn text-center">Login</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navitems;