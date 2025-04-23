
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import OrderPage from './pages/OrderPage';
import OrderConfirm from './pages/OrderConfirm';

const App = () => {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/orders'element={<OrderPage/>}/>
        <Route path='/Confirm' element={<OrderConfirm/>}/>
      </Routes>
  );
};

export default App;
