import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const models = [
    {
      name: 'iPhone 15 Pro',
      video: heroVideo,
      smallVideo: smallHeroVideo
    },
    {
      name: 'Galaxy S25 Ultra',
      video: '/assets/videos/galaxy-s25-ultra-features-form-factor.webm',
      smallVideo: '/assets/videos/galaxy-s25-ultra-features-form-factor.webm'
    },
    {
      name: 'iPhone 13 Pro',
      video: '/path/to/iphone13/video.mp4',
      smallVideo: '/path/to/iphone13/small/video.mp4'
    }
  ];

  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const currentModel = models[currentModelIndex];
  const isSamsung = currentModel.name.toLowerCase().includes('galaxy');

  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760
      ? currentModel.smallVideo || currentModel.video
      : currentModel.video
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(currentModel.smallVideo || currentModel.video);
    } else {
      setVideoSrc(currentModel.video);
    }
  };

  const nextModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  const prevModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  };

  useEffect(() => {
    handleVideoSrcSet();
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, [currentModelIndex]);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1 });
  }, [currentModelIndex]);

  return (
    <section className="w-full nav-height bg-black relative overflow-hidden">
      
     

      {/* Samsung model video */}
      {isSamsung && (
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/client/public/assets/videos/samsung_logo_writing_video.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div className="h-5/6 w-full flex justify-center items-center flex-col z-10 relative">
        <div className="md:w-[400px] w-[280px] relative">
          <video
            autoPlay
            muted
            playsInline
            key={videoSrc}
            className="w-full h-auto rounded-lg object-contain z-10"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <p
            id="hero"
            className="hero-title absolute ml-12 left-4 text-white text-2xl md:text-4xl font-bold bg-black/60 px-4 py-2 rounded opacity-0"
          >
            {currentModel.name}
          </p>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 mt-6 text-white z-10 relative">
        <a href="#highlights" className="btn w-[80px] flex justify-center px-10">Buy</a>
        <p className="font-normal text-xl w-[300px] text-center mt-2">From $199/month or $999</p>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-4 ml-6 z-10">
        <button onClick={prevModel} className="text-white text-4xl">&#8592;</button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-4 mr-6 z-10">
        <button onClick={nextModel} className="text-white text-4xl">&#8594;</button>
      </div>
    </section>
  );
};

export default Hero;


