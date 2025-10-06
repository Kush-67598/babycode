import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-indigo-600">IELTS Institute</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#courses" className="hover:text-indigo-600">Courses</a>
          <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="h-6 w-6"/> : <HiMenu className="h-6 w-6"/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow absolute w-full top-16 left-0 px-4 py-4 space-y-2 z-40">
          <a href="#home" className="block hover:text-indigo-600">Home</a>
          <a href="#courses" className="block hover:text-indigo-600">Courses</a>
          <a href="#testimonials" className="block hover:text-indigo-600">Testimonials</a>
          <a href="#contact" className="block hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
}
