import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './Hero/hero'
import Component from './Component/Navitems'
import Products from './Products/products'
import TopProducts from './TopProducts/topproducts'
import Banneres from './Banneres/banner'
import Subscribe from './Subscribe/subscribe'
import Testimonial from './Testimonial/Testimonials'
import Popup from './assets/popup/popup'
import Footer from '../src/Footer/footer'

import './App.css'


function App() {
  
const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Component/>
      <Hero/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banneres/>
      <Subscribe/>
      <Testimonial/>
      <Footer/>

      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

      
    
    </>
  )
}

export default App
