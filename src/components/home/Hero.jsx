import React from 'react';
import heroImage from '../../assets/librray hero.jpg'; // ✅ Fix filename

const Hero = () => {
  return (
    <div className="flex w-11/12 mt-5 bg-green-100 items-center justify-between p-6 mx-auto">
      {/* Text Section */}
      <div className="w-4/12">
        <h1 className="text-7xl font-bold">Hello, the Book</h1>
        <p className="mt-2 text-3xl text-gray-600">Welcome to your library!</p>
      </div>

      {/* Image Section */}
      <div className="w-8/12 ml-auto">
        <img
          src={heroImage}
          alt="Library Hero"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Hero;

