import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pic1 from "../assets/shutterstockfruit.webp";
import { addToCart } from "../Redux/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const products = [
    { id: 1, name: "Peach Peeled Shrimp", price: 5.95, type: "Fish & Seafood", availability: "In Stock", lifeGuarantee: "2+ days", weight: "1.0lb", options: "Best Seller", image: pic1 },
    { id: 2, name: "Garlic Bulb Fresh", price: 1.2, type: "Cooking Ingredients", availability: "In Stock", lifeGuarantee: "3+ days", weight: "2.0lb", options: "Countdown", image: pic1 },
    { id: 3, name: "Sweet Potatoes", price: 2.5, type: "Fresh Vegetables", availability: "In Stock", lifeGuarantee: "4+ days", weight: "3.0lb", options: "Essential", image: pic1 },
    { id: 4, name: "New Potatoes", price: 2.75, type: "Fresh Vegetables", availability: "Out of Stock", lifeGuarantee: "5+ days", weight: "10.0oz", options: "Family Favourite", image: pic1 },
    { id: 5, name: "Smoked Salmon", price: 7.95, type: "Fish & Seafood", availability: "In Stock", lifeGuarantee: "5+ days", weight: "1.0lb", options: "Best Seller", image: pic1 },
    { id: 6, name: "Organic Apples", price: 3.0, type: "Fresh Fruit", availability: "In Stock", lifeGuarantee: "4+ days", weight: "2.0lb", options: "Countdown", image: pic1 },
    { id: 7, name: "Organic Kale", price: 2.2, type: "Fresh Vegetables", availability: "In Stock", lifeGuarantee: "3+ days", weight: "3.0lb", options: "Essential", image: pic1 },
    { id: 8, name: "Organic Tomatoes", price: 3.5, type: "Fresh Vegetables", availability: "In Stock", lifeGuarantee: "2+ days", weight: "10.0oz", options: "Family Favourite", image: pic1 },
    
  ];

  const [filters, setFilters] = useState({
    availability: [],
    productType: [],
    lifeGuarantee: [],
    weight: [],
    options: []
  });

  const filterCategories = {
    availability: ["In Stock", "Out of Stock"],
    productType: ["Cooking Ingredients", "Fish & Seafood", "Fresh Fruit", "Fresh Vegetables"],
    lifeGuarantee: ["2+ days", "3+ days", "4+ days", "5+ days"],
    weight: ["1.0lb", "2.0lb", "3.0lb", "10.0oz"],
    options: ["Best Seller", "Countdown", "Essential", "Family Favourite"]
  };

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const isSelected = prev[category].includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value]
      };
    });
  };

  const clearAllFilters = (category) => {
    setFilters((prev) => {
      return {
        ...prev,
        [category]: []
      };
    });
  };

  const filteredProducts = products.filter((product) => {
    return Object.keys(filters).every((category) => {
      if (filters[category].length === 0) return true;
      return filters[category].includes(product[category]);
    });
  });

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      // If product is already in the cart, update the quantity
      dispatch(addToCart({ ...product, quantity: productInCart.quantity + 1 }));
    } else {
      // If product is not in the cart, add it with quantity 1
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  // Function to get the count of a product in the cart
  const getProductCountInCart = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <>
      {/* Top Section */}
      <section className="px-4 py-8">
        <div className="w-full lg:flex lg:mx-28 gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 flex lg:pt-56 flex-col justify-end h-full">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">
              Fruit & Vegetables{" "}
              <span className="text-sm text-neutral-400">(14 products)</span>
            </h1>
            <p className="text-sm pb-3 lg:text-base">
              Create a healthy meal or side dish with quality fresh fruit & vegetables from Canopy. We have all the fresh fruit & vegetables you could dream of with broccoli, carrots, oranges, peaches, and plenty more. If you're looking for organic options, explore our organic fruit and veg.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 h-full flex items-end">
            <img
              src={pic1}
              alt="Fruit and Vegetables"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar for Filters */}
        <aside
          className={`w-full lg:w-1/4 p-4 bg-gray-100 lg:block ${filtersVisible ? "fixed inset-0 z-50 bg-white" : "hidden lg:block"}`}
        >
          <div className="flex items-center justify-between mb-4 lg:hidden">
            {/* Filter Button for Small Screens */}
            <button
              className="text-blue-500"
              onClick={() => setFiltersVisible((prev) => !prev)}
            >
              <i className="fas fa-filter"></i> Filters
            </button>

            {/* Close Button for Filters (when visible) */}
            <button
              className="text-red-500 font-bold text-xl"
              onClick={() => setFiltersVisible(false)} // Close filter sidebar
            >
              X
            </button>
          </div>

          {/* Filters */}
          {Object.entries(filterCategories).map(([category, options]) => (
            <div key={category} className="mb-4">
              <h3 className="font-semibold mb-2 capitalize">
                {category.replace(/([A-Z])/g, " $1")}
              </h3>
              {options.map((option) => (
                <label key={option} className="block">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => handleFilterChange(category, option)}
                    checked={filters[category].includes(option)}
                  />
                  {option}
                </label>
              ))}
              {/* Clear All Button */}
              <button
                onClick={() => clearAllFilters(category)}
                className="text-blue-500 hover:underline text-sm mt-2"
              >
                Clear All
              </button>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const productCount = getProductCountInCart(product.id); // Get the quantity of the product in the cart
                return (
                  <div
                    key={product.id}
                    className="border p-4 rounded-lg flex flex-col items-center justify-between space-y-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded"
                    />
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-500">{product.type}</p>
                    <p className="text-xl font-bold text-blue-500">${product.price}</p>
                    <p className="text-sm">{product.availability}</p>
                    <button
                      className="w-full py-2 bg-blue-500 text-white rounded mt-4"
                      onClick={() => handleAddToCart(product)}
                    >
                      {productCount > 0
                        ? `${productCount} in Cart` // Show the count if the product is in the cart
                        : "Add to Cart"}
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="text-center col-span-4 text-xl">No products available</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductPage;
