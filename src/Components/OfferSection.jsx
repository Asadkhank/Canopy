import React from 'react';
// special offers pics
import pic1 from "../assets/shutterstock_1.webp";
import pic2 from "../assets/shutterstock_2.webp";
import pic3 from "../assets/shutterstock_3.webp";
import pic4 from "../assets/brooke-lark.webp";

const OfferSection = () => {
  return (
    <>
      {/* Special Offers */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">Special Offers</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4 w-full">
          {/* Left Column */}
          <div className="flex flex-col lg:w-1/2 space-y-4">
            {/* First Image */}
            <div className="relative w-full bg-white">
              <img src={pic1} alt="" className="h-48 w-full object-cover" />
              {/* Top-left label */}
              <div className="absolute text-center top-0 left-0 px-4 py-2 flex flex-col font-bold bg-[red] text-white rounded">
                <span>Save up to</span>
                <span className="text-3xl">50%</span>
              </div>
              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 bg-[limegreen] w-full font-bold text-white py-2 px-4">
                This is the bottom text for the first image
              </div>
            </div>

            {/* Second Image */}
            <div className="relative w-full bg-white">
              <img src={pic3} alt="" className="h-80 w-full object-cover" />
              {/* Top-left label */}
              <div className="absolute text-center top-0 left-0 px-4 py-2 flex flex-col font-bold bg-blue-700 text-white rounded">
                <span>Save up to</span>
                <span className="text-3xl">50%</span>
              </div>
              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 bg-[limegreen] w-full font-bold text-white py-2 px-4">
                This is the bottom text for the second image
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col lg:w-1/2 space-y-4">
            {/* Third Image */}
            <div className="relative w-full bg-white">
              <img src={pic2} alt="" className="h-80 w-full object-cover" />
              {/* Top-left label */}
              <div className="absolute text-center top-0 left-0 px-4 py-2 flex flex-col font-bold bg-yellow-500 text-white rounded">
                <span className="text-3xl">50%</span>
                <span>of all the week</span>
              </div>
              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 bg-[limegreen] w-full font-bold text-white py-2 px-4">
                This is the bottom text for the third image
              </div>
            </div>

            {/* Fourth Image */}
            <div className="relative w-full bg-white">
              <img src={pic1} alt="" className="h-48 w-full object-cover" />
              {/* Top-left label */}
              <div className="absolute text-center top-0 left-0 px-4 py-2 flex flex-col font-bold bg-[limegreen] text-white rounded">
                <span>Save up to</span>
                <span className="text-3xl">1/3</span>
              </div>
              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 bg-[limegreen] w-full font-bold text-white py-2 px-4">
                This is the bottom text for the fourth image
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferSection;
