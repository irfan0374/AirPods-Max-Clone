import React, { useState } from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import logo from '../assets/logo.png'


const Navbar = () => {
  
  const navItems = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'];


  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Apple logo */}
          <div className="flex-shrink-0">
          <img className='w-9 h-10' src={logo} alt="" />
          </div>

          {/* Main navigation items */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-900 px-3  rounded-md text-sm font-medium">
                {item}
              </a>
            ))}
          </div>

          {/* Search and Cart icons */}
          <div className="flex items-center">
            <FiSearch className="h-4 w-4 text-gray-600 mr-4" />
            <FiShoppingBag className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;