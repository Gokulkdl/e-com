import React from 'react';

const Wishlist = () => {
    // Sample wishlist data
    const wishlistProducts = [
        {
            id: 1,
            name: 'Premium Wireless Headphones',
            description: 'Experience crystal-clear sound with our premium wireless headphones featuring noise cancellation and 30-hour battery life.',
            price: 199.99,
            originalPrice: 249.99,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            name: 'Smart Watch Pro',
            description: 'Track your fitness, receive notifications, and monitor your health with our advanced smartwatch.',
            price: 179.99,
            originalPrice: 199.99,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 3,
            name: 'Ultra HD 4K Camera',
            description: 'Capture stunning 4K videos and high-resolution photos with this professional-grade camera.',
            price: 899.99,
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 4,
            name: 'Ergonomic Keyboard',
            description: 'Type comfortably for hours with our ergonomic keyboard designed to reduce wrist strain.',
            price: 89.99,
            originalPrice: 109.99,
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    ];

    const handleRemoveFromWishlist = (productId) => {
        // Add your remove from wishlist logic here
        console.log(`Removing product ${productId} from wishlist`);
    };

    return (
        <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Your Wishlist
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-400">
                        {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} in your wishlist
                    </p>
                </div>

                {/* Wishlist Products Grid */}
                {wishlistProducts.length === 0 ? (
                    <div className="text-center py-16">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-white">Your wishlist is empty</h3>
                        <p className="mt-1 text-gray-500">Start adding items you love!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {wishlistProducts.map((product) => (
                            <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                                {/* Remove from wishlist button (top right) */}
                                <button
                                    className="absolute top-2 right-2 p-2 bg-gray-900 bg-opacity-70 rounded-full hover:bg-red-600 hover:bg-opacity-100 transition-all duration-300 z-10"
                                    onClick={() => handleRemoveFromWishlist(product.id)}
                                    aria-label="Remove from wishlist"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
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
                )}
            </div>
        </div>
    );
};

export default Wishlist;