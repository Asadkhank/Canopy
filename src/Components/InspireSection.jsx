import React from "react";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import pic1 from "../assets/shutterstockfruit.webp";

const InspireSection = () => {
  return (
    <section className="w-full">
      <div
        className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] lg:w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        {/* Text Overlay */}
        <div className="absolute inset-0 flex lg:items-center lg:justify-center px-4 sm:px-8">
          <div className="lg:bg-white/90 text-white rounded-lg p-6 w-[100%] sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:text-black text-center">
              Eat the rainbow!
            </h2>
            <p className="lg:text-black text-center mt-2 text-sm sm:text-base lg:text-lg">
              The easy way to get your 5 a day
            </p>
            {/* Styled Email Input */}
            <div className="flex items-center mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow border border-gray-300 rounded-l px-4 py-2 text-sm sm:text-base focus:outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-r flex items-center justify-center">
                <FiSend className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Div */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col sm:flex-row lg:items-center lg:justify-center space-y-4 sm:space-y-0 sm:space-x-6 bg-red-600 text-white py-4 px-4 sm:px-6">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-center sm:text-left">
            Offers and rollbacks
          </h2>
          <span className="hidden sm:block text-xs sm:text-sm md:text-base">
            Browse our best offers and bag yourself a bargain
          </span>
          <Link to="/productpage" className="mt-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
            Shop Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InspireSection;
