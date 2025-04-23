import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHistory, FaHeart, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';

function Profile() {
    // Sample user data
    const user = {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, Anytown, USA",
        avatar: " ",
        orders: 5,
        wishlist: 12
    };

    return (
        <div className="min-h-screen bg-black text-gray-200">
            {/* Header */}
            <div>
                <div className="max-w-7xl mx-auto py-6 px-4">
                    <h1 className="text-3xl font-bold text-white ml-5 mt-20">My Account</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="md:col-span-1">
                        <div className="bg-gray-900 shadow-xl rounded-lg p-6 border border-gray-800">
                            <div className="flex flex-col items-center mb-6">
                                <img
                                    src={user.avatar}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-700"
                                />
                                <h2 className="text-xl font-semibold text-white">{user.name}</h2>
                                <p className="text-gray-400 text-sm">{user.email}</p>
                            </div>

                            <nav className="space-y-2">
                                <a href="#" className="flex items-center space-x-2 text-blue-400 font-medium p-2 rounded hover:bg-gray-800 transition-colors">
                                    <FaUser className="text-gray-400" />
                                    <span>Profile Information</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 text-gray-300 p-2 rounded hover:bg-gray-800 transition-colors">
                                    <FaHistory className="text-gray-400" />
                                    <span>Order History</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 text-gray-300 p-2 rounded hover:bg-gray-800 transition-colors">
                                    <FaHeart className="text-gray-400" />
                                    <span>Wishlist</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 text-gray-300 p-2 rounded hover:bg-gray-800 transition-colors">
                                    <FaCreditCard className="text-gray-400" />
                                    <span>Payment Methods</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 text-gray-300 p-2 rounded hover:bg-gray-800 transition-colors">
                                    <FaSignOutAlt className="text-gray-400" />
                                    <span>Logout</span>
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* Main Profile Content */}
                    <div className="md:col-span-3">
                        <div className="bg-gray-900 shadow-xl rounded-lg p-6 border border-gray-800">
                            <h2 className="text-2xl font-semibold mb-6 text-white">Profile Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-1/3">
                                        <label className="block text-gray-400 font-medium">Full Name</label>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-white">{user.name}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-1/3">
                                        <label className="block text-gray-400 font-medium">Email Address</label>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-white">{user.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-1/3">
                                        <label className="block text-gray-400 font-medium">Phone Number</label>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-white">{user.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-1/3">
                                        <label className="block text-gray-400 font-medium">Shipping Address</label>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-white">{user.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-1/3">
                                        <label className="block text-gray-400 font-medium">Account Stats</label>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex space-x-6">
                                            <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                                                <p className="text-sm text-gray-400">Orders</p>
                                                <p className="font-bold text-blue-400">{user.orders}</p>
                                            </div>
                                            <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                                                <p className="text-sm text-gray-400">Wishlist</p>
                                                <p className="font-bold text-pink-400">{user.wishlist}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-800">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;