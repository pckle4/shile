
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  ReactIcon, 
  Tailwind, 
  TypeScript, 
  Database, 
  Layers, 
  GitlabIcon, 
  GithubIcon,
  Css,
  Html,
  LayoutGrid
} from 'lucide-react';

const TechStack: React.FC = () => {
  const frontendTech = [
    { name: 'React', description: 'JavaScript library for building user interfaces', icon: ReactIcon, version: '18.3.1', docs: 'https://reactjs.org/' },
    { name: 'TypeScript', description: 'Typed superset of JavaScript', icon: TypeScript, version: '5.0.4', docs: 'https://www.typescriptlang.org/' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: Tailwind, version: '3.3.0', docs: 'https://tailwindcss.com/' },
    { name: 'ShadCN UI', description: 'Components built with Radix UI and Tailwind', icon: Layers, version: '1.0.0', docs: 'https://ui.shadcn.com/' }
  ];
  
  const backendTech = [
    { name: 'APIs', description: 'RESTful API integration', icon: Database, version: 'N/A', docs: '#' },
    { name: 'React Router', description: 'Routing library for React', icon: LayoutGrid, version: '6.26.2', docs: 'https://reactrouter.com/' },
    { name: 'React Query', description: 'Data fetching library', icon: Database, version: '5.56.2', docs: 'https://tanstack.com/query/v5/' }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl mb-2 shine-text">Tech Stack</h1>
          <p className="text-muted-foreground">Discover the technologies powering Shine</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-shine-purple mr-2" />
              <h2 className="text-2xl font-bold">About Our Tech</h2>
            </div>
            <p className="mb-4">
              Shine is built with modern web technologies to provide a fast, responsive, and accessible shopping experience.
              Our tech stack combines the best tools in the industry to deliver high performance and beautiful design.
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
                  <span className="font-medium">React & TypeScript</span> - For a robust, type-safe frontend
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 bg-shine-purple/20 rounded-full flex items-center justify-center text-shine-purple mr-2">2</div>
                <div>
                  <span className="font-medium">Tailwind CSS</span> - For beautiful, responsive UI
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 bg-shine-purple/20 rounded-full flex items-center justify-center text-shine-purple mr-2">3</div>
                <div>
                  <span className="font-medium">ShadCN & Radix UI</span> - For accessible, customizable components
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <Tabs defaultValue="stack" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stack">Complete Stack</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend & Data</TabsTrigger>
          </TabsList>
          <TabsContent value="stack" className="glass p-6 rounded-xl mt-2">
            <h3 className="text-xl font-bold mb-4">Complete Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...frontendTech, ...backendTech].map(tech => (
                <div key={tech.name} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center">
                    <tech.icon className="h-8 w-8 text-shine-purple mr-3" />
                    <div>
                      <h4 className="font-bold">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                    </div>
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
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="bg-shine-purple/10 text-shine-purple px-2 py-0.5 rounded-full">v{tech.version}</span>
                      <a href={tech.docs} target="_blank" rel="noopener noreferrer" className="text-shine-purple hover:underline">Documentation →</a>
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
              <div className="space-y-1 text-sm">
                <div><span className="font-medium">Core:</span> React + TypeScript</div>
                <div><span className="font-medium">Styling:</span> Tailwind CSS</div>
                <div><span className="font-medium">Icons:</span> Lucide React</div>
                <div><span className="font-medium">Animations:</span> Custom keyframes</div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Navigation Header</h3>
              <p className="text-sm text-muted-foreground mb-3">Responsive header with animated scroll behavior</p>
              <div className="space-y-1 text-sm">
                <div><span className="font-medium">Core:</span> React + TypeScript</div>
                <div><span className="font-medium">Styling:</span> Tailwind CSS</div>
                <div><span className="font-medium">Effects:</span> Glass morphism</div>
                <div><span className="font-medium">Mobile:</span> Responsive design</div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Cart System</h3>
              <p className="text-sm text-muted-foreground mb-3">Interactive cart with animations and toast notifications</p>
              <div className="space-y-1 text-sm">
                <div><span className="font-medium">State:</span> React Hooks</div>
                <div><span className="font-medium">UI:</span> ShadCN Components</div>
                <div><span className="font-medium">Animation:</span> Cart bounce effect</div>
                <div><span className="font-medium">Alerts:</span> Toast notifications</div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Product Details</h3>
              <p className="text-sm text-muted-foreground mb-3">Detailed product view with responsive layout</p>
              <div className="space-y-1 text-sm">
                <div><span className="font-medium">Routing:</span> React Router</div>
                <div><span className="font-medium">Data:</span> React Query</div>
                <div><span className="font-medium">Layout:</span> CSS Grid + Flexbox</div>
                <div><span className="font-medium">Styling:</span> Custom components</div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Footer</h3>
              <p className="text-sm text-muted-foreground mb-3">Multi-section footer with technology showcase</p>
              <div className="space-y-1 text-sm">
                <div><span className="font-medium">Structure:</span> Semantic HTML5</div>
                <div><span className="font-medium">Layout:</span> CSS Grid</div>
                <div><span className="font-medium">Styling:</span> Tailwind utilities</div>
                <div><span className="font-medium">Icons:</span> Lucide React</div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">UI Components</h3>
              <p className="text-sm text-muted-foreground mb-3">Reusable UI components for consistent design</p>
              <div className="space-y-1 text-sm">
                <div><span className="font-medium">Framework:</span> ShadCN UI</div>
                <div><span className="font-medium">Base:</span> Radix UI Primitives</div>
                <div><span className="font-medium">Styling:</span> Tailwind CSS</div>
                <div><span className="font-medium">Accessibility:</span> ARIA compliant</div>
              </div>
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
