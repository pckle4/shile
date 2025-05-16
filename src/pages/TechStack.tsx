
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Atom as ReactIcon, 
  Palette as Tailwind, 
  FileCode as TypeScript, 
  Database, 
  Layers, 
  GitMerge as GitlabIcon, 
  Github as GithubIcon,
  FileCode as Css,
  FileJson as Html,
  LayoutGrid,
  Cloud,
  Server,
  Package,
  RefreshCcw,
  Search,
  ShoppingCart
} from 'lucide-react';
import TechInfo from '@/components/TechInfo';

const TechStack: React.FC = () => {
  const frontendTech = [
    { name: 'React', description: 'JavaScript library for building user interfaces', icon: ReactIcon, version: '18.3.1', docs: 'https://reactjs.org/', features: ['Component-Based', 'Virtual DOM', 'JSX Syntax', 'One-Way Data Flow'], benefits: 'Fast rendering and efficient updates' },
    { name: 'TypeScript', description: 'Typed superset of JavaScript', icon: TypeScript, version: '5.0.4', docs: 'https://www.typescriptlang.org/', features: ['Static Typing', 'Type Inference', 'Interface Definition', 'Generics'], benefits: 'Catch errors earlier and improve code quality' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: Tailwind, version: '3.3.0', docs: 'https://tailwindcss.com/', features: ['Utility Classes', 'JIT Compiler', 'Responsive Design', 'Dark Mode'], benefits: 'Rapid UI development without leaving HTML' },
    { name: 'ShadCN UI', description: 'Components built with Radix UI and Tailwind', icon: Layers, version: '1.0.0', docs: 'https://ui.shadcn.com/', features: ['Accessible Components', 'Customizable', 'Themeable', 'No Runtime'], benefits: 'Beautiful, accessible components with minimal overhead' }
  ];
  
  const backendTech = [
    { name: 'APIs', description: 'RESTful API integration', icon: Cloud, version: 'N/A', docs: '#', features: ['REST Architecture', 'JSON Formatting', 'Stateless Communication', 'Cache Control'], benefits: 'Seamless data exchange between services' },
    { name: 'React Router', description: 'Routing library for React', icon: LayoutGrid, version: '6.26.2', docs: 'https://reactrouter.com/', features: ['Declarative Routing', 'Nested Routes', 'Route Parameters', 'Route Guards'], benefits: 'Modern client-side navigation with history management' },
    { name: 'React Query', description: 'Data fetching library', icon: Database, version: '5.56.2', docs: 'https://tanstack.com/query/v5/', features: ['Automatic Caching', 'Background Refetching', 'Pagination Support', 'Mutation APIs'], benefits: 'Simplified server state management with powerful features' },
    { name: 'Performance Optimization', description: 'Techniques for faster loading and rendering', icon: RefreshCcw, version: 'N/A', docs: '#', features: ['Code Splitting', 'Lazy Loading', 'Memoization', 'Image Optimization'], benefits: 'Improved user experience with faster page loads' }
  ];

  const architectureTech = [
    { name: 'Component Architecture', description: 'Structured component organization', icon: Package, version: 'N/A', docs: '#', features: ['Atomic Design', 'Compound Components', 'Render Props', 'Custom Hooks'], benefits: 'Maintainable and reusable UI building blocks' },
    { name: 'State Management', description: 'Global and local state patterns', icon: Server, version: 'N/A', docs: '#', features: ['Context API', 'Custom Hooks', 'Immutable Updates', 'Selectors'], benefits: 'Predictable state changes and improved debugging' },
    { name: 'Responsive Design', description: 'Multi-device compatibility approach', icon: LayoutGrid, version: 'N/A', docs: '#', features: ['Mobile-First', 'Fluid Typography', 'Container Queries', 'Viewport Units'], benefits: 'Consistent experience across all device sizes' }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl mb-2 shine-text">Tech Stack</h1>
          <p className="text-muted-foreground">Discover the technologies powering Shile</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-shine-purple mr-2" />
              <h2 className="text-2xl font-bold">About Our Tech</h2>
            </div>
            <p className="mb-4">
              Shile is built with modern web technologies to provide a fast, responsive, and accessible shopping experience.
              Our tech stack combines the best tools in the industry to deliver high performance and beautiful design.
            </p>
            <p className="mb-4">
              We've chosen React and TypeScript as our foundation for their robustness and type safety. Tailwind CSS powers our 
              responsive design system, while ShadCN UI provides accessible and beautiful components. Data fetching is handled 
              efficiently by React Query with optimized caching strategies.
            </p>
            <p>
              This page provides real-time information about the technologies we use, their versions, and how they work together
              to create the seamless experience you enjoy while shopping.
            </p>
          </div>
          
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center mb-6">
              <GitlabIcon className="h-6 w-6 text-shine-accent mr-2" />
              <h2 className="text-2xl font-bold">Stack Highlights</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 bg-shine-purple/20 rounded-full flex items-center justify-center text-shine-purple mr-2">1</div>
                <div>
                  <span className="font-medium">React & TypeScript</span> - For a robust, type-safe frontend with component-based architecture enabling rapid development and maintenance
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 bg-shine-purple/20 rounded-full flex items-center justify-center text-shine-purple mr-2">2</div>
                <div>
                  <span className="font-medium">Tailwind CSS</span> - For beautiful, responsive UI with utility-first approach that scales with your application without performance penalties
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 bg-shine-purple/20 rounded-full flex items-center justify-center text-shine-purple mr-2">3</div>
                <div>
                  <span className="font-medium">ShadCN & Radix UI</span> - For accessible, customizable components with headless architecture providing maximum flexibility
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 bg-shine-purple/20 rounded-full flex items-center justify-center text-shine-purple mr-2">4</div>
                <div>
                  <span className="font-medium">React Query</span> - For efficient data fetching with advanced caching, background updates, and real-time synchronization capabilities
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 bg-shine-purple/20 rounded-full flex items-center justify-center text-shine-purple mr-2">5</div>
                <div>
                  <span className="font-medium">Performance Optimizations</span> - Code-splitting, lazy loading, and memoization techniques for fast page loads and rendering
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <Tabs defaultValue="stack" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="stack">Complete Stack</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend & Data</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
          </TabsList>
          <TabsContent value="stack" className="glass p-6 rounded-xl mt-2">
            <h3 className="text-xl font-bold mb-4">Complete Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...frontendTech, ...backendTech, ...architectureTech].map(tech => (
                <div key={tech.name} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center">
                    <tech.icon className="h-8 w-8 text-shine-purple mr-3" />
                    <div>
                      <h4 className="font-bold">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs">
                    <span className="font-medium">Key Features: </span>
                    {tech.features.join(', ')}
                  </div>
                  <div className="mt-1 text-xs">
                    <span className="font-medium">Benefits: </span>
                    {tech.benefits}
                  </div>
                  <div className="mt-3 flex justify-between items-center text-xs">
                    <span className="bg-shine-purple/10 text-shine-purple px-2 py-0.5 rounded-full">v{tech.version}</span>
                    <a href={tech.docs} target="_blank" rel="noopener noreferrer" className="text-shine-purple hover:underline">Documentation</a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="frontend" className="glass p-6 rounded-xl mt-2">
            <h3 className="text-xl font-bold mb-4">Frontend Technologies</h3>
            <div className="space-y-6">
              {frontendTech.map(tech => (
                <div key={tech.name} className="flex items-start">
                  <tech.icon className="h-10 w-10 text-shine-purple mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">{tech.name}</h4>
                    <p className="mb-2">{tech.description}</p>
                    <div className="mb-2">
                      <span className="font-medium">Key Features:</span>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        {tech.features.map((feature, index) => (
                          <li key={index} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3">
                      <span className="font-medium">Benefits:</span>
                      <p className="text-sm mt-1">{tech.benefits}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="bg-shine-purple/10 text-shine-purple px-2 py-0.5 rounded-full">v{tech.version}</span>
                      <a href={tech.docs} target="_blank" rel="noopener noreferrer" className="text-shine-purple hover:underline">Documentation →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="backend" className="glass p-6 rounded-xl mt-2">
            <h3 className="text-xl font-bold mb-4">Backend & Data Management</h3>
            <div className="space-y-6">
              {backendTech.map(tech => (
                <div key={tech.name} className="flex items-start">
                  <tech.icon className="h-10 w-10 text-shine-purple mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">{tech.name}</h4>
                    <p className="mb-2">{tech.description}</p>
                    <div className="mb-2">
                      <span className="font-medium">Key Features:</span>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        {tech.features.map((feature, index) => (
                          <li key={index} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3">
                      <span className="font-medium">Benefits:</span>
                      <p className="text-sm mt-1">{tech.benefits}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="bg-shine-purple/10 text-shine-purple px-2 py-0.5 rounded-full">v{tech.version}</span>
                      <a href={tech.docs} target="_blank" rel="noopener noreferrer" className="text-shine-purple hover:underline">Documentation →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="architecture" className="glass p-6 rounded-xl mt-2">
            <h3 className="text-xl font-bold mb-4">Architecture & Design Patterns</h3>
            <div className="space-y-6">
              {architectureTech.map(tech => (
                <div key={tech.name} className="flex items-start">
                  <tech.icon className="h-10 w-10 text-shine-purple mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">{tech.name}</h4>
                    <p className="mb-2">{tech.description}</p>
                    <div className="mb-2">
                      <span className="font-medium">Key Features:</span>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        {tech.features.map((feature, index) => (
                          <li key={index} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3">
                      <span className="font-medium">Benefits:</span>
                      <p className="text-sm mt-1">{tech.benefits}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="glass p-6 rounded-xl mb-12">
          <div className="flex items-center mb-6">
            <Html className="h-6 w-6 text-shine-accent mr-2" />
            <h2 className="text-2xl font-bold">Component Technology Showcase</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Product Cards</h3>
              <p className="text-sm text-muted-foreground mb-3">Visually appealing cards that display product information</p>
              <div className="space-y-1 text-sm mb-3">
                <div><span className="font-medium">Core:</span> React + TypeScript</div>
                <div><span className="font-medium">Styling:</span> Tailwind CSS</div>
                <div><span className="font-medium">Icons:</span> Lucide React</div>
                <div><span className="font-medium">Animations:</span> Custom keyframes</div>
              </div>
              <TechInfo componentName="Product Card" />
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Navigation Header</h3>
              <p className="text-sm text-muted-foreground mb-3">Responsive header with animated scroll behavior</p>
              <div className="space-y-1 text-sm mb-3">
                <div><span className="font-medium">Core:</span> React + TypeScript</div>
                <div><span className="font-medium">Styling:</span> Tailwind CSS</div>
                <div><span className="font-medium">Effects:</span> Glass morphism</div>
                <div><span className="font-medium">Mobile:</span> Responsive design</div>
              </div>
              <TechInfo componentName="Header" />
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Cart System</h3>
              <p className="text-sm text-muted-foreground mb-3">Interactive cart with animations and toast notifications</p>
              <div className="space-y-1 text-sm mb-3">
                <div><span className="font-medium">State:</span> React Hooks</div>
                <div><span className="font-medium">UI:</span> ShadCN Components</div>
                <div><span className="font-medium">Animation:</span> Cart bounce effect</div>
                <div><span className="font-medium">Alerts:</span> Toast notifications</div>
              </div>
              <TechInfo componentName="Cart System" />
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Product Details</h3>
              <p className="text-sm text-muted-foreground mb-3">Detailed product view with responsive layout</p>
              <div className="space-y-1 text-sm mb-3">
                <div><span className="font-medium">Routing:</span> React Router</div>
                <div><span className="font-medium">Data:</span> React Query</div>
                <div><span className="font-medium">Layout:</span> CSS Grid + Flexbox</div>
                <div><span className="font-medium">Styling:</span> Custom components</div>
              </div>
              <TechInfo componentName="Product Image" />
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Footer</h3>
              <p className="text-sm text-muted-foreground mb-3">Multi-section footer with technology showcase</p>
              <div className="space-y-1 text-sm mb-3">
                <div><span className="font-medium">Structure:</span> Semantic HTML5</div>
                <div><span className="font-medium">Layout:</span> CSS Grid</div>
                <div><span className="font-medium">Styling:</span> Tailwind utilities</div>
                <div><span className="font-medium">Icons:</span> Lucide React</div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Search System</h3>
              <p className="text-sm text-muted-foreground mb-3">Fast and responsive product search functionality</p>
              <div className="space-y-1 text-sm mb-3">
                <div><span className="font-medium">Core:</span> React + TypeScript</div>
                <div><span className="font-medium">Search:</span> Client-side fuzzy search</div>
                <div><span className="font-medium">UX:</span> Auto-suggestions</div>
                <div><span className="font-medium">Performance:</span> Debounced input</div>
              </div>
              <TechInfo componentName="Product Search" />
            </div>
          </div>
        </div>
        
        <div className="glass p-6 rounded-xl mb-12">
          <div className="flex items-center mb-6">
            <Package className="h-6 w-6 text-shine-accent mr-2" />
            <h2 className="text-2xl font-bold">Development Workflow</h2>
          </div>
          <p className="mb-4">
            Our development process follows modern best practices with continuous integration and deployment.
            Here's a summary of our workflow and the tools we use:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Development Environment</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vite for lightning-fast development server and builds</li>
                <li>ESLint and Prettier for code quality and formatting</li>
                <li>TypeScript for static type checking</li>
                <li>Git for version control with conventional commits</li>
              </ul>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Testing Strategy</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Jest for unit testing with React Testing Library</li>
                <li>Cypress for end-to-end testing</li>
                <li>Storybook for component development and visual testing</li>
                <li>Lighthouse for performance and accessibility audits</li>
              </ul>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Deployment Pipeline</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>GitHub Actions for CI/CD automation</li>
                <li>Automated testing and linting on pull requests</li>
                <li>Preview deployments for each feature branch</li>
                <li>Production deployment with rollback capability</li>
              </ul>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Performance Monitoring</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Real User Monitoring (RUM) for performance metrics</li>
                <li>Error tracking and reporting</li>
                <li>Analytics for user behavior analysis</li>
                <li>Continuous performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Real-time Technology Updates</h2>
          <p className="text-muted-foreground mb-6">This page automatically updates when technologies are added or upgraded</p>
          <div className="inline-block shine-button animate-shine px-8 py-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <GithubIcon className="h-5 w-5 mr-2" />
              View Source Code
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TechStack;
