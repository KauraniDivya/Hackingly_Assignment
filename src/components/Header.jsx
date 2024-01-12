import React from 'react';
import profilePhoto from './images/hackingly.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-opacity-75 backdrop-blur-md bg-white p-4 flex items-center justify-between">
      
      <div className="flex items-center space-x-2">
      <div className="w-10 h-10 overflow-hidden rounded-full">
          <img src={profilePhoto} alt="Profile" className="object-cover w-full h-full" />
        </div>
        <span className="text-lg font-bold text-blue-500">Hackingly</span>
      </div>

      
      <div className="text-lg font-semibold text-gray-700">Blog</div>

  
    </header>
  );
};

export default Header;
