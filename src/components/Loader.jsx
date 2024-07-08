import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        <div className="w-20 h-20 border-t-4 border-b-4 border-orange-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-orange-500 font-bold text-lg">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
