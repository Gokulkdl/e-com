import React from 'react'
import Navbar from './componets/Navbar'
import Highlights from './componets/Highlights'
import Hero from './componets/Hero'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
    
      <Hero />
      <Highlights />
    </main>
    )
}

export default App