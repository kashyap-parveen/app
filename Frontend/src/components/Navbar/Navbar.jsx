// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-center space-x-4 font-bold">
        <li className=' hover:bg-purple-700 p-3 rounded-xl'>
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
        </li>
        <li className=' hover:bg-purple-700 p-3 rounded-xl'>
          <Link to="/register" className="text-white hover:text-gray-200">
            Register
          </Link>
        </li>
        <li className=' hover:bg-purple-700 p-3 rounded-xl'>
          <Link to="/login" className="text-white hover:text-gray-200">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
