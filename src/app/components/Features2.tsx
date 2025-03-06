import React from 'react';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      id: "001",
      image: '/1.png',
      title: "Proprietary Multi-Agentic Workflow System",
      description: "A team of AI agents collaborating to achieve your goals."
    },
    {
      id: "002",
      image: '/7.png',
      title: "Persona-Based Reasoning",
      description: "Our groundbreaking persona-based reasoning technology minimizes hallucinations and delivers consistently accurate responses. (Coming Soon)"
    },
    {
      id: "003",
      image: '/3.png', // Added an image for consistency
      title: "Three-Layer Agent Memory",
      description: "Our agents continuously learn and adapt to become more proficient at handling your specific needs over time. (Coming Soon)"
    }
  ];

  return (
    <section className="text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl font-bold mb-4">One Platform, Infinite Possibilities</h1>
        <p className="text-gray-400 mb-12">
          Nagent AI bridges the gap between AI capabilities and real-world expertise, creating a new ecosystem of specialized intelligence.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="border border-purple-800 p-8 rounded-lg">
              <div className="rounded-full bg-gray-800 w-12 h-12 flex items-center justify-center mb-8">
                <span className="text-gray-400 text-sm">{feature.id}</span>
              </div>
              
              {/* Image Section */}
              <div className="h-64 mb-12 flex items-center justify-center">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  width={500} 
                  height={500} 
                  className="rounded-lg"
                />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
