
import React from 'react';
import type { ProcessStep } from '../types';

const ProcessStepCard: React.FC<{ step: ProcessStep, index: number }> = ({ step, index }) => (
  <div className="flex items-start space-x-6">
    <div className="flex-shrink-0 flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-green-600 border-2 border-green-800">
        {step.icon}
      </div>
      { index < 3 && <div className="mt-4 w-px h-24 bg-gray-600"></div> }
    </div>
    <div>
      <h3 className="text-xl font-bold text-white font-serif mb-2">{step.step}. {step.title}</h3>
      <p className="text-gray-400">{step.description}</p>
    </div>
  </div>
);

const Process: React.FC = () => {
    const processSteps: ProcessStep[] = [
    {
      step: '01',
      title: 'Consultation & Vision',
      description: 'We begin with an in-depth consultation to understand your aspirations, assess the site, and establish the project\'s vision and scope.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    },
    {
      step: '02',
      title: 'Design & Refinement',
      description: 'Our design team translates our shared vision into detailed plans, 3D renderings, and material selections, refining every detail with your feedback.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
    },
    {
      step: '03',
      title: 'Construction & Management',
      description: 'Our master craftsmen and project managers execute the plan with precision, ensuring timelines, budgets, and the highest standards of quality are met.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
    },
    {
      step: '04',
      title: 'Handover & Aftercare',
      description: 'We conclude with a thorough walkthrough and provide a comprehensive aftercare plan, ensuring you are equipped to enjoy your new space for years to come.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Our Signature Process</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">A transparent and collaborative journey, meticulously planned for a seamless experience and an exceptional outcome.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStepCard key={index} step={step} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
