
import React, { useState, useEffect } from 'react';
import type { Project } from '../types';
import PortfolioModal from './PortfolioModal';

const PortfolioItem: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div className={`relative rounded-lg overflow-hidden group ${project.span} cursor-pointer`} onClick={onClick}>
    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end p-6">
      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 text-white">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.category}</p>
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects: Project[] = [
    { id: 1, imageUrl: 'https://picsum.photos/seed/modernpool/1200/900', title: 'Serene Courtyard', category: 'Design & Build', span: 'col-span-2 row-span-2', description: 'A complete transformation of a neglected backyard into a serene and functional courtyard. Features a custom-built pergola, stone patio, and a water feature that provides a tranquil ambiance.' },
    { id: 2, imageUrl: 'https://picsum.photos/seed/stonepath/900/1200', title: 'Hillside Retreat', category: 'Construction', span: 'col-span-1 row-span-2', description: 'This project involved complex terracing and stonework to create a multi-level garden on a steep hillside. The result is a stunning retreat with breathtaking views and intimate seating areas.' },
    { id: 3, imageUrl: 'https://picsum.photos/seed/greenlawn/800/600', title: 'Coastal Garden', category: 'Horticulture', span: 'col-span-1 row-span-1', description: 'A selection of salt-tolerant and native plants were used to create a vibrant, low-maintenance coastal garden that thrives in its environment and attracts local wildlife.' },
    { id: 4, imageUrl: 'https://picsum.photos/seed/firepit/1200/600', title: 'Entertainer\'s Deck', category: 'Design & Build', span: 'col-span-2 row-span-1', description: 'A spacious Ipe wood deck complete with an outdoor kitchen, built-in seating, and a modern fire pit, designed for seamless indoor-outdoor entertaining.' },
     { id: 5, imageUrl: 'https://picsum.photos/seed/poolside/800/600', title: 'Luxe Poolside', category: 'Design & Build', span: 'col-span-1 row-span-1', description: 'An elegant poolside lounge area featuring travertine paving, lush tropical plantings, and custom lighting to create a resort-like atmosphere day and night.' },
  ];

  return (
    <section id="our-work" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Our Work</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">A gallery of our recently completed projects, showcasing our passion for detail and quality.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4 h-[90vh]">
          {projects.map((project) => (
            <PortfolioItem key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
      {selectedProject && (
        <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Portfolio;
