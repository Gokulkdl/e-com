

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    );
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen video background */}
      <video
        // src="/assets/videos/phone.mp4"
        src="https://media-hosting.imagekit.io/9357c554be634590/login.mp4?Expires=1840015709&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i66PElV48930oO2iGDrfmBusf3OTTwH11TS3xyN56QzIKyfflrig2kPQc5pSvyiT1vOFbfayU0YDwPndFau~RcD0~a00IvBiQxhSDsNiolXhuCYQ9DonBEhqCjGtrMNQ2FQXPWaunvUkfTCj12x4J568ni4NeP-lt115nlkYS8~-havcnwOBbwKssrsKGs6tQl6LZaG1508Lm~9cP8BOjg~OML-Uya6KyEywenkUZNzPsLd6toOMoY1JTvBJEsil2kl6PoLr646Zs18S-zIWYXF6Lst4oEbLrNKIWl0dR4t8Vxo4DOGV386v6izSBPWgRo3G8qGWhzudTDV2EC8Dxw__"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay + Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10">
        <div
          ref={formRef}
          className="w-full max-w-md bg-black/10 backdrop-blur-lg rounded-lg p-8 overflow-hidden"
        >
           <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Login here
          </h2> 
  

          <form className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
              <input
                type="email"
                placeholder="Email or mobile number"
                className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-white/70 border-none focus:outline-none focus:ring-0"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-white/70 border-none focus:outline-none focus:ring-0"
              />
            </div>



            <button className="w-full py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition">
              Login
            </button>
          </form>

         

          <div className="text-center text-sm mt-6 text-white/80">
            Not Registered?{' '}
            <Link to={'/signup'}>
            <a href="#" className="font-semibold hover:underline text-white">
              SignUp
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
