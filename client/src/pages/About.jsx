import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // For arrow icons

const brands = [
  { name: 'Apple', logo: '/assets/images/apple_logo[1].jpg' },
  { name: 'Samsung', logo: '/assets/images/Samsung_logo[1].jpg' },
  { name: 'OnePlus', logo: '/assets/images/oneplus_logo[1].jpg' },
  { name: 'Google', logo: '/assets/images/Google_logo[1].jpg' },
  { name: 'Xiaomi', logo: '/assets/images/Xiaomi_logo[1].jpg' },
  { name: 'Oppo', logo: '/assets/images/oppo_logo[1].jpg' },
];

const popularPhones = [
  { name: 'iPhone 14', brand: 'Apple', description: 'The latest in iPhone technology.', size: 'large', video: '/assets/videos/hightlight-third.mp4' },
  { name: 'Samsung Galaxy S23', brand: 'Samsung', description: 'Top-tier performance and screen quality.', size: 'medium', video: '/assets/videos/galaxy-s25-ultra-features-form-factor.webm' },
  { name: 'OnePlus 11', brand: 'OnePlus', description: 'Fast charging and amazing value.', size: 'small', image: '/assets/images/oneplus-11.jpg' },
  { name: 'Pixel 8', brand: 'Google', description: 'Seamless integration with Google services.', size: 'medium', image: '/assets/images/pixel-8.jpg' },
  { name: 'iPhone 13', brand: 'Apple', description: 'Compact and powerful with great performance.', size: 'small', image: '/assets/images/iphone-13.jpg' },
  { name: 'Samsung Galaxy Z Fold 5', brand: 'Samsung', description: 'Innovative foldable phone with cutting-edge tech.', size: 'large', video: '/assets/videos/galaxy-z-fold6-features-highlights-design.webm' },
  { name: 'Nothing', brand: 'Nothing', description: 'Flagship phone with great specs and performance.', size: 'medium', video: '/assets/videos/Nothing.mp4' },
  { name: 'Google Pixel 7 Pro', brand: 'Google', description: 'Stunning camera with Google’s software.', size: 'medium', image: '/assets/images/google-pixel-7-pro.jpg' },
  { name: 'Xiaomi Mi 12', brand: 'Xiaomi', description: 'Affordable yet feature-packed smartphone.', size: 'small', video: '/assets/videos/Xiaomi-phone-video.mp4' },
];

const isVideo = (url) => {
  return url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov'));
};

const About = () => {
  return (
    <div className="bg-black text-white px-6 py-12 max-w-7xl mx-auto relative overflow-hidden">

      {/* Hero Section */}
      <section className="text-center mb-12 z-10 relative">
        <h1 className="text-4xl font-bold mb-3">About Our Store</h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Your one-stop shop for the latest phones from all the top brands.
        </p>
      </section>

      {/* Watermark Background (Centered & Large) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 opacity-10 z-0">
        <span className="text-9xl font-bold">Nexure</span>
      </div>

     

      {/* Popular Phones Section */}
      <section className="mb-16 z-10 relative bg-transparent">
        <h2 className="text-2xl font-semibold mb-4 text-center">Popular Phones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularPhones.map((phone, index) => (
            <div
              key={index}
              className={`bg-transparent p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 ${
                phone.size === 'large' ? 'lg:col-span-2' : phone.size === 'small' ? 'col-span-1' : ''
              }`}
            >
              {/* Background: Video or Image */}
              {isVideo(phone.video) ? (
                <video
                  className="w-[50%] h-full object-cover mt-[100px] rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={phone.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              )}

              {/* Overlay to make text more readable */}
              <div className="w-full h-full bg-black bg-opacity-40 p-4 flex flex-col justify-end">
                <h3 className="font-semibold text-xl text-white">{phone.name}</h3>
                <p className="text-gray-300 text-sm">{phone.brand}</p>
                <p className="text-gray-200 text-sm mt-2">{phone.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            View More Phones
          </button>
        </div>
      </section>
       {/* Featured Brands Section */}
       <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 z-10 relative">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center transition-opacity duration-700 hover:opacity-80">
            <img src={brand.logo} alt={brand.name} className="h-[80px] w-20 mb-2" />
            <p className="text-gray-200">{brand.name}</p>
          </div>
        ))}
      </section>

      {/* Our Mission Section as a Card */}
      <section className="mb-20 z-10 relative">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src="/images/mission-image.jpg" // Replace with your image path
              alt="Our Mission"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Right side - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              We are dedicated to offering the best selection of phones from leading brands, while providing top-notch customer service and unbeatable prices.
            </p>
            <p className="text-gray-300">
              Our goal is to provide you with the most seamless shopping experience, helping you find the perfect phone to suit your needs and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center z-10 relative">
        <h3 className="text-xl font-semibold mb-2">Ready to Get Your New Phone?</h3>
        <p className="text-gray-600 mb-4">Browse our collection of phones from the best brands.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Explore Our Phones
        </button>
      </section>
    </div>
  );
};

export default About;


