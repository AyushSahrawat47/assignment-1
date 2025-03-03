import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Navbar</div>
        <ul className="flex space-x-4">
          <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
          <li><Link to="/register" className="text-white hover:text-gray-300">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;