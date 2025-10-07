
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-center bg-no-repeat bg-contain flex items-center justify-center relative" style={{ backgroundImage: "url('/full_transparent_landscape.png')" }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
          Crafting Enduring Outdoor Sanctuaries
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          We design and build bespoke landscapes that are a true extension of your home, blending artistry with meticulous craftsmanship.
        </p>
        <a href="#contact" className="bg-green-700 text-white font-bold py-4 px-10 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-lg">
          Begin Your Transformation
        </a>
      </div>
    </section>
  );
};

export default Hero;
