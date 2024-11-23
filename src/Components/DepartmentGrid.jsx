import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import shutterstockfruit from '../assets/shutterstockfruit.webp';
import ProductPage from './ProductPage';

// Department data with routes
const departments = [
  { name: 'Fruit & Vegetables', image: shutterstockfruit, route: '/products/fruit-vegetables' },
  { name: 'Meat & Fish', image: shutterstockfruit, route: '/products/meat-fish' },
  { name: 'Cheese & Dairy', image: shutterstockfruit, route: '/products/cheese-dairy' },
  { name: 'The Bakery', image: shutterstockfruit, route: '/products/bakery' },
  { name: 'Store Cupboard', image: shutterstockfruit, route: '/products/store-cupboard' },
  { name: 'New In', image: shutterstockfruit, route: '/products/new-in' },
  { name: 'Staff Picks', image: shutterstockfruit, route: '/products/staff-picks' },
  { name: 'Cooking', image: shutterstockfruit, route: '/products/cooking' },
  { name: 'Cheeses', image: shutterstockfruit, route: '/products/cheeses' },
  { name: 'In Season', image: shutterstockfruit, route: '/products/in-season' },
  { name: 'All Products', image: shutterstockfruit, route: '/products/all-products' },
  { name: 'Offers & Rollbacks', image: shutterstockfruit, route: '/products/offers-rollbacks' },
];

const DepartmentGrid = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">Shop by Department</h2>
      <p className="text-gray-600 mb-6">
        Find products and fill up your shopping cart with all your favourites!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {departments.map((dept, index) => (
          <Link
            to="/productpage" // Set the route for the department
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <img
                src={dept.image}
                alt={dept.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-medium text-gray-800 group-hover:text-blue-600">
              {dept.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentGrid;
