'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Features() {
  const textBlockRefs = useRef<Record<string, HTMLDivElement>>({});
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      
      // Clear any existing ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Create a timeline for sequential animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
          // markers: true, // Uncomment for debugging
        }
      });
      
      // Sort the keys to ensure correct order
      const sortedKeys = Object.keys(textBlockRefs.current).sort((a, b) => parseInt(a) - parseInt(b));
      
      // Add each highlight to the timeline with staggered positions
      sortedKeys.forEach((key, i) => {
        const block = textBlockRefs.current[key];
        if (!block) return;
        
        const highlight = block.querySelector('.highlight');
        if (!highlight) return;
        
        // Position in the timeline based on index (0, 0.3, 0.6, etc)
        const position = i * 0.3;
        
        tl.fromTo(
          highlight,
          { translateX: "-100%" },
          { 
            translateX: "0%", 
            duration: 2,
            ease: "power1.inOut"
          },
          position // This ensures each animation starts at a specific position in the timeline
        );
      });
    }
    
    return () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);
  
  // Function to create text with highlights
  const createHighlightedText = (text: string, index: number) => {
    return (
      <div 
        className="relative overflow-hidden mb-4 inline-block"
        ref={el => {
          if (el) textBlockRefs.current[index] = el;
        }}
      >
        <span className="relative z-10 block text-5xl px-4 font-semibold py-2 text-white">{text}</span>
        <span className="highlight absolute top-0 left-0 w-full h-full bg-purple-600 z-0 rounded-md"></span>
      </div>
    );
  };
  
  return (
    <section ref={sectionRef} className="container mx-auto py-24 md:py-32 relative text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="w-full md:w-5/12">
          <Image 
            src="/element-1.png"
            alt="Voice AI Visualization"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
        
        <div className="w-full md:w-7/12">
          <div >
            {createHighlightedText("AI Agents That Make Your Work", 0)}
            {createHighlightedText("100x FASTER. EFFICIENT. SCALABLE", 1)}
            {createHighlightedText("Nagent Ai platform.", 2)}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .highlight {
          transform: translateX(-100%);
          will-change: transform;
        }
        
        @media (min-width: 768px) {
          .text-3xl {
            font-size: 2.5rem;
            font-weight: bold;
            line-height: 1.2;
          }
        }
      `}</style>
    </section>
  );
}