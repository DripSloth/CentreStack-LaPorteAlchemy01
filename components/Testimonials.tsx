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
          <svg className="w-16 h-16 mx-auto mb-6 text-green-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6,17H9.31L7.43,12.21C7.2,11.5 7.05,10.89 7,10.36C7,10.31 7,10.26 7,10.21C7,10.08 7.03,9.96 7.08,9.85C7.26,9.5 7.5,9.2 7.76,9.07C8.2,8.86 8.58,8.75 9.04,8.75C9.5,8.75 9.96,8.86 10.4,9.07L11.5,8.21C10.8,7.76 10.05,7.5 9.25,7.5C8.06,7.5 7.04,7.86 6.18,8.58C5.32,9.3 4.75,10.18 4.75,11.25C4.75,12.55 5.2,14.11 6.1,15.93L8.09,19.3L6,19.3V17M14,17H17.31L15.43,12.21C15.2,11.5 15.05,10.89 15,10.36C15,10.31 15,10.26 15,10.21C15,10.08 15.03,9.96 15.08,9.85C15.26,9.5 15.5,9.2 15.76,9.07C16.2,8.86 16.58,8.75 17.04,8.75C17.5,8.75 17.96,8.86 18.4,9.07L19.5,8.21C18.8,7.76 18.05,7.5 17.25,7.5C16.06,7.5 15.04,7.86 14.18,8.58C13.32,9.3 12.75,10.18 12.75,11.25C12.75,12.55 13.2,14.11 14.1,15.93L16.09,19.3L14,19.3V17Z" />
          </svg>
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