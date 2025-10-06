import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r mt-12 from-indigo-50 via-white to-indigo-50 shadow-inner py-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div>
          <h2 className="text-xl font-bold text-indigo-700 mb-2">IELTS Institute</h2>
          <p className="text-gray-600 text-sm">
            Helping students achieve their dream IELTS scores with personalized guidance, mock tests, and AI scoring.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-indigo-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Courses</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Contact Us</h3>
          <p className="text-gray-600 text-sm mb-2">123 IELTS Street, City, Country</p>
          <p className="text-gray-600 text-sm mb-2">Email: info@ieltsinstitute.com</p>
          <div className="flex space-x-3 mt-1 text-sm">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
        &copy; 2025 IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
}
