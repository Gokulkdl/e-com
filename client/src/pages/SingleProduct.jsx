


import React from "react";

const SingleProduct = () => {
  const product = {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 124999,
    originalPrice: 139999,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 p-6 sm:p-8">
        {/* Left - Images */}
        <div className="flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            {product.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`gallery-${idx}`}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border shadow hover:scale-110 hover:ring-2 ring-gray-300 transition-all duration-200"
              />
            ))}
          </div>
        </div>

        {/* Right - Details */}
        <div className="space-y-6 text-gray-800">
          <div>
            <h2 className="text-sm font-medium uppercase text-gray-500 tracking-widest">
              {product.brand}
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
              <span className="ml-3 text-base text-gray-400 line-through font-medium">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
          </div>

          <p className="text-gray-700 text-base leading-relaxed border-y border-gray-200 py-4">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gray-900 text-white hover:bg-gray-800 font-semibold px-6 py-3 rounded-lg shadow transition-all duration-200 w-full sm:w-auto">
              🛒 Add to Cart
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all w-full sm:w-auto">
              ❤️ Wishlist
            </button>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">
              Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm text-gray-700">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <span className="font-semibold capitalize">{key}:</span>{" "}
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
