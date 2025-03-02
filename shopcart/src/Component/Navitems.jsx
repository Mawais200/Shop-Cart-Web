import React, { useState, useEffect,useRef } from 'react';
import logo from '../images/logo/logo.png';Button
import Button from './Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleInfo, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaCartArrowDown,FaCaretDown } from "react-icons/fa";

const Navitems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [infoToggle, setInfoToggle] = useState(false);
    const [fixedHeader, setFixedHeader] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const downref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setFixedHeader(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [fixedHeader]);
    useEffect(() =>{
        const handleClickOutside = (event) => {
        if(downref.current && !downref.current.contains(event.target)){
            isOpen(false);
        }};
        document.addEventListener("mousedown",handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

     const DropdownLinks = [
           {
             id: 1,
             name: "Trending Products",
             link: "/#",
           },
           {
             id: 2,
             name: "Best Selling",
             link: "/#",
           },
           {
             id: 3,
             name: "Top Rated",
             link: "/#",
           },
         ];
      

    return (
        <header className={`bg-gray-900 text-white fixed w-full z-50 transition-all duration-300 popin ${fixedHeader ? "shadow-lg" : ""}`}>
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
                {/* Search bar */}
                <div className='lg:flex hidden'>
                    <input type="text" placeholder='Search here' className='border-white border-[1px] md:w-[350px] md:h-[35px] rounded-4xl p-5' />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                   
                    <div className="flex space-x-8">
                        
                    <div className="relative" ref={downref}>
      {/* Navbar Link */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="nav-link flex items-center gap-1"
      >
        Home
        <span>
          <FaCaretDown
            className={`transition-all duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 z-[9999] w-[200px] rounded-md bg-white p-2 mt-[15px] text-black shadow-md">
          <ul>
            {DropdownLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

                        <a href="/about" className="nav-link">About</a>
                        
                        <a href="/contact" className="nav-link">Contact</a>
                    </div>
                    <div className="ml-[20px] flex space-x-4 items-center">
                        <div className='lg:flex hidden'> <Button/></div>
                        
                    <FaCartArrowDown className="bg-blue-600 text-[25px] py-[5px] lg:flex hidden hover:text-yellow-500 hover:scale-[1.06] w-[50px] h-[35px] rounded-[10px]" aria-label="Cart" />
                        <a href="/signUp" className="primary-btn text-nowrap">Create Account</a>
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
                   
                    <a href="/blog" className="block py-3 border-b border-gray-700 hover:bg-gray-700">Blog</a>
                    <a href="/contact" className="block py-3 hover:bg-gray-700">Contact</a>
                    <div className="py-4 border-t border-gray-700 ">
                   
                        <a href="/signUp" className="block primary-btn text-center mb-3">Create Account</a>
                        <a href="/signIn" className="block secondary-btn text-center">Login</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navitems;