




import React from "react";

const SingleProduct = () => {
  const product = {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 124999,
    originalPrice: 139999,
    rating: 4.7,
    totalRatings: 1832,
    description:
      "The ultimate flagship with 200MP Pro-grade camera, Snapdragon 8 Gen 3, 12GB RAM and sleek titanium finish. Experience seamless power with Android 14.",
    image: "/assets/images/galaxy.jpg",
    gallery: [
      "/assets/images/galaxy.jpg",
      "/assets/images/galaxy1.jpeg",
      "/assets/images/galaxy2.jpeg",
    ],
    specs: {
      display: "6.8-inch QHD+ AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP + 12MP + 10MP",
      battery: "5000mAh",
      storage: "512GB",
      ram: "12GB",
      os: "Android 14",
    },
  };

  const discount =
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-10 px-4 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* Left - Images */}
        <div className="w-full lg:w-1/2">
          <div className="border rounded-2xl overflow-hidden mb-4 shadow-md hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>
            <div className="flex gap-3 justify-center">
            {product.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="w-20 h-20 object-cover rounded-xl border-2 border-transparent hover:border-pink-600 transition-all shadow-sm"
              /> 
            ))}
          </div> 
        </div>

        {/* Right - Details */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-base text-gray-500 font-medium uppercase">{product.brand}</h2>
            <h1 className="text-3xl font-bold text-gray-800 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold shadow-sm">
                ⭐ {product.rating}
              </span>
              <span className="text-sm text-gray-500">{product.totalRatings}+ ratings</span>
            </div>
          </div>

          {/* Price Block */}
          <div className="space-y-1">
            <div className="text-3xl font-bold text-pink-600">
              ₹{product.price.toLocaleString()}
              <span className="text-gray-400 text-base font-normal line-through ml-3">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="ml-2 text-green-600 font-semibold text-sm bg-green-100 px-2 py-0.5 rounded">
                {discount}% OFF
              </span>
            </div>
            <p className="text-sm text-gray-400">Inclusive of all taxes</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed border-y py-4">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
              🛍️ ADD TO BAG
            </button>
            <button className="border border-gray-400 hover:border-pink-500 text-gray-800 hover:text-pink-600 px-6 py-3 rounded-lg font-medium transition-all">
              ❤️ WISHLIST
            </button>
          </div>

          {/* Specs */}
          <div className="pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-1">Product Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm text-gray-700">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <span className="font-semibold capitalize text-gray-600">{key}:</span>{" "}
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
