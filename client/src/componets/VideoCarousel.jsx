import React, { useEffect, useRef, useState } from 'react';
import { hightlightsSlides } from '../constants';
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const VideoCarousel = () => {
  const videoRef = useRef(null);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none',
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [videoId]);

  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        if (i + 1 < hightlightsSlides.length) {
          setVideo((pre) => ({
            ...pre,
            videoId: i + 1,
            isLastVideo: false,
            isEnd: false,
            isPlaying: true,
          }));
        } else {
          setVideo((pre) => ({
            ...pre,
            isLastVideo: true,
            isPlaying: false,
          }));
        }
        break;

      case 'go-to':
        setVideo((pre) => ({
          ...pre,
          videoId: i,
          isLastVideo: i === hightlightsSlides.length - 1,
          isPlaying: true,
          startPlay: true,
          isEnd: false,
        }));

        // ✅ scroll to clicked card only
        if (videoRef.current?.children[i]) {
          videoRef.current.children[i].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
          });
        }
        break;

      case 'video-reset':
        setVideo((pre) => ({
          ...pre,
          videoId: 0,
          isLastVideo: false,
          isEnd: false,
          isPlaying: true,
        }));
        break;

      case 'play':
        setVideo((pre) => ({ ...pre, isPlaying: true }));
        break;

      case 'pause':
        setVideo((pre) => ({ ...pre, isPlaying: false }));
        break;

      default:
        return video;
    }
  };

  // Animate progress bar for active video
  useEffect(() => {
    const currentVideo = videoDivRef.current[videoId];

    const updateProgress = () => {
      if (currentVideo) {
        const progress = (currentVideo.currentTime / currentVideo.duration) * 100;
        gsap.to(videoSpanRef.current[videoId], {
          width: `${progress}%`,
          duration: 0.4,
          ease: 'linear',
        });
      }
    };

    const interval = setInterval(updateProgress, 100);
    return () => clearInterval(interval);
  }, [videoId, startPlay]);

  // ✅ Only play videos in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoEl = entry.target;
          if (entry.isIntersecting) {
            videoEl.play();
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoDivRef.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoDivRef.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <>
      {/* Carousel */}
      <div
        className='flex items-center overflow-x-auto scroll-smooth no-scrollbar'
        ref={videoRef}
      >
        {hightlightsSlides.map((list, i) => (
          <div
            key={list.id}
            className='sm:pr-20 pr-10 min-w-[90vw] max-w-[90vw]'
          >
            <div className='video-carousel_container'>
              <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                <video
                  id='video'
                  playsInline
                  preload='auto'
                  muted
                  ref={(el) => (videoDivRef.current[i] = el)}
                  onLoadedMetadata={() => {
                    if (i === 0) setVideo((prev) => ({ ...prev, startPlay: true }));
                  }}
                  onEnded={() => handleProcess('video-end', i)}
                >
                  <source src={list.video} type='video/mp4' />
                </video>
              </div>

              <div className='absolute top-12 left-[5%] z-10'>
                {list.textLists.map((text) => (
                  <p key={text} className='md:text-2xl text-xl ml-[30%] font-medium'>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress & Controls */}
      <div className='relative flex-center mt-10'>
        <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              onClick={() => handleProcess('go-to', i)}
              className='mx-2 w-3 h-3 rounded-full bg-gray-200 relative cursor-pointer overflow-hidden'
            >
              <span
                className='absolute top-0 left-0 h-full bg-white rounded-full'
                ref={(el) => (videoSpanRef.current[i] = el)}
                style={{ width: '0%' }}
              />
            </span>
          ))}
        </div>

        <button className='control-btn ml-4'>
          <img
            src={
              isLastVideo
                ? replayImg
                : !isPlaying
                ? playImg
                : pauseImg
            }
            alt={
              isLastVideo
                ? 'replay'
                : !isPlaying
                ? 'play'
                : 'pause'
            }
            onClick={
              isLastVideo
                ? () => handleProcess('video-reset')
                : !isPlaying
                ? () => handleProcess('play')
                : () => handleProcess('pause')
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;




