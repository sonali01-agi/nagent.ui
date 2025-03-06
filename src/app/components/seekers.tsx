import React from 'react';

const Seeker: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">For Seekers</h2>
            <p className="text-xl text-white mb-8">Unlock the power of specialized AI to solve your unique challenges. Access a marketplace of 81+ AI agents built by experts who understand your industry.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-6 w-6 text-indigo-800">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path d="M17 19h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Specialized Solutions</h3>
                  <p className="text-white">Find AI agents tailored to your specific industry needs and challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit h-6 w-6 text-indigo-800">
                    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"></path>
                    <path d="M16 8V5c0-1.1.9-2 2-2"></path>
                    <path d="M12 13h4"></path>
                    <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                    <path d="M12 8h8"></path>
                    <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                    <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                    <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                    <path d="M18.5 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Expert-Built Agents</h3>
                  <p className="text-white">Access AI agents created by industry professionals who understand your needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-6 w-6 text-indigo-800">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Instant Solutions</h3>
                  <p className="text-white">Get immediate results with AI agents ready to tackle your challenges right away.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <button className="py-4 px-8 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                Browse All Agents
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating on AI solutions" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seeker;