import React, { useState } from 'react';

const AllProducts = () => {
    // Sample product data
    const products = [
        {
            id: 1,
            name: 'iphone 16',
            description: 'iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48MP Fusion camera. Five vibrant colours. And A18 chip.',
            price: 99.99,
            originalPrice: 199.99,
            rating: 4.5,
            category: 'Electronics',
            image: 'https://inspireonline.in/cdn/shop/files/iPhone_16_Pink_PDP_Image_Position_1__en-IN_1b73c75e-6eb0-4364-a658-79e7c2fb6648.jpg?v=1727247679&width=1680'
        },
        {
            id: 2,
            name: 'Smart Watch',
            description: 'iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48MP Fusion camera. Five vibrant colours. And A18 chip.',
            price: 159.99,
            originalPrice: 199.99,
            rating: 4.2,
            category: 'Electronics',
            image: 'https://inspireonline.in/cdn/shop/files/iPhone_16_Pink_PDP_Image_Position_1__en-IN_1b73c75e-6eb0-4364-a658-79e7c2fb6648.jpg?v=1727247679&width=1680'
        },
        {
            id: 3,
            name: 'Leather Wallet',
            description: 'iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48MP Fusion camera. Five vibrant colours. And A18 chip.',
            price: 49.99,
            originalPrice: 199.99,
            rating: 4.7,
            category: 'Accessories',
            image: 'https://inspireonline.in/cdn/shop/files/iPhone_16_Pink_PDP_Image_Position_1__en-IN_1b73c75e-6eb0-4364-a658-79e7c2fb6648.jpg?v=1727247679&width=1680'
        },
        {
            id: 4,
            name: 'Running Shoes',
            description: 'iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48MP Fusion camera. Five vibrant colours. And A18 chip.',
            price: 89.99,
            originalPrice: 199.99,
            rating: 4.3,
            category: 'iphone',
            image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_16_Black_PDP_Image_Position_1__en-IN_d4f6e552-2388-4c83-9dfb-0c77c3a269f9.jpg?v=1727247638'
        },
        {
            id: 5,
            name: 'Coffee Maker',
            description: 'iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48MP Fusion camera. Five vibrant colours. And A18 chip.',
            price: 79.99,
            originalPrice: 199.99,
            rating: 4.1,
            category: 'Home',
            image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_16_Black_PDP_Image_Position_1__en-IN_d4f6e552-2388-4c83-9dfb-0c77c3a269f9.jpg?v=1727247638'
        },
        {
            id: 6,
            name: 'Backpack',
            description: 'iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48MP Fusion camera. Five vibrant colours. And A18 chip.',
            price: 59.99,
            rating: 4.4,
            category: 'Accessories',
            image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_16_Black_PDP_Image_Position_1__en-IN_d4f6e552-2388-4c83-9dfb-0c77c3a269f9.jpg?v=1727247638'
        },
    ];

    // State for filters
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOption, setSortOption] = useState('featured');
    const [priceRange, setPriceRange] = useState([0, 500]);

    // Get unique categories
    const categories = ['All', ...new Set(products.map(product => product.category))];

    // Filter and sort products
    const filteredProducts = products
        .filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(product =>
            selectedCategory === 'All' || product.category === selectedCategory
        )
        .filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        )
        .sort((a, b) => {
            if (sortOption === 'price-low') return a.price - b.price;
            if (sortOption === 'price-high') return b.price - a.price;
            if (sortOption === 'rating') return b.rating - a.rating;
            return 0; // featured (no sort)
        });

    // // Render star rating
    // const renderStars = (rating) => {
    //     const stars = [];
    //     for (let i = 1; i <= 5; i++) {
    //         stars.push(
    //             <svg
    //                 key={i}
    //                 className={`w-4 h-4 ${i <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-500'}`}
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //             >
    //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //             </svg>
    //         );
    //     }
    //     return stars;
    // };

    return (
        <div className="min-h-screen bg-black text-gray-100">
            {/* Header */}
            {/* <header className=" py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Our Products</h1>
        </div>
      </header> */}

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full py-3 px-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="absolute right-3 top-3 text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar - Categories */}
                    <div className="lg:w-1/6">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Categories</h2>
                            <ul className="space-y-2">
                                {categories.map(category => (
                                    <li key={category}>
                                        <button
                                            className={`w-full text-left py-2 px-3 rounded ${selectedCategory === category ? 'bg-purple-700 text-white' : 'hover:bg-gray-700'}`}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Products Area */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                                    {/* Wishlist button (top right) */}
                                    <button
                                        className="absolute top-2 right-2 p-2 bg-gray-900 bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all duration-300 z-10"
                                        onClick={() => {
                                            // Add your wishlist logic here
                                        }}
                                        aria-label="Add to wishlist"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                    </button>

                                    {/* Product Image */}
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>

                                        {/* Price Section */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-lg font-bold text-purple-400">${product.price.toFixed(2)}</span>
                                                {product.originalPrice && (
                                                    <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button className="group w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-500 text-white py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                            <svg
                                                className="w-5 h-5 text-white transform group-hover:scale-110 transition-transform duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 1.293a1 1 0 00-.293.707V17a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-.293-.707L17 13M9 21h.01M15 21h.01"
                                                />
                                            </svg>
                                            <span className="font-semibold">Add to Cart</span>
                                        </button>
                                    </div>
                                </div>

                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <h3 className="text-xl text-gray-400">No products found matching your criteria</h3>
                                <button
                                    className="mt-4 text-purple-400 hover:text-purple-300"
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('All');
                                        setSortOption('featured');
                                        setPriceRange([0, 200]);
                                    }}
                                >
                                    Reset filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Sidebar - Filters */}
                    <div className="lg:w-1/6 mr-5">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Sort & Filter</h2>

                            <div className="mb-6">
                                <h3 className="text-md font-medium mb-2">Sort By</h3>
                                <select
                                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                >
                                    <option value="featured">Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>

                            <div>
                                <h3 className="text-md font-medium mb-2">Price Range</h3>
                                <div className="flex justify-between mb-2">
                                    <span>${priceRange[0]}</span>
                                    <span>${priceRange[1]}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="500"
                                    step="10"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between mt-4">
                                    <input
                                        type="number"
                                        min="0"
                                        max="200"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                        className="w-20 bg-gray-700 border border-gray-600 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    />
                                    <input
                                        type="number"
                                        min="0"
                                        max="200"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                        className="w-20 bg-gray-700 border border-gray-600 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;