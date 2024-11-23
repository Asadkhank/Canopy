import React, { useState } from "react";
import AkImage from "../assets/Ak.jpg";

const testimonials = [
  {
    id: 1,
    text: `"We love shopping online with Canopy. Their site is so easy to navigate and the sidecart is simply brilliant."`,
    name: "Asadullah Khan",
    location: "New York, USA",
    image: AkImage,
    rating: 5,
  },
  {
    id: 2,
    text: `"Canopy's customer service is unmatched. I received my order in perfect condition and in record time!"`,
    name: "Asadullah Khan",
    location: "California, USA",
    image: AkImage,
    rating: 4,
  },
  {
    id: 3,
    text: `"The variety and quality of products are exceptional. Shopping here is always a pleasant experience."`,
    name: "Asadullah Khan",
    location: "London, UK",
    image: AkImage,
    rating: 5,
  },
];

function Testimonial() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { text, name, location, image, rating } = testimonials[current];

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 px-4">
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-xl ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-center text-lg md:text-2xl font-semibold text-gray-800 px-6 max-w-2xl">
        {text}
      </p>

      {/* User Info */}
      <div className="flex items-center mt-6 space-x-4">
        {/* User Image */}
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full border"
        />
        {/* User Details */}
        <div>
          <h3 className="text-gray-800 font-semibold">{name}</h3>
          <span className="text-blue-500 text-sm">{location}</span>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center space-x-4 mt-8">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="text-gray-500 hover:text-gray-800"
        >
          <span className="text-xl">&lt;</span>
        </button>

        {/* Page Indicator */}
        <div className="text-gray-600 font-medium">
          <span className="text-gray-900">{current + 1}</span> /{" "}
          {testimonials.length}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="text-gray-500 hover:text-gray-800"
        >
          <span className="text-xl">&gt;</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
