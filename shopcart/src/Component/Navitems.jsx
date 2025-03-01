import React from 'react'
import { useState } from 'react';

const Navitems = () => {

    const  [menuToggle, setmenuToggle] = useState(false);
    const  [socialToggle, setsocialToggle] = useState(false);
    const  [fixedHeader, setfixedHeader] = useState(false);
    //add eventlistener
    window.addEventListener("scroll",()=>{
        if(window.scrollY>200){
            setfixedHeader(true);
        }
        else{
            setfixedHeader(false);
        }
    })

return (
    <header className={`header-section style-4 ${fixedHeader ? "header-fixed fadeInup" : ""}`}>
   {/* headertop-start */}
   <div className={`md:flex  hidden  ${socialToggle? "open":""}` }>
    <div className="container">
        <div className="flex justify-between">
            <a href="/signUp" className='lab-btn me-3'>
            <span className='bg-amber-300 text-[14px] rounded-[5px] font-medium hover:bg-blue-400 border-[1px] border-amber-300 hover:border-transparent p-[5px_10px]' >Create Account</span>
            </a>
            <a href="/signIn" className='lab-btn me-3'>
            <span className='bg-amber-300 text-[14px] rounded-[5px] font-medium hover:bg-blue-400 border-[1px] border-amber-300 hover:border-transparent p-[5px_10px]'>LogIn</span>
            </a>

        </div>

    </div>

   </div>
    </header>
)
}

export default Navitems