
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
          Ready to Create Your Legacy Garden?
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          We partner with a select number of clients each year to ensure our highest standards are met on every project. Reach out to begin the conversation about your property.
        </p>
        <a href="mailto:consult@laportealchemy.com" className="bg-green-700 text-white font-bold py-4 px-10 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-lg">
          Book a Consultation
        </a>
      </div>
    </section>
  );
};

export default Contact;
