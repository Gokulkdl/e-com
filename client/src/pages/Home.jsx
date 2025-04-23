import React from 'react'
import Navbar from '../componets/Navbar'
import Highlights from '../componets/Highlights'    
import BannerHero from '../componets/Hero'
import OfferCarousel from '../componets/OfferCarousel'


const Home = () => {
  return (
    <>
    
    <BannerHero />
    
        <Highlights />
        <OfferCarousel />

    </>
  )
}

export default Home