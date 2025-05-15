
import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full h-80 md:h-96 bg-gradient-to-r from-blue-600 to-blue-300 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Summer Sale is Live!</h1>
          <p className="text-lg md:text-xl mb-6">Up to 60% off on electronics, fashion & more</p>
          <button className="bg-amazon-yellow hover:bg-amazon-orange text-black font-bold py-2 px-6 rounded-md transition-colors">
            Shop Now
          </button>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Banner;
