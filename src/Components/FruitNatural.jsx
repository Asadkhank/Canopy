import React from 'react'
import ProductPage from './ProductPage'
import { Link } from 'react-router-dom'
import ShopGroceries from './ShopGroceries'
import ProductCards from './ProductCards'
import shutterstock from "../assets/shutterstock.webp";

const FruitNatural = () => {

  return (
    <>
    
    <ProductPage/>
    <ProductCards/>
    <section className='lg:mt-8'>
        <div
          className="relative min-h-[60vh] sm:min-h-[60vh] lg:min-h-[40vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${shutterstock})` }}
        >
          <div className="absolute inset-0 flex items-center px-4">
            <div className="rounded-lg p-6 w-full sm:w-3/4 md:w-2/3 max-w-md text-white space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              The lowest prices, <br />
              The biggest flavours.
              </h2>
              <button className="mt-6 py-2 px-6 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 rounded-lg font-semibold underline text-sm md:text-base">
        <Link to='/productpage'>  Shop Now    </Link>
        </button>
            </div>
          </div>
        </div>
      </section>
<section className=''>
<div className="flex flex-col items-center justify-center py-16 px-6">
        <div className="w-full sm:w-3/4 lg:w-2/3 text-center space-y-4">
          <h3 className="font-bold text-lg sm:text-xl">
            Over forty years ago we started our journey; turning our shelves
            over to sustainable, organic produce.
          </h3>
          <p className="text-sm sm:text-base">
            We've always had a passion for real food and a desire to feed our
            children better. This passion has grown into one of the most
            sustainable organic grocers in the country, supplying fresh,
            seasonal produce from farm to fork.
          </p>
        </div>
      </div>
</section>
    <ShopGroceries />
   {/* Bottom Div */}
  <section className='mt-5'>
  <div className=" inset-x-0 bottom-0 flex flex-col sm:flex-row items-center sm:items-center justify-center space-y-2 sm:space-y-0 sm:space-x-5 bg-red-600 text-white py-4 px-4 text-center">
      <h2 className="text-base sm:text-lg md:text-xl font-bold">
        Offers and rollbacks
      </h2>
      <span className="text-sm sm:text-base">
        Browse our best offers and bag yourself a bargain
      </span>
      <button className="mt-2 sm:mt-0 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-3 sm:px-4 rounded">
      <Link to="/productpage">    Shop now  </Link>
      </button>
    </div>
  </section>
    </>
  )
}

export default FruitNatural