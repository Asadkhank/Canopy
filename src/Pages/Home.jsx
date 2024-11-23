// src/Pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import shutterstock from "../assets/shutterstock.webp";
import { FaTruck, FaLeaf, FaShoppingCart, FaTag } from "react-icons/fa";
import ImageSlider from "../Components/ShopGroceries";
import myVideo from "../assets/videos.mp4";
{/* Recipies section */}


// special offers pics
import pic1 from "../assets/shutterstock_1.webp";
import pic2 from "../assets/shutterstock_2.webp";
import pic3 from "../assets/shutterstock_3.webp";
import pic4 from "../assets/brooke-lark.webp";
import ProductCard from "../Components/ProductCards";
import FruitSection from "../Components/FruitSection";
import Testimonial from "../Components/Testimonial";
import TestimonialSlider from "../Components/TestimonialSlider";
import FamilyFeast from "../Components/FamilyFeast";
import HelpSection from "../Components/HelpSection";
import BlogCards from "../Components/BlogCards";
import OfferSection from "../Components/OfferSection";
import InspireSection from "../Components/InspireSection";
import LocalDeliverySlider from "../Components/LocalDeliverySlider";
import ShopGroceries from "../Components/ShopGroceries";
import ProductCards from "../Components/ProductCards";


function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${shutterstock})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", 
    // Full viewport height
  };

  
  return (
    <>
      <div
        style={backgroundStyle}
        className="flex items-center justify-center lg:justify-start lg:pl-20 overflow-hidden"
      >
        <div className="text-center lg:text-left space-y-4">
          <h3 className="text-white font-bold">BBQ's made easy</h3>
          <h2 className="text-white font-bold text-4xl">A licence to grill!</h2>
          <p className="text-white text-xl">Welcome to flavor town</p>
          <div className="flex justify-center lg:justify-start space-x-2">
            <button href className="text-white text-sm bg-limeGreen py-3 px-3 bg-green-900 rounded font-bold">
            <Link to="/productpage">Shop Meat & Fish</Link>
            </button>
            <button className="text-white text-sm bg-limeGreen py-2 px-3 bg-green-900  rounded font-bold">
               <Link to="/productpage">Fresh Vegetables</Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <LocalDeliverySlider/>
      </div>

    
      
      <div>
        <ShopGroceries />
      </div>

     <div>
      <OfferSection/>
     </div>
      <div>
        <ProductCards />
      </div>

      <div>
        <FruitSection />
      </div>

      <div>
        <Testimonial />
      </div>

      {/* Special Offers */}
      <section className="py-8">
        {/* First Row */}
        <div className="lg:flex lg:space-x-4 space-y-3 flex-col lg:flex-row lg:w-full">
          {/* First Image */}
          <div className="relative lg:w-96 lg:h-60">
            <img
              src={pic1}
              alt="First Image"
              className="w-full h-full object-cover"
            />
            {/* Overlay Div */}
            <div className="absolute bottom-0 left-0 bg-[limegreen] rounded-tr-lg text-white p-4">
              <h3 className="text-lg font-bold">Fresh in!</h3>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
              <Link to="/productpage">  Shop Now </Link>
              </button>
            </div>
          </div>
  
          {/* Second Image */}
          <div className="relative lg:flex-1 lg:h-60">
            <img
              src={pic1}
              alt="Second Image"
              className="w-full h-full object-cover"
            />
            {/* Overlay Div */}
            <div className="absolute bottom-0 left-0 bg-[limegreen] rounded-tr-lg text-white p-4">
              <h3 className="text-lg font-bold">BBQ Season!</h3>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
           <Link to="/productpage">       Shop Meet & Fish  </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="lg:flex lg:flex-row lg:space-x-4 space-y-3 lg:w-full mt-3 lg:mt-8">
          {/* Second Image (first position in row) */}
          <div className="relative lg:flex-1 lg:h-60">
            <img
              src={pic1}
              alt="Second Image"
              className="lg:w-full lg:h-full object-cover"
            />
            {/* Overlay Div */}
            <div className="absolute bottom-0 left-0 bg-[limegreen] rounded-tr-lg text-white p-4">
              <h3 className="text-lg font-bold">BBQ Season!</h3>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
             <Link to="/productpage">         Shop Meet & Fish </Link>
              </button>
            </div>
          </div>

          {/* First Image (second position in row) */}
          <div className="relative lg:w-96 lg:h-60">
            <img
              src={pic1}
              alt="First Image"
              className="w-full h-full object-cover"
            />
            {/* Overlay Div */}
            <div className="absolute bottom-0 left-0 bg-[limegreen] rounded-tr-lg text-white p-4">
              <h3 className="text-lg font-bold">Fresh in!</h3>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
              <Link to="/productpage">    Shop Now  </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* another Section */}
      <section className="bg-gray-200">
        <div className="lg:w-full  lg:flex lg:space-x-5 p-2 lg:p-16">
          <div className="lg:w-1/2 space-y-4 flex-flex-col">
            <h3 className="text-3xl font-bold">
              We serve hundreds of new customers every week.
            </h3>
            <p className="text-sm">
              Our meals and store cupboard essentials are available for pick up
              at our store Monday - Saturday 12-6pm. Just call ahead and we'll
              have your order ready for when you arrive.
            </p>

            <p className="text-sm">
              We source from local artisan suppliers who we know and trust, and
              who share in our values and commitment to quality, sustainability
              and naturally grown, organic produce free from chemicals. You
              really can taste the difference!
            </p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
            <Link to="/productpage">    Shop Now  </Link>
            </button>
          </div>
          <div>
            <img src={pic1} alt="" className="rounded-lg p-3" />
          </div>
        </div>
      </section>

     {/* Cards Section */}
