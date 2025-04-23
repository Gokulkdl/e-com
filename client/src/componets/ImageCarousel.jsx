import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const hightlightsSlide = [
  {
    id: 1,
    image: "/assets/images/samtv.jpg",
    textLists: [" Samsung Neo QLED 8K", "Experience cinematic brilliance with ultra-fine contrast and vivid colors powered by Quantum Matrix Technology Pro and 8K resolution."],
  },
  {
    id: 2,
    image: "/assets/images/samtv.jpg",
    textLists: ["iPhone 15 Pro", "Crafted from aerospace-grade titanium with a blazing fast A17 Pro chip, ProMotion display, and powerful camera system — reimagining what a smartphone can do."],
  },
  {
    id: 3,
    image: "/assets/images/samtv.jpg",
    textLists: ["Sony WH-1000XM5", "Industry-leading noise cancellation, ultra-clear sound, and all-day comfort — the ultimate escape into pure audio bliss."],
  },
  {
    id: 4,
    image: "/assets/images/samtv.jpg",
    textLists: ["MacBook Pro", "Power meets elegance with the Apple M3 chip, Liquid Retina XDR display, and marathon battery life — designed for creators and pros alike."],
  },
  {
    id: 5,
    image: "/assets/images/samtv.jpg",
    textLists: [" HP Pavilion 15", "Reliable performance and immersive visuals with Intel Core processors and Full HD display — ideal for everyday productivity and entertainment."],
  },
];

const ImageCarousel = () => {
  const imageRef = useRef(null);
  const imageSpanRef = useRef([]);
  const [imageId, setImageId] = useState(0);
  const textRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      "#image",
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.inOut" }
    );
  }, [imageId]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, [imageId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageId((prev) => (prev + 1) % hightlightsSlide.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-[90vw] h-[70vh] max-w-5xl rounded-3xl overflow-hidden bg-black">
        <img
          id="image"
          ref={imageRef}
          src={hightlightsSlide[imageId].image}
          alt={`highlight-image-${imageId}`}
          className="w-full h-full object-cover rounded-3xl"
        />

        {/* Text overlay bottom-left with left gradient */}
        <div className="absolute inset-0 flex items-end">
          <div className="bg-gradient-to-r from-black/90 via-black/50 to-transparent text-white p-8 w-full h-full pt-[300px] sm:w-3/4 max-w-2xl rounded-br-3xl">
            <div ref={textRef} className="flex flex-col gap-2">
              {hightlightsSlide[imageId].textLists.map((text, index) => (
                <p key={index} className="text-lg md:text-xl font-semibold">
                  {text}
                </p>
              ))}
              <button className="mt-4 bg-gray-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white transition-all duration-300 w-fit">
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center mt-6 py-3 px-5 rounded-full">
        {hightlightsSlide.map((_, i) => (
          <span
            key={i}
            onClick={() => setImageId(i)}
            className="mx-1 w-3 h-3 rounded-full bg-gray-400 relative cursor-pointer overflow-hidden"
          >
            <span
              className="absolute top-0 left-0 h-full bg-white rounded-full"
              ref={(el) => (imageSpanRef.current[i] = el)}
              style={{ width: imageId === i ? '100%' : '0%', transition: 'width 0.3s' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;






