
import React, { useEffect, useState } from 'react';
import type { Project } from '../types';

interface PortfolioModalProps {
  project: Project;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This triggers the animation after the component has mounted
    setIsMounted(true);
  }, []);

  if (!project) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div 
        className={`relative bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row transition-all duration-300 ${isMounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close project details"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div className="md:w-3/5 flex-shrink-0 bg-gray-800">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        </div>
        <div className="p-8 flex flex-col justify-center">
            <h2 id="project-title" className="text-3xl font-bold font-serif text-white mb-2">{project.title}</h2>
            <p className="text-green-500 font-semibold mb-4">{project.category}</p>
            <p className="text-gray-400">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