<section className="py-11">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    {/* Card 1 */}
    <div className="space-y-3 bg-gray-200 p-5 rounded-lg">
      <img src={pic1} alt="" className="w-full rounded-md" />
      <div className="pt-4">
        <h3 className="text-xl font-bold">Price Match</h3>
        <p className="mt-2 text-gray-700">
          Your weekly essentials price matched to our two biggest competitors, whichever is cheaper. Click here for more savings on the essentials.
        </p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
        <Link to="/productpage">    Shop Now  </Link>
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="space-y-3 bg-gray-200 p-5 rounded-lg">
      <img src={pic1} alt="" className="w-full rounded-md" />
      <div className="pt-4">
        <h3 className="text-xl font-bold">Price Match</h3>
        <p className="mt-2 text-gray-700">
          Your weekly essentials price matched to our two biggest competitors, whichever is cheaper. Click here for more savings on the essentials.
        </p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
        <Link to="/productpage">    Shop Now  </Link>
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="space-y-3 bg-gray-200 p-5 rounded-lg">
      <img src={pic1} alt="" className="w-full rounded-md" />
      <div className="pt-4">
        <h3 className="text-xl font-bold">Price Match</h3>
        <p className="mt-2 text-gray-700">
          Your weekly essentials price matched to our two biggest competitors, whichever is cheaper. Click here for more savings on the essentials.
        </p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
        <Link to="/productpage">    Shop Now  </Link>
        </button>
      </div>
    </div>
  </div>
</section>

{/* Video Section */}
<section>
  <div className="relative h-[24rem] sm:h-[28rem] md:h-96 w-full">
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={myVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col lg:items-center sm:items-start lg:justify-center pt-12 space-y-2 sm:space-y-4 px-4 sm:px-6 text-center sm:text-left">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
        Eat the rainbow!
      </h2>
      <p className="text-sm sm:text-base">
        The easy way to get your 5 a day
      </p>
      <button className="mt-2 sm:mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-3 sm:px-4 rounded">
       <Link to="/productpage">    Shop Fruits & Vegitable  </Link>
      </button>
    </div>

    {/* Bottom Div */}
    <div className="absolute inset-x-0 bottom-0 flex flex-col sm:flex-row items-center sm:items-center justify-center space-y-2 sm:space-y-0 sm:space-x-5 bg-red-600 text-white py-4 px-4 text-center">
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
  </div>
</section>


<div>
  < ProductCards/>
</div>

<div>
  < TestimonialSlider/>
</div>

{/* <div>
  <FamilyFeast/>
</div> */}

<div>
  <HelpSection/>
</div>

<div>
  <BlogCards/>
</div>

<div>
  <InspireSection/>
</div>




    </>
  );
}

export default Home;
