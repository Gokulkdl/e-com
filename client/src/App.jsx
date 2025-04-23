import React from 'react'
import Navbar from './componets/Navbar'
import Highlights from './componets/Highlights'
import BannerHero from './componets/Hero'
import OfferCarousel from './componets/OfferCarousel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup'


const App = () => {
  return (
    // <Router>
      <Routes>
<Route path='/signup' element={<Signup/>}/>
      </Routes>
    // </Router>
  
    )
//     <main className='bg-black'>
//     <Navbar />
  
// <BannerHero />

//     <Highlights />
//     <OfferCarousel />
    
//   </main>
}

export default App