// src/Pages/About.jsx
import React from "react";
import GrocriesBg from "../assets/GrocriesBg.webp";
import AboutOrange from "../assets/OrangeAbout.webp";
import myVideo from "../assets/videos.mp4";
import GarlicA from "../assets/garlicA.webp";
import PransC from "../assets/PrawnsC.webp";
import HelpSection from "../Components/HelpSection";
import ImageSlider from "../Components/ShopGroceries";
import pic1 from '../assets/shutterstockfruit.webp';
import InspireSection from "../Components/InspireSection";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div
          className="relative min-h-[60vh] sm:min-h-[60vh] lg:min-h-[50vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${GrocriesBg})` }}
        >
          <div className="absolute inset-0 flex items-center px-4">
            <div className="rounded-lg p-6 w-full sm:w-3/4 md:w-2/3 max-w-md text-white space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Organic & Sustainable
              </h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                The story of Canopy..
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex flex-col items-center justify-center py-8 space-y-4 sm:space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        <div className="w-4/5 max-w-lg item-center text-center md:w-1/2 md:text-left">
          <h3 className="font-bold text-xl sm:text-2xl">
            Over forty years ago we started our journey; turning our shelves
            over to sustainable, organic produce.
          </h3>
          <p className="mt-4 text-sm sm:text-base">
            We've always had a passion for real food and a desire to feed our
            children better. This passion has grown into one of the most
            sustainable organic grocers in the country, supplying fresh,
            seasonal produce from farm to fork.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-6 p-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img src={AboutOrange} alt="About Orange" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center text-justify p-6 space-y-4">
          <h3 className="font-bold text-xl">What we do</h3>
          <p className="text-sm sm:text-base">
            All our food comes straight from our network of farms to your
            fork: our Meat & Fish, fruit and vegetables from our Market
            Gardeners, bread from our Bakers, and cheese, milk and yoghurt
            from our Creameries.
          </p>
          <p className="text-sm sm:text-base">
            We source from local artisan suppliers we know and trust, and who
            share in our commitment to quality and sustainability. You can
            visit our farms to see for yourself how our gorgeous animals are
            kept, where our delicious vegetables are grown and how our
            mouth-watering food is produced.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section>
        <div className="relative h-96 w-full">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A passion for sustainable,
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              organic produce
            </h2>
            <p className="text-white">- Since 1979 -</p>
          </div>
        </div>
      </section>

      {/* Why Choose Organic Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-6 p-8">
        <div className="lg:w-1/2 flex flex-col justify-center text-justify p-6 space-y-4">
          <h3 className="font-bold text-xl">Why choose Organic?</h3>
          <p className="text-sm sm:text-base">
            All our food comes straight from our network of farms to your
            fork: our Meat & Fish, fruit and vegetables from our Market
            Gardeners, bread from our Bakers, and cheese, milk and yoghurt
            from our Creameries.
          </p>
          <p className="text-sm sm:text-base">
            We source from local artisan suppliers we know and trust, and who
            share in our commitment to quality and sustainability. You can
            visit our farms to see for yourself how our gorgeous animals are
            kept, where our delicious vegetables are grown and how our
            mouth-watering food is produced.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={GarlicA} alt="Garlic" className="w-full h-auto" />
        </div>
      </section>

      {/* Taste & Quality Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-6 p-8">
        <div className="lg:w-1/2">
          <img src={PransC} alt="Prawns" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center text-justify p-6 space-y-4">
          <h3 className="font-bold text-xl">A passion for taste & quality</h3>
          <p className="text-sm sm:text-base">
            All our food comes straight from our network of farms to your
            fork: our Meat & Fish, fruit and vegetables from our Market
            Gardeners, bread from our Bakers, and cheese, milk and yoghurt
            from our Creameries.
          </p>
          <p className="text-sm sm:text-base">
            We source from local artisan suppliers we know and trust, and who
            share in our commitment to quality and sustainability. You can
            visit our farms to see for yourself how our gorgeous animals are
            kept, where our delicious vegetables are grown and how our
            mouth-watering food is produced.
          </p>
        </div>
      </section>

      {/* Help Section */}
      <div>
        <HelpSection />
      </div>

      {/* Image Slider */}
      <div>
        <ImageSlider />
      </div>

      {/* Inspire Section */}
      <div>
        <InspireSection />
      </div>
    </>
  );
}

export default About;
