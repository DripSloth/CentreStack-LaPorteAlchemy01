
import React from 'react';

const PortfolioItem: React.FC<{ imageUrl: string, title: string, category: string, span: string }> = ({ imageUrl, title, category, span }) => (
  <div className={`relative rounded-lg overflow-hidden group ${span}`}>
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end p-6">
      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-300">{category}</p>
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const projects = [
    { imageUrl: 'https://picsum.photos/seed/modernpool/800/600', title: 'Serene Courtyard', category: 'Design & Build', span: 'col-span-2 row-span-2' },
    { imageUrl: 'https://picsum.photos/seed/stonepath/600/800', title: 'Hillside Retreat', category: 'Construction', span: 'col-span-1 row-span-2' },
    { imageUrl: 'https://picsum.photos/seed/greenlawn/800/600', title: 'Coastal Garden', category: 'Horticulture', span: 'col-span-1 row-span-1' },
    { imageUrl: 'https://picsum.photos/seed/firepit/800/600', title: 'Entertainer\'s Deck', category: 'Design & Build', span: 'col-span-2 row-span-1' },
     { imageUrl: 'https://picsum.photos/seed/poolside/800/600', title: 'Luxe Poolside', category: 'Design & Build', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section id="our-work" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Our Work</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">A gallery of our recently completed projects, showcasing our passion for detail and quality.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4 h-[90vh]">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
