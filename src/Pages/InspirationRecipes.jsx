import React from 'react';
import BlogLayout from '../Components/BlogLayout';
import OfferSection from '../Components/OfferSection';
import InspireSection from '../Components/InspireSection';


const categories = [
  'All',
  'Breakfast',
  'Cherries',
  'Fruit',
  'Hospitality',
  'Meal time',
  'Mealtimes',
  'Mindful',
  'Mindfulness',
  'Morning',
  'Recipes',
  'Sustainable',
  'Tips',
  'Top Tips',
  'Zero Waste',
];

const InspirationRecipes = () => {
  return (
    <>
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <a href="#" className="hover:text-gray-700">Home</a> &gt;{' '}
        <span className="text-gray-700">Inspiration & Recipes</span>
      </div>

      {/* Title and Description */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Inspiration & Recipes</h1>
        <p className="text-gray-600">
          Get inspired with our collection of articles and recipes.
        </p>
      </div>

      {/* Social Share */}
      <div className="flex justify-center items-center space-x-4 mb-6">
        <span className="text-gray-600">Shares</span>
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
          aria-label="Share on X"
        >
          <span className="text-gray-600">X</span>
        </button>
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
          aria-label="Share on Facebook"
        >
          <span className="text-gray-600">f</span>
        </button>
      </div>

      {/* Category Tags */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 text-sm rounded-full border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>

<div>
  <BlogLayout/>
</div>

<div className='mt-8'>
  <OfferSection/>
</div>


<div className='mt-8'>
  <InspireSection/>
</div>

    </>
  );
};

export default InspirationRecipes;
