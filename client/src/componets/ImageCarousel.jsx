import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const hightlightsSlide = [

  {
    id: 1,
    video: "/assets/videos/hightlight-third.mp4",
    textLists: ["iPhone 15 Pro", "Crafted from aerospace-grade titanium with a blazing fast A17 Pro chip, ProMotion display, and powerful camera system — reimagining what a smartphone can do."],
  },
  {
    id: 2,
    video: "/assets/videos/galaxy-s25-ultra-features-form-factor.webm",
    textLists: ["Samsung Galaxy S23", "Industry-leading noise cancellation, ultra-clear sound, and all-day comfort — the ultimate escape into pure audio bliss."],
  },
  {
    id: 3,
    video: "/assets/videos/hightlight-fourth.mp4",
    textLists: ["iPhone 16 Pro", "Power meets elegance with the Apple M3 chip, Liquid Retina XDR display, and marathon battery life — designed for creators and pros alike."],
  },
  {
    id: 4,
    video: "/assets/videos/Nothing.mp4",
    textLists: ["Nothing", "Reliable performance and immersive visuals with Intel Core processors and Full HD display — ideal for everyday productivity and entertainment."],
  },
];

const ImageCarousel = () => {
  const imageRef = useRef(null);
  const videoRefs = useRef([]);
  const imageSpanRef = useRef([]);
  const [imageId, setImageId] = useState(0);
  const textRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      "#image",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, [imageId]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 5, ease: "power3.out" }
    );
  }, [imageId]);

  useEffect(() => {
    let timeout;
    const currentSlide = hightlightsSlide[imageId];

    // Pause all videos first
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });

    if (currentSlide.video && videoRefs.current[imageId]) {
      const videoEl = videoRefs.current[imageId];

      const handleEnded = () => {
        setImageId((prev) => (prev + 1) % hightlightsSlide.length);
      };

      videoEl.currentTime = 0;
      videoEl.play();
      videoEl.addEventListener('ended', handleEnded);

      return () => {
        videoEl.removeEventListener('ended', handleEnded);
      };
    } else {
      timeout = setTimeout(() => {
        setImageId((prev) => (prev + 1) % hightlightsSlide.length);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [imageId]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-[90vw] h-[70vh] max-w-5xl rounded-3xl overflow-hidden bg-black">
        {hightlightsSlide[imageId].video ? (
          <video
            id="image"
            ref={(el) => (videoRefs.current[imageId] = el)}
            src={hightlightsSlide[imageId].video}
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          />
        ) : (
          <img
            id="image"
            ref={imageRef}
            src={hightlightsSlide[imageId].image}
            alt={`highlight-image-${imageId}`}
            className="w-full h-full object-cover rounded-3xl"
          />
        )}

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













