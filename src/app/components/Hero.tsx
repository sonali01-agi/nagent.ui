"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";

const COMPANIES = [
  "Facebook", "Disney", "Airbnb", "Apple", "Spark", "Samsung", "Quora", "Sass",
];

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          Next-Gen Ai Agents
          <br />
          <span className="text-gray-400 inline-flex items-center">
            for your 
            <WordRotate 
              words={["teams", "work", "life"]} 
              className="text-gray-400 ml-2"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              duration={2000}
            />
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          Grow 100x with Ai Agents . Discover, access, and employ AI agents built by experts to solve your specific challenges.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <Button className="relative group px-8 py-6 text-lg bg-purple-700 hover:opacity-90 rounded-full">
            <span className="relative text-white z-10">Explore Agent MarketPlace</span>
            <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-full" />
          </Button>
          <Button variant="outline" className="relative group px-8 py-6 text-lg from-accent to-primary hover:opacity-90 rounded-full">
            <span className="relative z-10">Build Agents</span>
            <div className="absolute inset-0 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-full" />
          </Button>
        </div>
      </div>

      {/* Scrolling Companies */}
      <div className="w-full mt-24 overflow-hidden">
      <h1 className="text-white text-lg mb-12 font-bold text-center">
          Trusted By
        </h1>
        <div className="relative">
        
          <div className={`flex items-center gap-16 ${animate ? "animate-marquee" : ""}`}>
            {COMPANIES.map((company) => (
              <span key={company} className="text-2xl font-semibold text-gray-400 whitespace-nowrap">
                {company}
              </span>
            ))}
          </div>
          <div className={`flex items-center gap-16 absolute top-0 ${animate ? "animate-marquee2" : ""}`}>
            {COMPANIES.map((company) => (
              <span key={`${company}-duplicate`} className="text-2xl font-semibold text-gray-400 whitespace-nowrap">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
