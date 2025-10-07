
import React from 'react';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-green-800/20 transition-shadow duration-300 flex flex-col items-start">
    <div className="text-green-600 mb-4">{service.icon}</div>
    <h3 className="text-2xl font-bold font-serif mb-3 text-white">{service.title}</h3>
    <p className="text-gray-400 flex-grow">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  const servicesData: Service[] = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      title: 'Bespoke Landscape Design',
      description: 'Our design process begins with you. We create a comprehensive, tailored plan that reflects your vision, lifestyle, and the unique character of your property.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: 'Masterful Construction',
      description: 'With an uncompromising commitment to quality, our craftsmen bring your design to life using premium materials and proven techniques for a lasting result.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>,
      title: 'Horticultural Care',
      description: 'Our specialized garden maintenance programs ensure your landscape investment matures beautifully, protecting its health, vitality, and aesthetic integrity.'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Our Expertise</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">We offer a fully integrated service to ensure a seamless journey from initial concept to final creation and beyond.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
