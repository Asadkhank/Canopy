import React, { useState, useEffect } from "react";
import PrawnsC from "../assets/PrawnsC.webp";
import PrawnsC1 from "../assets/PrawnsC.webp";
import PrawnsC2 from "../assets/PrawnsC.webp";

const TestimonialSlider = () => {
  const slides = [PrawnsC, PrawnsC1, PrawnsC2];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isAutoplay) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoplay]);

  const handleQuantityChange = (type) => {
    if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full py-10 flex items-center justify-center px-4 sm:px-6 lg:px-16">
      <div className="w-full h-auto flex flex-col md:flex-row">
        {/* Slider Section */}
        <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] lg:h-[350px] my-auto relative overflow-hidden flex items-center justify-center">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 h-full flex items-center justify-center"
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded hover:bg-gray-800"
            onClick={prevSlide}
          >
            {"<"}
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded hover:bg-gray-800"
            onClick={nextSlide}
          >
            {">"}
          </button>

          {/* Autoplay Checkbox */}
          <div className="mt-4 flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="autoplay"
              checked={isAutoplay}
              onChange={() => setIsAutoplay(!isAutoplay)}
              className="form-checkbox h-5 w-5"
            />
            <label htmlFor="autoplay" className="text-sm sm:text-base">
              Autoplay Slider
            </label>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 sm:p-6 lg:p-8 space-y-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Fresh Peeled Shrimp <span className="text-sm sm:text-lg font-normal">1.0 lb</span>
          </h1>

          <div className="space-y-2">
            <div className="text-yellow-500 text-base sm:text-lg font-bold">
              ★★★★★ (3)
            </div>
            <div className="text-base sm:text-lg font-semibold text-gray-800">
              $1500
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Unit price $3333 / kg
            </div>
            <div className="text-sm sm:text-base text-gray-700 font-semibold">
              Countdown
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Enjoying your favorite seafood, full of flavor and sustainably
              caught. This product is certified by the Marine Stewardship Council
              as being sustainability sourced, making it a responsible seafood
              choice.
            </p>
            <p className="text-xs text-gray-400">
              This is a demonstration theme for Shopify. Prices subject to
              change.
            </p>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="border flex space-x-4 items-center border-black">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="bg-gray-300 text-black font-bold px-3 sm:px-4 py-2 rounded"
              >
                -
              </button>
              <span className="text-sm sm:text-lg font-semibold">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="bg-gray-300 text-black font-bold px-3 sm:px-4 py-2 rounded"
              >
                +
              </button>
            </div>
            <button className="bg-blue-500 w-full text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>

          {/* Buy It Now */}
          <div className="flex w-full items-center">
            <button className="bg-green-500 w-full text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-green-600">
              Buy It Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
