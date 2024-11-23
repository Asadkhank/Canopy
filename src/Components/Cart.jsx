import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Redux/cartSlice';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Access cart state
  const dispatch = useDispatch();

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
    } else {
      dispatch(removeFromCart(id)); // Remove the item when quantity is 1 and - is clicked
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="mt-8">
      {/* Header Row: Cart Title and Total */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <p className="text-lg font-semibold text-gray-800">
          Total: <span className="text-blue-600">€{total.toFixed(2)}</span>
        </p>
      </div>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border-b py-4 space-y-4"
            >
              {/* Product Information */}
              <div className="flex items-center">
                <img
                  src={item.image} // Assuming item.image contains the image URL
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    €{item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
              </div>

              {/* Quantity Controls and Delete Icon */}
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() => handleDecrease(item.id, item.quantity)}
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-600 flex items-center"
                  title="Delete item"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
