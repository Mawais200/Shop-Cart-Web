import React from "react";
import Image1 from "../assets/hero/women.png";
import Image2 from "../assets/hero/shopping.png";
import Image3 from "../assets/hero/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "His Life will forever be Changed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="relative overflow-hidden popin min-h-[520px] sm:min-h-[660px]  bg-gray-100 flex justify-center items-center pt-[50px] md:pt-0 dark:bg-gray-950 dark:text-white duration-200">
      {/* Background Pattern */}
      <div className="h-[400px] w-[600px] sm:h-[700px] sm:w-[700px] bg-primary/40 absolute -top-1/3 right-0 rounded-3xl rotate-45 -z-10"></div>

      {/* Hero Section */}
      <div className="container px-4 sm:px-8 pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* Text Content Section */}
                <div className="flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1 relative z-10 px-4 sm:px-0">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm sm:text-base"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-yellow-300 from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 sm:px-8 rounded-full text-sm sm:text-base"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="order-1 sm:order-2 flex justify-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="Hero Slide"
                      className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
