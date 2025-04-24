
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Navbar from './componets/Navbar';
import Profile from './pages/Profile';
import Footer from './componets/Footer';
import AllProducts from './pages/AllProducts';

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/All-Products" element={<AllProducts />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
