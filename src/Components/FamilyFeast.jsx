import React, { useState } from "react";
import pic1 from "../assets/shutterstock_1.webp";

const FamilyFeast = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    console.log("Toggling Info");
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className="flex items-center">
      <div className="relative w-1/2">
        <img src={pic1} alt="Family Feast" className="w-full h-auto" />
        <button
          onClick={toggleInfo}
          className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-lg"
        >
          {isInfoVisible ? "×" : "+"}
        </button>
      </div>
      <div className="ml-4">
      
        {isInfoVisible && <p>Here is more information!</p>}
      </div>
    </div>
  );
};

export default FamilyFeast;
