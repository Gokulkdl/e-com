import React from 'react'
import Navbar from '../componets/Navbar'
import { Link } from 'react-router-dom'

const OrderPage = () => {
  return (
    <>
 
      <div className="flex flex-col gap-6 p-20">
        {/* Top Section: Breadcrumb + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2">
            <Link to="/profile" className="hover:underline ml-20 text-xl">Profile</Link>
            <span>&gt;</span>
            <span className='text-xl '>Orders</span>
          </div>

          {/* Search Box */}
          <div className="w-full max-w-md md:ml-auto">
            <input
              type="text"
              placeholder="Search your orders..."
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        
        </div>
        <div className='text-3xl ml-20 p-5'>your Orders</div>
        <div className="bg-gray-900 shadow-2xl rounded-lg p-8 border border-gray-800 w-[350px] h-auto text-white ml-20">
  <h2 className="text-xl font-semibold mb-4">Order #12345</h2>
  
  {/* Image section */}
  <div className="flex justify-center mb-4">
    <img 
      src="/assets/images/iphone.jpg" 
      alt="Pulse Oximeter"
      className="w-32 h-32 object-cover rounded-lg shadow-md border border-gray-700"
    />
  </div>

  {/* Order details */}
  <p className="mb-1">Product: Pulse Oximeter</p>
  <p className="mb-1">Quantity: 2</p>
  <p className="mb-1">Price: $80.00</p>
  <p className="mb-1">
    Status: <span className="text-green-400 font-semibold">Shipped</span>
  </p>
  <p className="mt-4 text-sm text-gray-400">Ordered on: April 10, 2025</p>
</div>





        {/* Other content can go here */}
      </div>
    </>
  )
}

export default OrderPage
