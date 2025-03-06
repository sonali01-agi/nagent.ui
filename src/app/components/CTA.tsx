"use client";

import React, { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

// Number Ticker Component
function NumberTicker({ 
    value, 
    direction = "up", 
    delay = 0, 
    className, 
    decimalPlaces = 0,
    ...props
  }: {
    value: number;
    direction?: "up" | "down";
    delay?: number;
    className?: string;
    decimalPlaces?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "0px" });
  
    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          motionValue.set(direction === "down" ? 0 : value);
        }, delay * 1000);
        return () => clearTimeout(timer);
      }
    }, [motionValue, isInView, delay, value, direction]);
  
    useEffect(
      () => springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
      [springValue, decimalPlaces]
    );
  
    return (
      <span
        ref={ref}
        className={cn(
          "inline-block tabular-nums tracking-wider text-white",
          className
        )}
        {...props}
      />
    );
  }

export default function CTA() {
  return (
    <section className="border-t-2 border-b-2 text-white">
      <div className="flex justify-between items-center px-20 py-40 relative">
        <div className="flex flex-col items-start">
          <span className="text-xl font-mono mb-10">Agents</span>
          <NumberTicker 
            value={3000} 
            className="text-9xl font-light" 
          />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xl font-mono mb-10">Executions</span>
          <div className="text-9xl font-light">
            <NumberTicker 
              value={100}
              className="text-9xl font-light" 
            />
            K+
          </div>
        </div>
      </div>

      {/* Background pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: "linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none"
        }}
      />
    </section>
  )
}

