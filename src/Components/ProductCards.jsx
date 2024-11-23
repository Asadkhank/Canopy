import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import pic from '../assets/brooke-lark.webp';
import { addToCart } from '../Redux/cartSlice';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductCards = () => {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  const products = [
    { id: 1, name: 'Fresh Red Grapefruit', price: 1.95, image: pic, badge: 'New Arrival' },
    { id: 2, name: 'Fresh Passion Fruit', price: 1.95, image: pic, badge: 'Best Seller' },
    { id: 3, name: 'Cantaloupe', price: 2.95, image: pic, badge: 'Pre-order' },
    { id: 4, name: 'Fresh Navel Orange', price: 1.25, image: pic, badge: 'Featured' },
    { id: 5, name: 'Fresh Bartlett Pears', price: 2.50, image: pic, badge: 'New Arrival' },
    { id: 6, name: 'Fresh Watermelon', price: 4.95, image: pic },
    { id: 7, name: 'Fresh Apples', price: 3.50, image: pic },
    { id: 8, name: 'Fresh Mangoes', price: 2.75, image: pic },
    { id: 9, name: 'Fresh Blueberries', price: 5.25, image: pic },
    { id: 10, name: 'Fresh Strawberries', price: 4.25, image: pic },
  ];

  const handleAddToCart = (product) => {
    const productWithQuantity = { ...product, quantity: quantities[product.id] || 1 };
    dispatch(addToCart(productWithQuantity));

    setCartCount((prevCount) => prevCount + (quantities[product.id] || 1));
    setShowCounter(true);
    setTimeout(() => setShowCounter(false), 2000);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; // Show 3 items per screen on larger screens

  const nextSlide = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative mt-8">
      <h2 className="text-3xl font-bold text-start ml-10 mb-6 text-gray-800">Fresh in Today</h2>

      {/* Counter Visibility */}
      {showCounter && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
          Cart Items: {cartCount}
        </div>
      )}

      {/* Slider Navigation */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button onClick={prevSlide} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
          <FaArrowLeft />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button onClick={nextSlide} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
          <FaArrowRight />
        </button>
      </div>

      {/* Static Card Layout: Multiple products in a row */}
      <div className="flex overflow-x-auto gap-4 py-4 w-full">
        {products.slice(currentIndex, currentIndex + itemsPerPage).map((product) => (
          <div
            key={product.id}
            className="flex-none w-64 h-[350px] border rounded-lg p-4 shadow-md flex flex-col items-center justify-between transition transform hover:scale-105 hover:shadow-xl bg-white"
          >
            {/* Badge */}
            {product.badge && (
              <span
                className={`text-sm font-bold px-2 py-1 rounded-md mb-2 ${
                  product.badge === 'Best Seller'
                    ? 'bg-yellow-300 text-yellow-800'
                    : product.badge === 'Featured'
                    ? 'bg-orange-200 text-orange-800'
                    : 'bg-blue-200 text-blue-800'
                }`}
              >
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-lg mb-4">€{product.price.toFixed(2)} / each</p>
            <button
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:shadow-md transition"
              onClick={() => handleAddToCart(product)}
            >
              + Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
