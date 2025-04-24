import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ImageCarousel from './ImageCarousel';

const Highlights = () => {
  const headingRef1 = useRef(null); // Ref for "Offers in"
  const headingRef2 = useRef(null); // Ref for "Nexure"

  useEffect(() => {
    // GSAP Animation for "Offers in"
    gsap.from(headingRef1.current, {
      opacity: 0,
      y: 50, // Move it from below
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
    });

    // GSAP Animation for "Nexure"
    gsap.from(headingRef2.current, {
      opacity: 0,
      y: 50, // Move it from below
      duration: 1,
      ease: 'power2.out',
      delay: 1, // Delay Nexure to animate after "Offers in"
    });
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 className="section-heading flex pl-20">
            <span ref={headingRef1}>Offers in</span>
            <p className="ml-5" ref={headingRef2}>Nexure</p>
          </h1>
        </div>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default Highlights;



