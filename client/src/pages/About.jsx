import React, { useRef, useState } from 'react'; // ✅ all hooks here
import { useInView } from 'react-intersection-observer';

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
  { name: 'Samsung Galaxy Z Fold 5', brand: 'Samsung', description: 'Innovative foldable phone with cutting-edge tech.', size: 'large', video: '/assets/videos/galaxy-z-fold6-features-highlights-design.webm' },
  { name: 'Nothing', brand: 'Nothing', description: 'Flagship phone with great specs and performance.', size: 'medium', video: '/assets/videos/Nothing.mp4' },
];

const isVideo = (url) => {
  return url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov'));
};

const ScrollRevealSection = ({ children, className = '', delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        transition: 'all 0.7s ease-out',
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
};

const About = () => {
  const containerRef = useRef();
  const [showAllBrands, setShowAllBrands] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white" ref={containerRef}>
      {/* Fixed Watermark Background */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 opacity-20 z-0 pointer-events-none">
        <span className="text-[20rem] font-bold">Nexure</span>
      </div>

      <div className="h-screen w-full"></div>

      <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollRevealSection className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-[500px]">Who We Are</h1>
          <p className="text-4xl text-gray-400 mb-10  mx-auto">
            Your one-stop shop for the latest phones from all the top brands.
          </p>
          <p className="mt-4 text-white mb-[800px]">
            Welcome to Nexure – your one-stop destination for the latest smartphones from the world's leading brands.
            At Nexure, we're passionate about keeping you connected with the future. Whether you're looking for cutting-edge technology, sleek designs, or unbeatable performance, we've got the perfect phone for you.
            <br /><br />
            Our mission is simple: to bring you the best of innovation and reliability in the palm of your hand. We carefully curate a wide range of devices from brands you know and trust — ensuring that every product we offer meets the highest standards of quality and performance.
            <br /><br />
            From flagship releases to budget-friendly gems, Nexure is here to help you stay ahead of the curve. Because when it comes to smartphones, we believe you deserve nothing less than the best.
          </p>
        </ScrollRevealSection>

        {/* Popular Phones Section */}
        <ScrollRevealSection className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">Popular Phones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[600px] mb-[500px]">
            {popularPhones.map((phone, index) => (
              <ScrollRevealSection
                key={index}
                delay={index * 200}
                className={`bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 ${
                  phone.size === 'large' ? 'lg:col-span-2' : phone.size === 'small' ? 'col-span-1' : ''
                }`}
              >
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
                <div className="w-full h-full p-4 flex flex-col justify-end">
                  <h3 className="font-semibold text-xl text-white">{phone.name}</h3>
                  <p className="text-gray-300 text-sm">{phone.brand}</p>
                  <p className="text-gray-200 text-sm mt-2">{phone.description}</p>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </ScrollRevealSection>

        {/* Featured Brands Section */}
        <ScrollRevealSection className={`mb-8 ${showAllBrands ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6' : 'flex justify-center gap-12 flex-wrap'}`}>
          {(showAllBrands ? brands : brands.slice(0, 3)).map((brand, index) => (
            <ScrollRevealSection
              key={index}
              delay={index * 150}
              className="flex flex-col items-center justify-center text-center transition-opacity duration-700 hover:opacity-80"
            >
              <img src={brand.logo} alt={brand.name} className="h-[80px] w-20 mb-2" />
              <p className="text-gray-200">{brand.name}</p>
            </ScrollRevealSection>
          ))}
        </ScrollRevealSection>

        {/* Toggle Button (View More / View Less) */}
        <ScrollRevealSection className="text-center mt-4">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            onClick={() => setShowAllBrands(prev => !prev)}
          >
            {showAllBrands ? 'View Less' : 'View More Phones'}
          </button>
        </ScrollRevealSection>

{/* Our Mission Section */}
<ScrollRevealSection className="relative flex items-center justify-center min-h-screen w-[1900px] ">
  <div className="p-10 rounded-lg shadow-lg flex flex-col lg:flex-row items-center ">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 lg:mb-0 relative">
      <img
        src="/assets/images/frame.png"
        alt="Our Mission"
        className="rounded-lg object-cover w-full h-full"
      />
      
      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
        <div>
          <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
          <p className="text-white mb-4">
            We are dedicated to offering the best selection of phones from leading brands.
          </p>
          <p className="text-white">
            Our goal is to provide you with the most seamless shopping experience.
          </p>
        </div>
      </div>
    </div>
    
    {/* Right side content (empty for now but can be filled with other information) */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      {/* Right side content can go here if needed */}
    </div>
  </div>
</ScrollRevealSection>



        {/* Call to Action Section */}
        <ScrollRevealSection className="text-center mb-20 ">
          <h3 className="text-xl font-semibold mb-2">Ready to Get Your New Phone?</h3>
          <p className="text-gray-600 mb-4">Browse our collection of phones from the best brands.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Explore Our Phones
          </button>
        </ScrollRevealSection>
      </div>
    </div>
  );
};

export default About;





