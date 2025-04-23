
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Navbar from './componets/Navbar';
<<<<<<< HEAD
import Footer from './componets/Footer';
=======
import Profile from './pages/Profile';
>>>>>>> 9e620975a0cc0279d782ae04c13083fb7286eed5

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
