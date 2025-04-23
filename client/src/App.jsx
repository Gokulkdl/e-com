import React from 'react'
import Navbar from './componets/Navbar'
import Highlights from './componets/Highlights'
import BannerHero from './componets/Hero'
import OfferCarousel from './componets/OfferCarousel'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
    
  <BannerHero />
  <OfferCarousel />
      <Highlights />
      
    </main>
    )
}

export default App