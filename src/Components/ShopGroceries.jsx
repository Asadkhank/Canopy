import React from "react";
import WatermelonA from "../assets/WatermelonA.webp";
import TunaA from "../assets/TunaA.webp";
import Milk from "../assets/MILK.webp";
import Adrak from "../assets/Adrak.webp";
import KaiserRollA from "../assets/KaiserRollA.webp";
import BeetrootA from "../assets/BeetrootA.webp";
import EdamCubesA from "../assets/EdamCubesA.webp";
import MinceBeefA from "../assets/MinceBeefA.webp";
import PrawnsC from "../assets/PrawnsC.webp";

const ShopGroceries = () => {
  const items = [
    { name: "Fruit & Vegetables", image: WatermelonA },
    { name: "Meat & Fish", image: TunaA },
    { name: "Cheese & Dairy", image: Milk },
    { name: "Cooking Ingredients", image: Adrak },
    { name: "The Bakery", image: KaiserRollA },
    { name: "New In", image: BeetrootA },
    { name: "Store Cupboard", image: EdamCubesA },
    { name: "Frozen", image: MinceBeefA },
    { name: "Seafood", image: PrawnsC },
  ];

  // Scroll to the right
  const handleRightScroll = () => {
    const container = document.getElementById("items-container");
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;
    const maxScroll = scrollWidth - visibleWidth;
    if (container.scrollLeft < maxScroll) {
      container.scrollLeft += visibleWidth;
    }
  };

  // Scroll to the left
  const handleLeftScroll = () => {
    const container = document.getElementById("items-container");
    if (container.scrollLeft > 0) {
      container.scrollLeft -= container.offsetWidth;
    }
  };

  return (
    <div className="py-6 bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold">Shop Groceries</h2>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:underline">
          View all
        </a>
      </div>

      {/* Items Section */}
      <div className="relative mt-4 px-4 sm:px-6 lg:px-8">
        {/* Left Navigation Button */}
        <button
          onClick={handleLeftScroll}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden z-10 text-white bg-blue-600 p-3 rounded-full shadow-lg opacity-90 hover:opacity-100 transition duration-300"
        >
          &#8249; {/* Left Arrow */}
        </button>

        <div
          id="items-container"
          className="flex items-center space-x-4 overflow-x-auto scrollbar-hide"
        >
          {/* Items */}
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-center space-y-2 w-24 sm:w-32"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-contain"
              />
              <p className="text-sm font-medium">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={handleRightScroll}
          className="absolute right-0 top-1/2 transform hidden  -translate-y-1/2 z-10 text-white bg-blue-600 p-3 rounded-full shadow-lg opacity-90 hover:opacity-100 transition duration-300"
        >
          &#8250; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default ShopGroceries;
