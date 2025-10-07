
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Inspired by Nature, Built to Last.</h2>
            <p className="text-gray-400 mb-4 text-lg">
              La Porte Alchemy was founded on a simple principle: to create extraordinary outdoor spaces that stand the test of time. We believe a landscape is more than just plants and pavers; it's a living extension of your home, a place for connection, reflection, and joy.
            </p>
            <p className="text-gray-400 mb-6 text-lg">
              Our approach merges timeless design principles with horticultural expertise and an obsessive focus on craftsmanship. We partner with discerning clients who, like us, believe in the value of quality and the enduring power of beautiful design.
            </p>
            <a href="#our-work" className="text-green-600 font-bold hover:text-green-500 transition-colors duration-300 text-lg">
              Explore Our Portfolio &rarr;
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://picsum.photos/seed/designteam/800/900" alt="Lush garden pathway" className="rounded-lg shadow-2xl w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
