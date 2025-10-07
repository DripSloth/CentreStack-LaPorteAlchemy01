
import React from 'react';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
    const testimonialData: Testimonial = {
        quote: "The team at La Porte Alchemy didn't just build a garden; they created a work of art. Their attention to detail and commitment to quality was evident in every single step. It's an investment we'll cherish forever.",
        author: "James & Eleanor Worthington",
        location: "Greenwich, CT"
    };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <svg className="w-16 h-16 mx-auto mb-6 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.25 7.187a.75.75 0 10-1.5 0v5.625a.75.75 0 001.5 0V7.187zM15.25 7.187a.75.75 0 10-1.5 0v5.625a.75.75 0 001.5 0V7.187z" clipRule="evenodd" transform="rotate(90 10 10) scale(1.5)" /></svg>
          <p className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed">
            "{testimonialData.quote}"
          </p>
          <div className="mt-8">
            <p className="text-xl font-bold text-gray-200">{testimonialData.author}</p>
            <p className="text-md text-gray-400">{testimonialData.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
