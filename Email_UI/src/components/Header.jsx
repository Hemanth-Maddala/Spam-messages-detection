import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold gradient-text ">
          Spam Message Detective
        </h1>
        <p className="mt-2 text-gray-800">
          Advanced machine learning powered spam detection for your messages
        </p>
      </div>
    </header>
  );
};

export default Header; 