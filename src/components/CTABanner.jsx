import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <div className="px-[5%] pb-20" ref={ref}>
      <div className={`bg-blue-600 rounded-2xl px-10 md:px-14 py-16 flex flex-col md:flex-row justify-between items-center gap-8 ${inView ? 'animate-fadeUp' : 'opacity-0'}`}>
        <div className="text-center md:text-left">
          <h2 className="font-bebas text-[clamp(36px,4vw,52px)] text-black tracking-wide leading-tight">
            READY TO HIT<br />THE ROAD?
          </h2>
          <p className="text-white/60 text-base mt-2 max-w-md">
            Book your free trial lesson today. No commitment, no pressure —
            just your first step to freedom behind the wheel.
          </p>
        </div>
        <button
          className="btn-dark whitespace-nowrap"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Free Trial →
        </button>
      </div>
    </div>
  );
}
