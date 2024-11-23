import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Icons_Account from '../assets/Icons_Account.avif';
import Icons_Chat from '../assets/Icons_Chat.avif';
import Icons_Contact from '../assets/Icons_Contact.avif';
import Icons_Delivery from '../assets/Icons_Delivery.avif';

const HelpSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center p-4">
      <div className="flex flex-col justify-between rounded bg-[limegreen] p-4 h-full">
        <div>
          <img src={Icons_Account} alt="Account Icon" className="mb-6" />
          <h3 className="text-xl font-bold mb-4">Recipes & Inspiration</h3>
          <p className="text-white">
            Enjoy personalised offers and discount vouchers when you join the Canopy community.
          </p>
        </div>
        <Link to="/productpage" className="mt-4">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="flex flex-col justify-between rounded bg-[limegreen] p-4 h-full">
        <div>
          <img src={Icons_Chat} alt="Chat Icon" className="mb-6" />
          <h3 className="text-xl font-bold mb-4">Chat with Us</h3>
          <p className="text-white">
            Connect with our support team for quick assistance anytime.
          </p>
        </div>
        <Link to="/productpage" className="mt-4">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="flex flex-col justify-between rounded bg-[limegreen] p-4 h-full">
        <div>
          <img src={Icons_Contact} alt="Contact Icon" className="mb-6" />
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-white">
            Reach out to us for inquiries, feedback, or collaborations.
          </p>
        </div>
        <Link to="/productpage" className="mt-4">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="flex flex-col justify-between rounded bg-[limegreen] p-4 h-full">
        <div>
          <img src={Icons_Delivery} alt="Delivery Icon" className="mb-6" />
          <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
          <p className="text-white">
            Experience swift and reliable delivery for all your orders.
          </p>
        </div>
        <Link to="/productpage" className="mt-4">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HelpSection;
