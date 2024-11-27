import React, { useState } from "react";
import TestimonialSlider from "./TestimonialSlider";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa"; // Import arrow icon from react-icons
import shutterstock from "../assets/shutterstock.webp";
import ProductCards from "./ProductCards";
import OfferSection from "./OfferSection";
import ShopGroceries from "./ShopGroceries";

const MeatNatural = () => {
  const [isContentVisible, setIsContentVisible] = useState(false); // State to track visibility of description content
  const [isNutritionVisible, setIsNutritionVisible] = useState(false); // State to track visibility of nutrition info

  // Function to toggle description content visibility
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  // Function to toggle nutrition information visibility
  const toggleNutrition = () => {
    setIsNutritionVisible(!isNutritionVisible);
  };

  return (
    <>
      <TestimonialSlider />

      {/* Hero Section */}
      <section className="lg:mt-8">
        <div
          className="relative min-h-[60vh] sm:min-h-[50vh] lg:min-h-[40vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${shutterstock})` }}
        >
          <div className="absolute inset-0 flex items-center px-4">
            <div className="rounded-lg p-6 w-full sm:w-3/4 md:w-2/3 max-w-md text-white space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                The lowest prices, <br />
                The biggest flavours.
              </h2>
              <button className="mt-6 py-2 px-6 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 rounded-lg font-semibold underline text-sm md:text-base">
                <Link to="/productpage">Shop Now</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section with Toggle */}
      <section className="mt-8">
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleContent}
          >
            <h3 className="text-xl font-semibold">Description Title</h3>
            <FaArrowDown
              className={`text-2xl transition-transform ${
                isContentVisible ? "rotate-180" : ""
              }`} // Rotate the icon on click
            />
          </div>

          {/* Content that toggles visibility */}
          {isContentVisible && (
            <div className="mt-4 space-y-4">
              <p className="text-gray-700">
                This is the content that will be shown when you click the
                description. You can add more details here and it will be
                revealed or hidden when the description title is clicked.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Nutrition Information Section with Toggle */}
      <section className="mt-8">
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleNutrition}
          >
            <h3 className="text-xl font-semibold">Nutrition Information</h3>
            <FaArrowDown
              className={`text-2xl transition-transform ${
                isNutritionVisible ? "rotate-180" : ""
              }`} // Rotate the icon on click
            />
          </div>

          {/* Nutrition content that toggles visibility */}
          {isNutritionVisible && (
            <div className="mt-4 space-y-4">
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  <strong>Energy:</strong> 110kcal
                </li>
                <li>
                  <strong>Fat:</strong> 4g
                </li>
                <li>
                  <strong>Saturates:</strong> 1g
                </li>
                <li>
                  <strong>Sugars:</strong> 0.0g
                </li>
                <li>
                  <strong>Salt:</strong> 200mg
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="mt-5 space-y-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
          {/* First Row */}
          <div className="text-center border-gray-200 pb-4 md:pb-0">
            <p className="text-4xl font-bold">5+ days</p>
            <p className="text-gray-600">Product life Freshness Guarantee*</p>
          </div>

          <div className="text-center border-gray-200 pb-4 md:pb-0">
            <p className="text-4xl font-bold">59%</p>
            <p className="text-gray-600">
              Customers would recommend this product
            </p>
          </div>
        </div>
        {/* Vertical space between rows */}
        <div className="mt-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
          {/* Second Row */}
          <div className="text-center border-r md:border-r-0 border-gray-200 pb-4 md:pb-0">
            <p className="text-4xl font-bold">1g</p>
            <p className="text-gray-600">
              Total saturated fats in grams, per serving*
            </p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold">0.0g</p>
            <p className="text-gray-600">
              Total sugars & carbohydrates per serving*
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Div */}
      <section className="mt-5">
        <div className=" inset-x-0 bottom-0 flex flex-col sm:flex-row items-center sm:items-center justify-center space-y-2 sm:space-y-0 sm:space-x-5 bg-red-600 text-white py-4 px-4 text-center">
          <h2 className="text-base sm:text-lg md:text-xl font-bold">
            Offers and rollbacks
          </h2>
          <span className="text-sm sm:text-base">
            Browse our best offers and bag yourself a bargain
          </span>
          <button className="mt-2 sm:mt-0 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-3 sm:px-4 rounded">
            <Link to="/productpage"> Shop now </Link>
          </button>
        </div>
      </section>
      <ProductCards />
      <section>
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2>

          {/* Summary Section */}
          <div className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center">
              <div className="flex items-center text-yellow-500 space-x-1">
                {[...Array(4)].map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
                <span className="text-gray-300">&#9733;</span>
              </div>
              <p className="ml-3 text-lg font-semibold">4.00 out of 5</p>
            </div>
            <p className="text-gray-600">Based on 1 review</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Write a review
            </button>
          </div>

          {/* Rating Breakdown */}
          <div className="grid grid-cols-6 gap-4 my-6">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="col-span-6 flex items-center">
                <p className="text-lg font-semibold w-12">{star} &#9733;</p>
                <div className="w-full h-2 bg-gray-300 rounded-lg">
                  <div
                    className={`h-2 bg-yellow-500 rounded-lg`}
                    style={{ width: `${(star / 5) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-gray-600">{(star / 5) * 100}%</span>
              </div>
            ))}
          </div>

          {/* Review Section */}
          
        </div>
      </section>
      <OfferSection />
      <ShopGroceries />
     
      <section className=''>
<div className="flex flex-col items-center justify-center py-16 px-6">
        <div className="w-full sm:w-3/4 lg:w-2/3 text-center space-y-4">
          <h3 className="font-bold text-lg sm:text-xl">
            Over forty years ago we started our journey; turning our shelves
            over to sustainable, organic produce.
          </h3>
          <p className="text-sm sm:text-base">
            We've always had a passion for real food and a desire to feed our
            children better. This passion has grown into one of the most
            sustainable organic grocers in the country, supplying fresh,
            seasonal produce from farm to fork.
          </p>
        </div>
      </div>
</section>

      {/* Bottom Div */}
      <section className="mt-5">
        <div className=" inset-x-0 bottom-0 flex flex-col sm:flex-row items-center sm:items-center justify-center space-y-2 sm:space-y-0 sm:space-x-5 bg-[limegreen] text-white py-4 px-4 text-center">
          <h2 className="text-base sm:text-lg md:text-xl font-bold">
            Offers and rollbacks
          </h2>
          <span className="text-sm sm:text-base">
            Browse our best offers and bag yourself a bargain
          </span>
          <button className="mt-2 sm:mt-0 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-3 sm:px-4 rounded">
            <Link to="/productpage"> Shop now </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default MeatNatural;
