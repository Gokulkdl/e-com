import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const OfferCarousel = () => {
  const offers = [
    {
      title: '🔥 Mega Deal on iPhone 15',
      description: 'Save up to $300 for a limited time!',
      backgroundImage: '/assets/images/iphone15-bg.jpg',
    },
    {
      title: '🚀 Galaxy S25 Launch Offer',
      description: 'Grab $200 off + free accessories!',
      backgroundImage: '/assets/images/galaxy-s25-bg.jpg',
    },
    {
      title: '💻 MacBook Pro Special',
      description: 'Exclusive $500 off for students!',
      backgroundImage: '/assets/images/macbook-pro-bg.jpg',
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
    <section className="w-full h-[300px] relative overflow-hidden cursor-pointer">
      {/* Click Zones */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full z-20"
        onClick={prevSlide}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-20"
        onClick={nextSlide}
      />

      <div
        ref={cardRef}
        className="carousel-card w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${currentOffer.backgroundImage})` }}
      >
        <div className="bg-black/50 p-6 rounded-lg text-center text-white w-full max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">{currentOffer.title}</h2>
          <p className="text-lg">{currentOffer.description}</p>
        </div>
      </div>
    </section>
  );
};

export default OfferCarousel;




