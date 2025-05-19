import React, { useState } from 'react';

const Cart = () => {
  // Sample cart data with quantity
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones',
      price: 199.99,
      originalPrice: 249.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Fitness tracker with heart rate monitor',
      price: 159.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Leather Wallet',
      description: 'Genuine leather wallet with multiple slots',
      price: 49.99,
      originalPrice: 69.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]);

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice ? item.originalPrice - item.price : 0) * item.quantity), 0);
  const total = subtotal;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className=" py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Cart Items */}
          <div className="lg:w-2/3">
            {cartItems.length === 0 ? (
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl mb-4">Your cart is empty</h3>
                <p className="text-gray-400 mb-6">Start shopping to add items to your cart</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
                    {/* Product Image */}
                    <div className="md:w-1/4 h-48 md:h-auto">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-4 md:w-2/4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                      </div>
                      
                      <div className="mt-4 flex items-center">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 text-sm flex items-center transition-colors duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price and Quantity */}
                    <div className="p-4 md:w-1/4 flex flex-col items-end justify-between">
                      <div className="text-right">
                        {item.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</p>
                        )}
                        <p className="text-lg font-bold text-purple-400">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center mt-4">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-l flex items-center justify-center transition-colors duration-300"
                        >
                          -
                        </button>
                        <span className="bg-gray-700 text-white w-10 h-8 flex items-center justify-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-r flex items-center justify-center transition-colors duration-300"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="mt-2">
                        <p className="text-white font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Right Section - Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:w-1/3">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg sticky top-4">
                <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Discount</span>
                      <span className="text-green-400">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between border-t border-gray-700 pt-3 mt-3">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg text-purple-400">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg mb-4">
                  Proceed to Checkout
                </button>
                
                <button className="w-full border border-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300">
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;