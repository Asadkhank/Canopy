import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa"; 
import pic from '../assets/brooke-lark.webp';
import pic1 from '../assets/shutterstock.webp';
import pic2 from '../assets/shutterstockLo.avif';
import pic3 from '../assets/shutterstockLo.avif';
import pic4 from '../assets/shutterstock_1.webp';

const Navbar = () => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For mobile search toggle
  
  // States for mobile dropdowns
  const [isGroceriesDropdownOpen, setIsGroceriesDropdownOpen] = useState(false);
  const [isOffersDropdownOpen, setIsOffersDropdownOpen] = useState(false);
  const [isDemosDropdownOpen, setIsDemosDropdownOpen] = useState(false);


  const [activeCategory, setActiveCategory] = useState(null); // State to track active category

  const [activeOfferHeading, setActiveOfferHeading] = useState(null);




  // Data for cards
  const cardsData = {
    "Fruits and Vegetables": [
      { title: "Apple", image: pic },
      { title: "Banana", image: pic },
      { title: "Carrot", image: pic },
      { title: "Broccoli", image: pic },
    ],
    "Meat and Fish": [
      { title: "Chicken", image: pic1 },
      { title: "Fish", image: pic1 },
      { title: "Beef", image:pic1 },
      { title: "Lamb", image: pic1 },
    ],
    "Store Cupboard": [
      { title: "Rice", image: pic2 },
      { title: "Pasta", image: pic2 },
      { title: "Spices", image:  pic2 },
      { title: "Flour", image:  pic2 },
    ],
    "The Bakery": [
      { title: "Bread", image:  pic3 },
      { title: "Croissant", image: pic3  },
      { title: "Cake", image: pic3 },
      { title: "Cookies", image: pic3 },
    ],
    "Cheese and Dairy": [
      { title: "Milk", image: pic4 },
      { title: "Cheese", image: pic4 },
      { title: "Yogurt", image: pic4  },
      { title: "Butter", image: pic4  },
    ],
  };

  // Handle single click to toggle dropdown
  const handleDropdownClick = () => {
    setIsGroceriesDropdownOpen(!isGroceriesDropdownOpen);
  };

  // Handle double-click for navigation on links
  const handleLinkDoubleClick = (link) => {
    window.location.href = link;
  };

  const categories = Object.keys(cardsData);

  const handleCategoryClick = (category) => {
    setActiveCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  return (
    <header className="w-full bg-green-800 text-white">
      {/* Top Announcement Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-lime-400 text-sm">
        <p>Offers & Rollbacks: Low prices on 100's of items</p>
        <div className="flex space-x-4 relative">
          {/* Country Dropdown */}
          <div
            className="cursor-pointer hidden sm:block relative"
            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
          >
            Finland (EUR €) <IoMdArrowDropdown className="inline" />
            {showCountryDropdown && (
              <ul className="absolute right-0 mt-2 bg-white text-black text-sm rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">Sweden (SEK)</li>
                <li className="px-4 py-2 hover:bg-gray-200">Norway (NOK)</li>
                <li className="px-4 py-2 hover:bg-gray-200">Germany (EUR €)</li>
              </ul>
            )}
          </div>

          {/* Language Dropdown */}
          <div
            className="cursor-pointer hidden sm:block relative"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            English <IoMdArrowDropdown className="inline" />
            {showLanguageDropdown && (
              <ul className="absolute right-0 mt-2 bg-white text-black text-sm rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">Finnish</li>
                <li className="px-4 py-2 hover:bg-gray-200">Swedish</li>
                <li className="px-4 py-2 hover:bg-gray-200">German</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="px-6 py-3 bg-green-900 flex justify-between items-center">
        {/* Hamburger Icon (for small screens) */}
        <div className="block md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Brand (Canopy) - On small screens, it will be placed next to the hamburger */}
        <h1 className="text-2xl font-bold md:ml-0">Canopy</h1>

        {/* Search Section - Centered */}
        <div className="flex items-center space-x-2 hidden md:flex mx-auto">
          <button className="bg-gray-100 text-black px-4 py-1 rounded-md">
            All
          </button>
          <input
            type="text"
            placeholder="Search groceries..."
            className="px-4 py-1 w-80 rounded-md text-black focus:outline-none"
          />
        </div>

        {/* Search Icon for Small Screens */}
        <div className="block md:hidden">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <FaSearch size={24} />
          </button>
        </div>

        {/* Icons - Aligned to the right */}
        <div className="flex space-x-4  md:flex">
          <FaUserCircle size={24} />
          <Link to="/cart">
          <FaShoppingCart size={24} className="cursor-pointer" />
        </Link>
        </div>
      </div>

      {/* Search Box for Small Screens */}
      {isSearchOpen && (
        <div className="flex items-center space-x-2 md:hidden px-4 py-3">
          <input
            type="text"
            placeholder="Search groceries..."
            className="px-4 py-1 w-80 rounded-md text-black focus:outline-none"
          />
        </div>
      )}

      {/* Menu Links */}
      <nav className="bg-green-800 px-6 py-2 text-sm relative hidden md:block">
       <div className="flex justify-between">
        <div className="flex space-x-8">
          <a href="/" className="hover:underline">
            Home
          </a>
             {/* Groceries Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsGroceriesDropdownOpen(true)}
          onMouseLeave={() => setIsGroceriesDropdownOpen(false)} // Single click to toggle dropdown
        >
          <span className="hover:underline cursor-pointer">
            <Link to="/groceries" onDoubleClick={() => handleLinkDoubleClick("/groceries")}>
              Groceries
            </Link>
          </span>

          {isGroceriesDropdownOpen && (
            <ul className="absolute mt-4 px-24 lg:-left-24 lg:w-[1193px] bg-white text-black text-sm rounded shadow-lg flex z-50">
              {/* Links Section */}
              <div className="w-1/4 space-y-3  bg-slate-100">
                <li
                  onMouseEnter={() => setActiveCategory("Meat and Fish")}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link
                    to="/fruitnatural"
                    onDoubleClick={() => handleLinkDoubleClick("/productpage")}
                  >
                    Meat and Fish
                  </Link>
                </li>
                <li
                  onMouseEnter={() => setActiveCategory("Fruits and Vegetables")}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link
                    to="/fruitnatural"
                    onDoubleClick={() => handleLinkDoubleClick("/productpage")}
                  >
                    Fruits and Vegetables
                  </Link>
                </li>
                <li
                  onMouseEnter={() => setActiveCategory("Store Cupboard")}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link
                    to="/fruitnatural"
                    onDoubleClick={() => handleLinkDoubleClick("/productpage")}
                  >
                    Store Cupboard
                  </Link>
                </li>
                <li
                  onMouseEnter={() => setActiveCategory("The Bakery")}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link
                    to="/fruitnatural"
                    onDoubleClick={() => handleLinkDoubleClick("/productpage")}
                  >
                    The Bakery
                  </Link>
                </li>
                <li
                  onMouseEnter={() => setActiveCategory("Cheese and Dairy")}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link
                    to="/fruitnatural"
                    onDoubleClick={() => handleLinkDoubleClick("/productpage")}
                  >
                    Cheese and Dairy
                  </Link>
                </li>
              </div>

              {/* Cards Section */}
              <div className="w-3/4 bg-white p-4">
                {activeCategory && (
                  <div className="grid grid-cols-4 gap-4">
                    {cardsData[activeCategory].map((card, index) => (
                     <Link to='/fruitnatural'>
                      <div
                        key={index}
                        className="bg-gray-100 p-4 rounded shadow hover:shadow-lg text-center"
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                        <h3 className="font-bold text-lg">{card.title}</h3>
                      </div>

                     </Link>

                    ))}
                  </div>
                )}
              </div>
            </ul>
          )}
        </div>

      {/* Offers Dropdown */}
<div
  className="relative cursor-pointer"
  onMouseEnter={() => setIsOffersDropdownOpen(true)}
  onMouseLeave={() => setIsOffersDropdownOpen(false)}
>
  <span className="hover:underline">Offers & Rollbacks</span>
  {isOffersDropdownOpen && (
    <ul className="absolute lg:-left-48 mt-5 lg:w-[1198px] bg-white text-black text-sm rounded shadow-lg">
     <div className="flex   justify-between px-40">

     <div>
        <h3 className="pt-5 pb-3 border-b border-b-neutral-300 "> Meat & Fish-Offers</h3>
        <div className="flex flex-col item-start justify-start">
       <Link to='/meatnatural'>
       <li className="px-4 py-2 hover:bg-gray-200">Diced Chicken Breast</li>
       </Link> 

       <Link to='/meatnatural'>
        <li className="px-4 py-2 hover:bg-gray-200">Snow Crab Legs</li>
        </Link> 

        </div>
      </div>
     
     
      <div>
        <h3 className="pt-5 pb-3 border-b border-b-neutral-300 "> The Bakery-Offers</h3>
        <div className="flex flex-col item-start justify-start">
        <Link to='/meatnatural'>
        <li className="px-4 py-2 hover:bg-gray-200">4 Packs Kaiser Rolls</li>
        </Link>
        <li className="px-4 py-2 hover:bg-gray-200">Soft White Rolls</li>
        <Link to='/meatnatural'></Link>
     
        </div>
      </div>
   
   
      <div>
        <h3 className="pt-5 pb-3 border-b border-b-neutral-300 "> Fruit & Veg-Offers</h3>
        <div className="flex flex-col item-start justify-start">
        <Link to='/meatnatural'>
        <li className="px-4 py-2 hover:bg-gray-200">Broccoli Crowns</li>
        </Link>
        <Link to='/meatnatural'>
        <li className="px-4 py-2 hover:bg-gray-200">Fresh Peaches</li>
        </Link>

        </div>
      </div>


       <div>
        <h3 className="pt-5 pb-3 border-b border-b-neutral-300 "> Cheese & Diary-Offers</h3>
        <div className="flex flex-col item-start justify-start">
        <Link to='/meatnatural'>
        <li className="px-4 py-2 hover:bg-gray-200">Parmigiano Reggiano</li>
        </Link>
        <Link to='/meatnatural'>
        <li className="px-4 py-2 hover:bg-gray-200">Hens Eggs</li>
        </Link>

        </div>
      </div>
     </div>
    </ul>
  )}
</div>

          <a href="/about" className="hover:underline">
            About Us
          </a>

          <a href="/recipes" className="hover:underline">
            Inspiration & Recipes
          </a>

          <a href="/contact" className="hover:underline">
            Contact
          </a>

          {/* Demo Dropdown */}
          <div
            className="relative  cursor-pointer"
            onMouseEnter={() => setIsDemosDropdownOpen(true)}
            onMouseLeave={() => setIsDemosDropdownOpen(false)}
          >
            <span className="hover:underline">Demos</span>
            {isDemosDropdownOpen && (
              <ul className="absolute mt-2 bg-white text-black text-sm rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">Demo 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">Demo 2</li>
              </ul>
            )}
          </div>


   
        </div>
                {/* 'In a Season' text with leaf icon */}
       {/* 'In a Season' text with leaf icon */}
       <div className="flex items-center justify-end  space-x-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
  <FaLeaf className="text-white" />
  <span className="text-white">In a Season</span>
</div>
</div>
      </nav>

   {/* Mobile Menu (Hamburger) */}
<div
  className={`${
    isMenuOpen ? "block" : "hidden"
  } md:hidden bg-green-800 text-white text-start ml-6`}
>
  <div className="flex flex-col space-y-4 py-4">
    <a href="/" className="hover:underline">
      Home
    </a>
    
    <div className="relative">
      <span
        className="hover:underline cursor-pointer"
        onClick={() => setIsGroceriesDropdownOpen(!isGroceriesDropdownOpen)}
      >
        <Link to="/groceries">Groceries</Link>
      </span>

      {isGroceriesDropdownOpen && (
        <ul className="absolute mt-4 -ml-3 w-full bg-white text-black text-sm rounded shadow-lg z-50">
          {/* Render cards for the active category */}
          {activeCategory && (
            <div className="bg-white p-4">
              <h2
                className="font-bold text-lg mb-4 cursor-pointer hover:underline"
                onClick={() => setActiveCategory(null)} // Close the cards section on click
              >
                {activeCategory}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cardsData[activeCategory].map((card, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded shadow hover:shadow-lg text-center"
                  >
                    <Link to='/fruitnatural ' onClick={() => setIsMenuOpen(false)}> 
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <h3 className="font-bold text-lg">{card.title}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* List all categories except the active category */}
          <div className="bg-slate-100 px-4 py-2">
            {categories
              .filter((category) => category !== activeCategory)
              .map((category) => (
                <li
                  key={category}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
          </div>
        </ul>
      )}
    </div>

 {/* Offers Dropdown */}
 <div className="relative cursor-pointer">
      {/* Main Toggle for Offers & Rollbacks */}
      <span
        className="hover:underline"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          setIsOffersDropdownOpen(!isOffersDropdownOpen);
        }}
      >
        Offers & Rollbacks
      </span>

      {/* Dropdown Content */}
      {isOffersDropdownOpen && (
        <ul
          className="absolute mt-2 -ml-3 w-full bg-white z-20 text-black text-sm rounded shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside dropdown
        >
          <div className="flex flex-col pl-2 justify-between">
            {/* Meat & Fish Section */}
            <div>
              <h3
                className={`pt-5 pb-3 border-b border-b-neutral-300 cursor-pointer ${
                  activeOfferHeading === "Meat & Fish" ? "text-blue-600" : ""
                }`}
                onClick={() =>
                  setActiveOfferHeading(
                    activeOfferHeading === "Meat & Fish" ? null : "Meat & Fish"
                  )
                }
              >
                Meat & Fish-Offers
              </h3>
              {activeOfferHeading === "Meat & Fish" && (
                <div className="flex flex-col items-start justify-start">
                  <Link to='/meatnatural' onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-200">Diced Chicken Breast</li>
                  </Link>
                  <Link to='/meatnatural' onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-200">Snow Crab Legs</li>
                  </Link>
                </div>
              )}
            </div>

            {/* Bakery Section */}
            <div>
              <h3
                className={`pt-5 pb-3 border-b border-b-neutral-300 cursor-pointer ${
                  activeOfferHeading === "Bakery" ? "text-blue-600" : ""
                }`}
                onClick={() =>
                  setActiveOfferHeading(activeOfferHeading === "Bakery" ? null : "Bakery")
                }
              >
                The Bakery-Offers
              </h3>
              {activeOfferHeading === "Bakery" && (
                <div className="flex flex-col items-start justify-start">
                  <Link to='/meatnatural' onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-200">4 Packs Kaiser Rolls</li>
                  </Link>
                  <Link to='/meatnatural' onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-200">Soft White Rolls</li>
                  </Link>
                </div>
              )}
            </div>

            {/* Fruit & Veg Section */}
            <div>
              <h3
                className={`pt-5 pb-3 border-b border-b-neutral-300 cursor-pointer ${
                  activeOfferHeading === "Fruit & Veg" ? "text-blue-600" : ""
                }`}
                onClick={() =>
                  setActiveOfferHeading(
                    activeOfferHeading === "Fruit & Veg" ? null : "Fruit & Veg"
                  )
                }
              >
                Fruit & Veg-Offers
              </h3>
              {activeOfferHeading === "Fruit & Veg" && (
                <div className="flex flex-col items-start justify-start">
                  <Link to='/meatnatural' onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-200">Broccoli Crowns</li>
                  </Link>
                  <Link to='/meatnatural' onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-200">Fresh Peaches</li>
                  </Link>
                </div>
              )}
            </div>

            {/* Cheese & Dairy Section */}
            <div>
              <h3
                className={`pt-5 pb-3 border-b border-b-neutral-300 cursor-pointer ${
                  activeOfferHeading === "Cheese & Dairy" ? "text-blue-600" : ""
                }`}
                onClick={() =>
                  setActiveOfferHeading(
                    activeOfferHeading === "Cheese & Dairy" ? null : "Cheese & Dairy"
                  )
                }
              >
                Cheese & Dairy-Offers
              </h3>
              {activeOfferHeading === "Cheese & Dairy" && (
                <div className="flex flex-col items-start justify-start">
                  <Link to='/meatnatural' onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-200">Parmigiano Reggiano</li>
                  </Link>
                  <Link to='/meatnatural' onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-200">Hens Eggs</li>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </ul>
      )}
    </div>


    <a href="/about" className="hover:underline">
      About Us
    </a>
    <a href="/contact" className="hover:underline">
      Contact
    </a>

    {/* Demos Dropdown for Mobile */}
    <div
      className="relative cursor-pointer"
      onClick={() => setIsDemosDropdownOpen(!isDemosDropdownOpen)}
    >
      <span className="hover:underline">Demos</span>
      {isDemosDropdownOpen && (
        <ul className="mt-2 bg-white text-black text-sm rounded shadow-lg">
          <li className="px-4 py-2 hover:bg-gray-200">Demo 1</li>
          <li className="px-4 py-2 hover:bg-gray-200">Demo 2</li>
        </ul>
      )}
    </div>
  </div>

  {/* Country & Language Dropdowns */}
  <div className="flex space-y-3 mr-5 pb-8 flex-col text-start">
    <div
      className="cursor-pointer border w-full pl-2 relative"
      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
    >
      Finland (EUR €) <IoMdArrowDropdown className="inline" />
      {showCountryDropdown && (
        <ul className="absolute left-0 mt-2 bg-white text-black text-sm rounded shadow-lg">
          <li className="px-4 py-2 hover:bg-gray-200">Sweden (SEK)</li>
          <li className="px-4 py-2 hover:bg-gray-200">Norway (NOK)</li>
          <li className="px-4 py-2 hover:bg-gray-200">Germany (EUR €)</li>
        </ul>
      )}
    </div>
    {/* Language Dropdown */}
    <div
      className="cursor-pointer border w-full text-start pl-2 relative"
      onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
    >
      English <IoMdArrowDropdown className="inline" />
      {showLanguageDropdown && (
        <ul className="absolute left-0 mt-2 bg-white text-black text-sm rounded shadow-lg">
          <li className="px-4 py-2 hover:bg-gray-200">Finnish</li>
          <li className="px-4 py-2 hover:bg-gray-200">Swedish</li>
          <li className="px-4 py-2 hover:bg-gray-200">German</li>
        </ul>
      )}
    </div>
  </div>
</div>

<div className="bg-red-600 text-center py-2 text-white text-sm">
  Great Deals on your weekly shop.{" "}
  <a href="#" className="underline">
    Shop Now
  </a>
</div>


    </header>
  );
};

export default Navbar;