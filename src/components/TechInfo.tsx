
import React from 'react';

interface TechInfoProps {
  componentName: string;
}

const TechInfo: React.FC<TechInfoProps> = ({ componentName }) => {
  let techInfo = {
    technologies: ['React', 'TypeScript'],
    libraries: ['Tailwind CSS', 'Lucide-React'],
    description: 'This component is built using React and styled with Tailwind CSS.'
  };
  
  // Customize tech info based on the component
  switch (componentName) {
    case 'Product Image':
      techInfo = {
        technologies: ['React', 'TypeScript'],
        libraries: ['Tailwind CSS'],
        description: 'The product image component uses responsive design principles and optimized image rendering.'
      };
      break;
    case 'Header':
      techInfo = {
        technologies: ['React', 'TypeScript'],
        libraries: ['Tailwind CSS', 'Lucide-React', 'React-Router'],
        description: 'The header uses sticky positioning, responsive design, and a glass morphism effect on scroll.'
      };
      break;
    case 'Product Card':
      techInfo = {
        technologies: ['React', 'TypeScript'],
        libraries: ['Tailwind CSS', 'Lucide-React', 'Framer Motion'],
        description: 'Product cards use hover animations, badge components, and optimized rendering.'
      };
      break;
    default:
      break;
  }
  
  return (
    <div className="mt-4 p-3 bg-shine-purple/5 border border-shine-purple/20 rounded-lg text-xs">
      <div className="font-medium mb-1 text-shine-purple">{componentName} Tech Info:</div>
      <div className="mb-1">
        <span className="font-medium">Technologies:</span> {techInfo.technologies.join(', ')}
      </div>
      <div className="mb-1">
        <span className="font-medium">Libraries:</span> {techInfo.libraries.join(', ')}
      </div>
      <p className="text-muted-foreground">{techInfo.description}</p>
    </div>
  );
};

export default TechInfo;
