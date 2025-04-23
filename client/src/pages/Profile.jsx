import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHistory, FaHeart, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';

function Profile() {
    // Sample user data
    const user = {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, Anytown, USA",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        orders: 0,
        wishlist: 0
    };

    return (
        <div className="min-h-screen bg-black text-gray-200">
            {/* Header */}
            <div className="">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-white">My Account</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="md:col-span-1">
                        <div className="bg-gray-900 shadow-xl rounded-lg p-6 border border-gray-800">
                            <div className="flex flex-col items-center mb-6">
                                <img
                                    src={user.avatar}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-800"
                                />
                                <h2 className="text-xl font-semibold text-white">{user.name}</h2>
                                <p className="text-gray-400 text-sm">{user.email}</p>
                            </div>

                            <nav className="space-y-1">
                                <a href="#" className="flex items-center space-x-3 text-blue-400 font-medium p-3 rounded hover:bg-gray-800 transition-colors">
                                    <FaUser className="text-gray-400" />
                                    <span>Profile Information</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 text-gray-300 p-3 rounded hover:bg-gray-800 transition-colors">
                                    <FaHistory className="text-gray-400" />
                                    <span>Order History</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 text-gray-300 p-3 rounded hover:bg-gray-800 transition-colors">
                                    <FaHeart className="text-gray-400" />
                                    <span>Wishlist</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 text-gray-300 p-3 rounded hover:bg-gray-800 transition-colors">
                                    <FaCreditCard className="text-gray-400" />
                                    <span>Payment Methods</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 text-gray-300 p-3 rounded hover:bg-gray-800 transition-colors">
                                    <FaSignOutAlt className="text-gray-400" />
                                    <span>Logout</span>
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* Main Profile Content */}
                    <div className="md:col-span-3">
                        <div className="bg-gray-900 shadow-xl rounded-lg p-8 border border-gray-800">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-semibold text-white">Profile Information</h2>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                    Edit Profile
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-4 border-b border-gray-800">
                                    <div>
                                        <label className="block text-gray-400 font-medium">Full Name</label>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-white">{user.name}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-4 border-b border-gray-800">
                                    <div>
                                        <label className="block text-gray-400 font-medium">Email Address</label>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-white">{user.email}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-4 border-b border-gray-800">
                                    <div>
                                        <label className="block text-gray-400 font-medium">Phone Number</label>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-white">{user.phone}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-4 border-b border-gray-800">
                                    <div>
                                        <label className="block text-gray-400 font-medium">Shipping Address</label>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-white">{user.address}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start pt-4">
                                    <div>
                                        <label className="block text-gray-400 font-medium">Account Stats</label>
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="flex space-x-4">
                                            <div className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 w-32">
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">Orders</p>
                                                <p className="font-bold text-blue-400 text-xl">{user.orders}</p>
                                            </div>
                                            <div className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 w-32">
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">Wishlist</p>
                                                <p className="font-bold text-pink-400 text-xl">{user.wishlist}</p>
                                            </div>
                                        </div>
                                    </div>
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