import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Left side - Contact Form */}
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-white hover:shadow">
                    <h3 className="text-4xl font-bold text-gray-200 mb-10">
                        Nexure
                    </h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="hover:shadow-white hover:shadow w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="hover:shadow-white hover:shadow w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4} // You can adjust this number (3-5 is typical for messages)
                                className="hover:shadow-white hover:shadow w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-y min-h-[100px]" // resize-y allows vertical resizing
                                placeholder="Enter your message"
                            />
                        </div>
                        <button
                            type="submit"
                            className="hover:shadow-white hover:shadow w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 shadow-md"
                        >
                            Get in Touch
                        </button>
                    </form>
                </div>

                {/* Right side - Services and Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition">Product Services</a></li>
                            <li><a href="#" className="hover:text-white transition">Tech Support</a></li>
                            <li><a href="#" className="hover:text-white transition">Digital & Value-Added Services</a></li>
                            <li><a href="#" className="hover:text-white transition">Installation & Setup</a></li>
                            <li><a href="#" className="hover:text-white transition">24/7 Customer Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition">Iphones</a></li>
                            <li><a href="#" className="hover:text-white transition">Macs</a></li>
                            <li><a href="#" className="hover:text-white transition">Mobile</a></li>
                            <li><a href="#" className="hover:text-white transition">TV</a></li>
                            <li><a href="#" className="hover:text-white transition">Accessories</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-6 mt-8">
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                            <FaWhatsapp className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                            <FaEnvelope className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;