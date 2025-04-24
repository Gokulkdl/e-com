import React from 'react';

const OrderConfirm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-black text-white rounded-2xl shadow-2xl border border-white/10">
      <h1 className="text-4xl font-bold mb-2 text-white">🎉 Order Confirmation!</h1>
      <p className="text-white mb-8">Thanks for your purchase! A confirmation email has been sent.</p>

      {/* Product Summary */}
      <div className="border-t border-white/10 pt-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">🛒 Product Summary</h2>
        <div className="flex gap-6 items-center">
          <img
            src="/assets/images/iphone.jpg"
            alt="Pulse Oximeter"
            className="w-32 h-32 object-cover rounded-xl border border-white/10 shadow-lg"
          />
          <div>
            <h3 className="text-xl font-semibold">I Phone 14 Pro</h3>
            <p className="text-gray-400">Price:14000</p>
            <div className="mt-2 flex items-center gap-3">
              <label className="text-sm text-gray-400">Quantity:</label>
              <input
                type="number"
                value="1"
                min="1"
                className="w-20 px-3 py-1 rounded-lg text-black font-medium border border-white/20"
              />
            </div>
            <p className="mt-3 text-lg font-medium text-white">Total:14000</p>
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="border-t border-white/10 pt-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">📦 Shipping Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
          <input
            value="John Doe"
            placeholder="Full Name"
            className="px-4 py-2 rounded-lg border border-white/20"
          />
          <input
            value="123 Main St"
            placeholder="Street Address"
            className="px-4 py-2 rounded-lg border border-white/20"
          />
          <input
            value="New York"
            placeholder="City"
            className="px-4 py-2 rounded-lg border border-white/20"
          />
          <input
            value="NY"
            placeholder="State"
            className="px-4 py-2 rounded-lg border border-white/20"
          />
          <input
            value="10001"
            placeholder="Zip Code"
            className="px-4 py-2 rounded-lg border border-white/20"
          />
        </div>
      </div>

      {/* Order Info */}
      <div className="border-t border-white/10 pt-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">📄 Order Details</h2>
        <p className="text-white-300">Order ID: <span className="text-white font-medium">ORD123456</span></p>
        <p className="text-white-300">Order Date: <span className="text-white">April 23, 2025</span></p>
        <p className="text-white-300">Estimated Delivery: <span className="text-white">April 28, 2025</span></p>
      </div>

      {/* Continue Button */}
      <div className="text-center">
      <button className="group w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-500 text-white py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                         
                                            <span className="font-semibold">Confirm</span>
                                        </button>
      </div>
    </div>
  );
};

export default OrderConfirm;
