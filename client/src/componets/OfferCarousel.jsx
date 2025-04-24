import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const OfferCarousel = () => {
  const offers = [
    {
      title: 'Samsung',
      description:
        'Innovative and versatile — Known for flagship Galaxy S series and foldable Z series with cutting-edge displays and cameras.',
      videoSrc: '/assets/videos/galaxy-z-fold6-features-highlights-design.webm',
    },
    {
      title: 'Apple',
      description:
        'Premium and polished — Makers of the iPhone, famous for sleek design, performance, and the iOS ecosystem.',
      videoSrc: '/assets/videos/iphone-video.mp4',
    },
    {
      title: 'Google',
      description:
        'Clean and smart — Pixel phones offer the best Android experience with top-tier cameras and AI features.',
      videoSrc: '/assets/videos/pixls-phone.webm',
    },
    {
      title: 'Xiaomi',
      description:
        'Feature-rich and affordable — Offers powerful specs for budget-conscious users through its Redmi and Mi series.',
      videoSrc: '/assets/videos/Xiaomi-phone-video.mp4',
    },
    {
      title: 'Vivo',
      description:
        'Stylish and innovative — Known for sleek design, fast charging, and solid mid-range options.',
      videoSrc: '/assets/videos/vivo-x200-pro-with-curved-design.webm',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });
    }
  }, [currentIndex]);

  const currentOffer = offers[currentIndex];

  return (
    <section className="w-full py-10  text-gray-400 relative overflow-hidden">
      <h2 className="text-6xl font-bold text-left pl-20 mb-8">Top Brands</h2>

      {/* Click Zones */}
      <div className="absolute top-0 left-0 w-1/2 h-full z-30" onClick={prevSlide} />
      <div className="absolute top-0 right-0 w-1/2 h-full z-30" onClick={nextSlide} />

      {/* Video Background */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl mx-auto overflow-hidden">
        <video
          key={currentOffer.videoSrc} // Ensures reloading on index change
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          src={currentOffer.videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          ref={cardRef}
          className="relative z-20 flex items-center justify-center w-full h-full"
        >
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-lg text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-semibold mb-2">{currentOffer.title}</h3>
            <p className="text-base md:text-lg font-light">{currentOffer.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferCarousel;





