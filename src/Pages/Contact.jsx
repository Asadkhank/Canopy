import React from 'react';
import OfferSection from '../Components/OfferSection.jsx';
import HelpSection from '../Components/HelpSection';
import InspireSection from '../Components/InspireSection';
import ContactForm from '../Components/ContactForm.jsx';
import Contactpic from '../assets/Contactpic.webp'; // Corrected path

const Contact = () => {
  return (
    <>
      <div>
        <HelpSection />
      </div>
      <div>
        <ContactForm />
      </div>

      <section>
        <div className="bg-gray-100 flex items-center justify-center">
          <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="w-full flex justify-center">
              <img
                src={Contactpic}
                alt="Store Employee"
                className="rounded-lg w-[600px] h-[400px] object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-start space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Shop at our <br /> Penny Hassett Store
              </h2>
              <p className="text-gray-600">
                123 Fake St. Penny Hassett, <br /> Ambridge, AM
              </p>
              <p className="text-gray-600">
                Mon - Fri, 10am - 9pm <br />
                Saturday, 11am - 9pm <br />
                Sunday, 11am - 5pm
              </p>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600">
                Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      <div>
        <InspireSection />
      </div>
    </>
  );
};

export default Contact;
