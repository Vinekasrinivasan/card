import { FaHome, FaInfoCircle, FaListAlt, FaShoppingCart } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white p-2 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">

        <h1 className="text-xl md:text-2xl font-bold">My Store</h1>

     
        <div className="relative w-1/2 md:w-1/3 hidden sm:block">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Search products..."
          />
        </div>

   
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600 flex items-center">
            <FaHome className="mr-1" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600 flex items-center">
            <FaInfoCircle className="mr-1" />
            <span className="hidden sm:inline">About</span>
          </Link>
          <Link href="/" className="text-gray-700 hover:text-blue-600 flex items-center">
            <FaListAlt className="mr-1" />
            <span className="hidden sm:inline">Product List</span>
          </Link>
          <Link href="#cart" className="text-gray-700 hover:text-blue-600 flex items-center">
            <FaShoppingCart className="mr-1" />
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
