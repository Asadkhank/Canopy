import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa"; 

const Navbar = () => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For mobile search toggle
  
  // States for mobile dropdowns
  const [isGroceriesDropdownOpen, setIsGroceriesDropdownOpen] = useState(false);
  const [isOffersDropdownOpen, setIsOffersDropdownOpen] = useState(false);
  const [isDemosDropdownOpen, setIsDemosDropdownOpen] = useState(false);

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
            className="relative cursor-pointer"
            onMouseEnter={() => setIsGroceriesDropdownOpen(true)}
            onMouseLeave={() => setIsGroceriesDropdownOpen(false)}
          >
            <span className="hover:underline"> <Link to='/groceries'>Groceries </Link></span>
            {isGroceriesDropdownOpen && (
              <ul className="absolute mt-5 -ml-24 mx-5 lg:w-screen bg-white text-black text-sm rounded shadow-lg">
                 <Link to='/productpage'>     <li className="px-4 py-2 hover:bg-gray-200"> Meet and fish </li></Link>
                 <Link to='/productpage'>     <li className="px-4 py-2 hover:bg-gray-200"> Fruits and Vegetables</li> </Link>
                 <Link to='/productpage'>        <li className="px-4 py-2 hover:bg-gray-200">Store Cupboard</li> </Link>
                 <Link to='/productpage'>      <li className="px-4 py-2 hover:bg-gray-200">The Bakery</li> </Link>
                 <Link to='/productpage'>       <li className="px-4 py-2 hover:bg-gray-200">Chese and Diary</li> </Link>
                
             
               
             
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
              <ul className="absolute mt-2 bg-white text-black text-sm rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">Deals</li>
                <li className="px-4 py-2 hover:bg-gray-200">Special Discounts</li>
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
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-green-800 text-white text-start ml-6`}
      >
        <div className="flex flex-col space-y-4 py-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          {/* Groceries Dropdown for Mobile */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsGroceriesDropdownOpen(!isGroceriesDropdownOpen)}
          >
            <span className="hover:underline">Groceries</span>
            {isGroceriesDropdownOpen && (
              <ul className="mt-2 bg-white text-black text-sm rounded shadow-lg">
             <Link to='/productpage'>     <li className="px-4 py-2 hover:bg-gray-200">Fruits and Vegetables</li>  </Link> 
                <li className="px-4 py-2 hover:bg-gray-200"> Meet and fish </li>
                <li className="px-4 py-2 hover:bg-gray-200">Store Cupboard</li>
                <li className="px-4 py-2 hover:bg-gray-200">The Bakery</li>
                <li className="px-4 py-2 hover:bg-gray-200">Chese and Diary</li>
                
              </ul>
            )}
          </div>

          {/* Offers Dropdown for Mobile */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsOffersDropdownOpen(!isOffersDropdownOpen)}
          >
            <span className="text-red-500 hover:underline">Offers & Rollbacks</span>
            {isOffersDropdownOpen && (
              <ul className="mt-2 bg-white text-black text-sm rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">Deals</li>
                <li className="px-4 py-2 hover:bg-gray-200">Special Discounts</li>
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
        <div className="flex space-y-3 mr-5 pb-8  flex-col text-start ">
          <div
            className="cursor-pointer  border w-full pl-2  relative"
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
            className="cursor-pointer border w-full text-start pl-2  relative"
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
      
      <div className="bg-red-600 text-center py-2 text-white text-sm">
        Great Deals on your weekly shop. <a href="#" className="underline">Shop Now</a>
      </div>

    </header>
  );
};

export default Navbar;
