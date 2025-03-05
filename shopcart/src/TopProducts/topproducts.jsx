import React from "react";
import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "Comfortable and stylish casual wear for everyday use.",
    rating: 4,
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description: "Trendy printed shirts to enhance your style quotient.",
    rating: 5,
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description: "Elegant and fashionable shirts for women.",
    rating: 4,
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="flex justify-center">
    <div className="container popin ">
      {/* Header Section */}
      <div className="text-left md:text-center mb-24">
        <p className="text-sm text-primary" data-aos="fade-up">
          Top Rated Products for You
        </p>
        <h1 className="text-3xl font-bold" data-aos="fade-up">
          Best Products
        </h1>
        <p className="text-xs text-gray-400" data-aos="fade-up">
          Find the best quality and trending products at the best prices.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center pt-[40px]">
        {ProductsData.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            data-aos="zoom-in"
          >
            {/* Image Section */}
            <div className="h-[120px] flex justify-center items-center">
              <img
                src={product.img}
                alt={product.title}
                className="max-w-[140px] block mx-auto transform -translate-y-16 group-hover:scale-105 duration-300 drop-shadow-md"
              />
            </div>

            {/* Details Section */}
            <div className="p-4 text-center">
              {/* Star Rating (Dynamic) */}
              <div className="w-full flex items-center justify-center gap-1">
                {Array.from({ length: product.rating }).map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>

              <h1 className="text-xl font-bold">{product.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {product.description}
              </p>

              <button
                className="bg-primary hover:scale-105 duration-300 text-black cursor-default py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={handleOrderPopup}
              >
                Order {product.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TopProducts;
