import React, { useState } from 'react';
import { FaTruck, FaLeaf, FaShoppingCart, FaTag } from 'react-icons/fa'; // Import the icons

const LocalDeliverySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current item

  const slides = [
    {
      icon: <FaTruck className="text-3xl" />,
      title: 'Free Local Delivery',
      subtitle: 'On all orders over $50',
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Freshness Guarantee',
      subtitle: 'From farm to fork',
    },
    {
      icon: <FaShoppingCart className="text-3xl" />,
      title: 'Quick Checkout',
      subtitle: 'Fill your basket faster',
    },
    {
      icon: <FaTag className="text-3xl" />,
      title: 'Price Match Promise',
      subtitle: 'We won\'t be beaten',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Move to the next slide
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length); // Move to the previous slide
  };

  return (
    <section className="bg-green-800 py-4">
      <div className="relative">
        {/* Slider for small screens */}
        <div className="sm:block md:hidden">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center text-white font-bold text-sm space-x-2 sm:w-full">
              {/* Slide Display */}
              <div className="flex flex-col items-center space-y-2">
                {slides[currentIndex].icon}
                <div className="flex flex-col items-center">
                  <span>{slides[currentIndex].title}</span>
                  <span className="font-normal">{slides[currentIndex].subtitle}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prev and Next Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-green-800 p-2 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-green-800 p-2 rounded-full"
          >
            &#8594;
          </button>
        </div>

        {/* Static Layout for larger screens */}
        <div className="hidden sm:hidden md:flex items-center justify-around space-x-8">
          {/* Free Local Delivery */}
          <div className="flex items-center text-white font-bold text-sm space-x-2">
            <FaTruck className="text-3xl" /> {/* Larger Icon */}
            <div className="flex flex-col">
              <span>Free Local Delivery</span>
              <span className="font-normal">On all orders over $50</span>
            </div>
          </div>

          {/* Freshness Guarantee */}
          <div className="flex items-center text-white font-bold text-sm space-x-2">
            <FaLeaf className="text-3xl" /> {/* Larger Icon */}
            <div className="flex flex-col">
              <span>Freshness Guarantee</span>
              <span className="font-normal">From farm to fork</span>
            </div>
          </div>

          {/* Quick Checkout */}
          <div className="flex items-center text-white font-bold text-sm space-x-2">
            <FaShoppingCart className="text-3xl" /> {/* Larger Icon */}
            <div className="flex flex-col">
              <span>Quick Checkout</span>
              <span className="font-normal">Fill your basket faster</span>
            </div>
          </div>

          {/* Price Match Promise */}
          <div className="flex items-center text-white font-bold text-sm space-x-2">
            <FaTag className="text-3xl" /> {/* Larger Icon */}
            <div className="flex flex-col">
              <span>Price Match Promise</span>
              <span className="font-normal">We won't be beaten</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalDeliverySlider;
