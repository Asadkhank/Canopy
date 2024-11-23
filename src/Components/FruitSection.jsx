import React, { useState, useEffect } from "react";
import Fruitpic from "../assets/shutterstockfruit.webp";
import { Link } from "react-router-dom";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 10 * 60 * 1000; // 10 minutes countdown
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
        <div key={idx} className="text-center">
          <div className="bg-yellow-500 text-white text-lg font-bold py-2 px-4 rounded">
            {timeLeft[label.toLowerCase()]}
          </div>
          <div className="text-sm font-semibold mt-1">{label}</div>
        </div>
      ))}
    </div>
  );
};

function FruitSection() {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center h-[400px] sm:h-[300px] lg:h-[500px]" // Adjust height based on screen size
      style={{
        backgroundImage: `url(${Fruitpic})`,
      }}
    >
      <div className="bg-[limegreen] flex flex-col justify-center items-center p-6 sm:p-4 md:p-8 rounded-lg shadow-lg text-white text-center w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%]">
        <h1 className="text-2xl sm:text-xl md:text-3xl font-bold mb-4">
          Fantastic Fruit!
        </h1>
        <p className="text-md sm:text-sm md:text-lg font-semibold mb-6">
          Hurry, these offers won't be around forever!
        </p>
        <Countdown />
        <button className="mt-6 py-2 px-6 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 rounded-lg font-semibold underline text-sm md:text-base">
        <Link to='/productpage'>  Shop Now    </Link>
        </button>
      </div>
    </div>
  );
}

export default FruitSection;
