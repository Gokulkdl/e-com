
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Navbar from './componets/Navbar';
import Profile from './pages/Profile';
import Footer from './componets/Footer';
import AllProducts from './pages/AllProducts';
import OrderPage from './pages/OrderPage';
import OrderConfirm from './pages/OrderConfirm';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import About from './pages/About';

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/All-Products" element={<AllProducts />} />
        <Route path='/order'element={<OrderPage/>}/>
        <Route path='/confirm'element={<OrderConfirm/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/About' element={<About/>}/>

      </Routes>
      <Footer />
    </main>
  );
};

export default App;
