import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo ,smallHeroVideo } from '../utils'
import { useState } from 'react'

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth <760? smallHeroVideo : heroVideo)
    const handleViseoScrSet =() =>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }

    }
    useEffect(() => {  
        window.addEventListener('resize', handleViseoScrSet)
        return () => {
            window.removeEventListener('resize', handleViseoScrSet)
        }
     },[])

    useGSAP(() => {
        gsap.to('#hero',{opacity: 1, delay: 1})
        gsap.to('#cta',{opacity: 1, y: -50,delay: 1 })
    }, [])
  return (
 <section className='w-full nav-height bg-black relative'>
    <div className='h-5/6 w-full flex-center flex-col'>
    <p id='hero' className='hero-title'>iPhone15 pro </p>
    <div className='md:w-10/12 w-9/12 '>
    <video autoPlay muted playsInline={true} key={videoSrc} >
        <source src={videoSrc} type='video/mp4' />
    </video>

    </div>

    </div>
      {/* Moved CTA here */}
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20 mt-6 text-white'>
      <a href="#highlights" className='btn w-[80px] flex justify-center px-10'>Buy</a>
      <p className='font-normal text-xl w-[300px] text-center mt-2'>From $199/month or $999</p>
    </div>



 </section>
  )
}

export default Hero