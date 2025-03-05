import React from "react";
import Banner from "../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white flex justify-center items-center popin"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10 px-6 text-center">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Stay Updated with Our Latest Products!
          </h1>
          <p className="text-lg opacity-80">
            Subscribe to receive updates on new arrivals and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg text-black outline-none border border-gray-300 focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
