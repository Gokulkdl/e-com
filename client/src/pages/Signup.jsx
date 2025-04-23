

import React from 'react';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-200">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-8 p-6">
        {/* Left Column - Mobile Animation */}
        <div className="flex justify-center items-center">
          {/* Add any mobile animation here */}
          <img
            src="/mobile-animation.gif" // Replace with your animation or animated component
            alt="Mobile Animation"
            className="w-[80%] animate-bounce"
          />
        </div>

        {/* Right Column - Signup Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
          {/* Glowing Heading */}
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Built for Apple Intelligence.
          </h2>

          {/* Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
