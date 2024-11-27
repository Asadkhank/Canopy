import React from "react";
import { FaTruck, FaLeaf, FaShoppingCart, FaTag } from "react-icons/fa";

import GrocriesBg from "../assets/GrocriesBg.webp";
import DepartmentGrid from "../Components/DepartmentGrid";
import OfferSection from "../Components/OfferSection";
import ProductCard from "../Components/ProductCards";
import ProductCards from "../Components/ProductCards";

const Groceries = () => {
  // Features Array for Reusability
  const features = [
    { icon: FaTruck, title: "Free Local Delivery", description: "On all orders over $50" },
    { icon: FaLeaf, title: "Freshness Guarantee", description: "From farm to fork" },
    { icon: FaShoppingCart, title: "Quick Checkout", description: "Fill your basket faster" },
    { icon: FaTag, title: "Price Match Promise", description: "We won't be beaten" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section>
        <div
          className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[50vh] -z-10 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${GrocriesBg})` }}
        >
          <div className="absolute inset-0 flex items-center px-6 sm:px-10">
            <div className="rounded-lg p-6 w-full sm:w-3/4 md:w-2/3 lg:max-w-lg bg-opacity-70  text-white space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Shop with Canopy
              </h2>
              <p className="text-sm sm:text-base lg:text-lg">
                The easy way to get your 5 a day
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
                Browse All Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Department Section */}
      <div className="py-8 px-4 md:px-8 lg:px-16">
        <DepartmentGrid />
      </div>

      {/* Offer Section */}
      <div className="py-12 px-4 md:px-8 lg:px-16">
        <OfferSection />
      </div>

      {/* About Section */}
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
      <ProductCards />
      {/* Features Section */}
      <section className="bg-gray-100  py-8">
        <div className="lg:flex flex-col text-black hidden sm:block md:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 space-y-6 md:space-y-0 md:space-x-8">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="flex items-center  font-bold text-sm space-x-4"
            >
              <Icon className="text-3xl" />
              <div className="flex flex-col">
                <span>{title}</span>
                <span className="font-normal text-sm">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-center bg-red-600 text-white py-6 px-4 sm:px-10 lg:px-16 space-y-4 sm:space-y-0 sm:space-x-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          Offers and Rollbacks
        </h2>
        <span className="hidden sm:block text-sm">
          Browse our best offers and bag yourself a bargain
        </span>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </>
  );
};

export default Groceries;
