import React from "react";
import Img1 from "../assets/women/women.png";
import Img2 from "../assets/women/women2.jpg";
import Img3 from "../assets/women/women3.jpg";
import Img4 from "../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 popin flex justify-center">
      <div className="container px-5">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-medium">
            Top Selling Products for You
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold text-gray-800">
            Our Featured Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500 mt-2">
            Explore the latest and trending collections with top-notch quality.
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-[250px] w-full object-cover rounded-md"
              />
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-500">Color: {data.color}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <FaStar className="text-yellow-400" />
                  <span className="text-gray-700 font-medium">{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-primary hover:bg-opacity-90 text-white py-2 px-6 rounded-lg text-lg font-semibold shadow-md transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
