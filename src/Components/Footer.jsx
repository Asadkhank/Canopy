import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start space-y-8 lg:space-y-0">
          <div className="flex flex-col items-start space-y-4 lg:space-y-8 lg:w-1/4">
            {/* Canopy Section */}
            <h2 className="text-green-600 text-2xl font-bold">Canopy</h2>
            <p className="text-gray-500 text-sm">
              This is a demo store by Clean Canvas. All images and video content
              courtesy of Shutterstock and Pexels, and are not for reuse on other
              stores.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-gray-600 text-xl hover:text-green-600" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-gray-600 text-xl hover:text-green-600" />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="text-gray-600 text-xl hover:text-green-600" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-gray-600 text-xl hover:text-green-600" />
              </a>
            </div>
            {/* Currency and Language Selectors */}
            <div className="flex space-x-4 items-start">
              <select className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
                <option>Australia (AUD $)</option>
                <option>United States (USD $)</option>
                <option>United Kingdom (GBP £)</option>
              </select>
              <select className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-6 lg:flex lg:space-x-12 lg:w-3/4">
            {/* All Departments */}
            <div>
              <h4 className="font-bold text-gray-700 mb-4">All Departments</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Fruit & Vegetables</li>
                <li>Meat & Fish</li>
                <li>Cheese & Dairy</li>
                <li>Store Cupboard</li>
                <li>The Bakery</li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h4 className="font-bold text-gray-700 mb-4">Help & Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Customer Service</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Returns Info</li>
              </ul>
            </div>

            {/* Recipes & Inspiration */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-bold text-gray-700 mb-4">Recipes & Inspiration</h4>
              <p className="text-sm text-gray-600 mb-4">
                Join our community to get exclusive offers, original recipes,
                event invites, and more...
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border border-gray-300 rounded-l px-4 py-2 w-full text-sm"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded-r">
                  <FiArrowRight className="text-lg" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-gray-600 text-sm flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left">
            © 2024 Canopy Theme Natural. Powered by Shopify
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
