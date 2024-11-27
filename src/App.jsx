import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./components/Cart";
import Footer from "./Components/Footer";
import Groceries from "./Pages/Groceries";
import InspirationRecipes from "./Pages/InspirationRecipes";
import ProductPage from "./Components/ProductPage";
import FruitNatural from "./Components/FruitNatural";
import MeatNatural from "./Components/MeatNatural";

function Layout({ children }) {
  const location = useLocation(); // Current route check karne ke liye

  // Agar route "/cart" hai to full-width layout return kare
  if (location.pathname === "/cart") {
    return (
      <div className="w-full h-screen">
        <Navbar />
        <div className="p-4">
          {children}
        </div>
      </div>
    );
  }

  // Default layout for other pages
  return (
    <div className="flex">
      <div className="lg:w-4/5 h-screen overflow-y-auto">
        <Navbar />
        <div className="p-4">{children}</div>
        <Footer />
      </div>
      <div className="w-1/5 h-screen hidden sm:block fixed top-0 right-0 bg-white shadow-lg overflow-y-auto">
        <aside className="bg-red-50 p-4">
          <Cart />
        </aside>
      </div>
    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]); // State for cart items

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/recipes" element={<InspirationRecipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/fruitnatural" element={<FruitNatural />} />
          <Route path="/meatnatural" element={<MeatNatural />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
