import React, { useState, useEffect } from 'react';
import logo from '../images/logo/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Navitems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [infoToggle, setInfoToggle] = useState(false);
    const [fixedHeader, setFixedHeader] = useState(false);

    // Scroll event listener using useEffect
    useEffect(() => {
        const handleScroll = () => {
            setFixedHeader(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header-section style-4 ${fixedHeader ? "header-fixed fadeInup" : ""}`}>
            {/* Header Top */}
            <div className={`flex md:hidden ${infoToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="flex justify-between">
                        <a href="/signUp" className='lab-btn me-3'>
                            <span className='bg-amber-300 text-[14px] rounded-[5px] font-medium hover:bg-blue-400 border-[1px] border-amber-300 hover:border-transparent p-[5px_10px]'>
                                Create Account
                            </span>
                        </a>
                        <a href="/signIn" className='lab-btn me-3'>
                            <span className='bg-amber-300 text-[14px] rounded-[5px] font-medium hover:bg-blue-400 border-[1px] border-amber-300 hover:border-transparent p-[5px_10px]'>
                                LogIn
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Header Bottom */}
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper flex justify-between items-center'>
                        {/* Logo */}
                        <div className='logo'>
                            <a href="/">
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>

                        {/* Navigation Menu */}
                        <div className='menu-area flex gap-[30px]'>
                            <div className='menu'>
                                <ul className={`md:flex gap-[20px] hidden ${menuToggle ? "active" : ""}`}>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>

                            {/* Signup / Login Buttons */}
                            <div className="md:flex justify-between hidden">
                                <a href="/signUp" className='lab-btn me-3'>
                                    <span className='bg-amber-300 text-[14px] rounded-[5px] font-medium hover:bg-blue-400 border-[1px] border-amber-300 hover:border-transparent p-[5px_10px]'>
                                        Create Account
                                    </span>
                                </a>
                                <a href="/signIn" className='lab-btn me-3'>
                                    <span className='bg-amber-300 text-[14px] rounded-[5px] font-medium hover:bg-blue-400 border-[1px] border-amber-300 hover:border-transparent p-[5px_10px]'>
                                        LogIn
                                    </span>
                                </a>
                            </div>

                            {/* Menu Toggle Button */}
                            <div className='block md:hidden'>
                                <FontAwesomeIcon icon={faBars} className='text-black cursor-pointer' onClick={() => setMenuToggle(!menuToggle)} />
                            </div>

                            {/* Dropdown Menu */}
                            <div className={`menu-dropdown absolute bg-white shadow-lg p-4 ${menuToggle ? "block" : "hidden"}`}>
                                <a href="/" className="block py-2">Home</a>
                                <a href="/about" className="block py-2">About</a>
                                <a href="/blog" className="block py-2">Blog</a>
                                <a href="/contact" className="block py-2">Contact</a>
                            </div>

                            {/* Info Toggle Button */}
                            <div className='block md:hidden'>
                                <FontAwesomeIcon icon={faCircleInfo} className='text-black cursor-pointer' onClick={() => setInfoToggle(!infoToggle)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navitems;
