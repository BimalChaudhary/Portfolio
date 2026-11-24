'use client';

import React from 'react';
import Image from 'next/image';
import userIcon from '../../assets/user_icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Stay Updated</h2>
          <p className="text-gray-400">Subscribe to our newsletter for updates.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
            <div className="bg-gray-800 px-3 py-2">
              <Image src={userIcon} alt="User icon" width={20} height={20} />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 focus:outline-none w-64"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition duration-200">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>© 2025 Bimal Chaudhary. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="/components/contact" className="hover:text-white">Connect with me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
