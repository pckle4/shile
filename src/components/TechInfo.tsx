
import React from 'react';

interface TechInfoProps {
  componentName: string;
}

const TechInfo: React.FC<TechInfoProps> = ({ componentName }) => {
  let techInfo = {
    technologies: ['React', 'TypeScript'],
    libraries: ['Tailwind CSS', 'Lucide-React'],
    description: 'This component is built using React and styled with Tailwind CSS.',
    implementation: 'Responsive component with dynamic rendering',
    bestPractices: ['Component isolation', 'TypeScript typing', 'Responsive design'],
    performance: 'Optimized for fast rendering and minimal re-renders',
    accessibility: 'Follows WCAG standards for maximum accessibility',
    version: 'v1.2.0',
    lastUpdated: '2025-05-10'
  };
  
  // Customize tech info based on the component
  switch (componentName) {
    case 'Product Image':
      techInfo = {
        technologies: ['React', 'TypeScript'],
        libraries: ['Tailwind CSS', 'React Suspense'],
        description: 'The product image component uses responsive design principles and optimized image rendering.',
        implementation: 'Progressive image loading with lazy loading and blur placeholders',
        bestPractices: ['Image optimization', 'Responsive sizing', 'Fallback images'],
        performance: 'Optimized with WebP format and srcset attributes for different viewport sizes',
        accessibility: 'Alt texts and ARIA attributes for screen readers',
        version: 'v1.3.2',
        lastUpdated: '2025-05-12'
      };
      break;
    case 'Header':
      techInfo = {
        technologies: ['React', 'TypeScript'],
        libraries: ['Tailwind CSS', 'Lucide-React', 'React-Router'],
        description: 'The header uses sticky positioning, responsive design, and a glass morphism effect on scroll.',
        implementation: 'Intersection Observer API for scroll effects with state management',
        bestPractices: ['Performance optimization', 'Mobile-first approach', 'Accessibility'],
        performance: 'Optimized for minimal repaints during scroll events',
        accessibility: 'Keyboard navigation and screen reader friendly',
        version: 'v2.0.1',
        lastUpdated: '2025-05-14'
      };
      break;
    case 'Product Card':
      techInfo = {
        technologies: ['React', 'TypeScript'],
        libraries: ['Tailwind CSS', 'Lucide-React', 'Framer Motion'],
        description: 'Product cards use hover animations, badge components, and optimized rendering.',
        implementation: 'Virtualized list rendering for large collections with intersection observer',
        bestPractices: ['Memoization', 'Lazy loading', 'Skeleton loading states'],
        performance: 'Optimized with React.memo and dynamic imports',
        accessibility: 'Fully navigable by keyboard with focus management',
        version: 'v1.5.0',
        lastUpdated: '2025-05-11'
      };
      break;
    case 'Cart System':
      techInfo = {
        technologies: ['React', 'TypeScript', 'Redux'],
        libraries: ['Tailwind CSS', 'ShadCN UI', 'React Query'],
        description: 'The cart system manages product selection, quantity adjustments, and checkout flow.',
        implementation: 'Global state management with persistent storage and sync',
        bestPractices: ['Atomic updates', 'Optimistic UI', 'Error handling'],
        performance: 'Debounced quantity updates and memoized cart calculations',
        accessibility: 'Screen reader announcements for cart changes',
        version: 'v2.1.0',
        lastUpdated: '2025-05-13'
      };
      break;
    case 'Product Search':
      techInfo = {
        technologies: ['React', 'TypeScript', 'Algolia'],
        libraries: ['Tailwind CSS', 'React Query', 'Fuse.js'],
        description: 'The search system provides fast, typo-tolerant product search capabilities.',
        implementation: 'Client-side fuzzy search with server-side fallback',
        bestPractices: ['Debouncing', 'Search history', 'Result highlighting'],
        performance: 'Optimized with index prefetching and result caching',
        accessibility: 'Live region updates for screen readers',
        version: 'v1.7.3',
        lastUpdated: '2025-05-09'
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
      <div className="mb-1">
        <span className="font-medium">Implementation:</span> {techInfo.implementation}
      </div>
      <div className="mb-1">
        <span className="font-medium">Best Practices:</span> {techInfo.bestPractices.join(', ')}
      </div>
      <div className="mb-1">
        <span className="font-medium">Performance:</span> {techInfo.performance}
      </div>
      <div className="mb-1">
        <span className="font-medium">Accessibility:</span> {techInfo.accessibility}
      </div>
      <div className="mb-1">
        <span className="font-medium">Version:</span> {techInfo.version} <span className="text-gray-400 text-xs">(Updated: {techInfo.lastUpdated})</span>
      </div>
      <p className="text-muted-foreground">{techInfo.description}</p>
    </div>
  );
};

export default TechInfo;
