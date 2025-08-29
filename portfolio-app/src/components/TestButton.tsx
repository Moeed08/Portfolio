"use client";

import React from 'react';

const TestButton: React.FC = () => {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold text-blue-600">Button Test</h2>
      
      {/* Simple HTML button with Tailwind classes */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        Simple Button
      </button>
      
      {/* Test different variants */}
      <div className="space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          Primary
        </button>
        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-4 rounded-lg">
          Outline
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg">
          Secondary
        </button>
      </div>
      
      {/* Test navigation styling */}
      <nav className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Logo</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TestButton;
