import React, { useEffect, useRef } from 'react';
import car from "../assets/images/BB Driving Consult.jpg";

const stats = [
  { num: '12K+', label: 'Students Trained' },
  { num: '97%',  label: 'Pass Rate' },
  { num: '15',   label: 'Expert Instructors' },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const carRef = useRef(null);

  useEffect(() => {
    let frame, x = 0;
    const animate = () => {
      x = (x + 1.00) % 100;
      if (carRef.current) carRef.current.style.transform = `translateX(${x}px)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-[5%] lg:mt-5 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#fafaf8 60%,#1a1208 50%,#000000 100%)' }}
    >
      {/* Road dashes */}
      <div className="absolute bottom-20 left-0 right-0 flex gap-7 px-[5%] z-10">
        {[1,2,3,4].map(i => <div key={i} className="flex-1 h-px bg-orange-600 opacity-10 rounded" />)}
      </div>

      {/* Animated car */}
      <div ref={carRef} aria-hidden="true" className="absolute right-[-1%] bottom-10 text-[260px] opacity-[0.09] z-10 pointer-events-none select-none leading-none" style={{ filter: 'grayscale(30%)' }}>
              <img src={car} alt="" className='' />

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10" style={{ background: 'linear-gradient(to top,#0f0f0e,transparent)' }} />

      {/* Content */}
      <div className="relative z-20 max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-600/10 border border-orange-600/30 rounded-full px-4 py-1.5 text-xs text-orange-600 tracking-[1px] uppercase mb-6 animate-fadeIn">
          <span className="w-1.5 h-1.5 bg-orange-600 rounded-full inline-block" />
          Takoradi's #1 Driving School
        </div>

        <h1 className="font-bebas lg:text-[clamp(50px,9vw,90px)] text-[clamp(60px,9vw,100px)] leading-none tracking-widest text-blue-600 mb-5 animate-fadeUp">
          LEARN TO<br />
          DRIVE{' '}
          <span className="text-orange-600">WITH<br />CONFIDENCE</span>
        </h1>

        <p className="hidden lg:flex text-lg text-gray-700 leading-relaxed font-light max-w-md mb-10 animate-fadeUp animate-delay-200">
          Professional driving lessons for beginners to advanced drivers.
          Get road-ready in as little as 4 weeks with Ghana's most trusted school.
        </p>

        <div className="flex gap-4 flex-wrap animate-fadeUp animate-delay-300">
          <button className="btn-primary" onClick={() => scrollTo('booking')}>
            Book a Free Trial
          </button>
          <button className="btn-outline" onClick={() => scrollTo('courses')}>
            View Courses
          </button>
        </div>
      </div>

      {/* Stats — desktop only */}
      <div className="hidden lg:flex absolute right-[5%] top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
        {stats.map((s, i) => (
          <div
            key={s.num}
            className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-7 py-5 text-center backdrop-blur-sm animate-fadeUp"
            style={{ animationDelay: `${0.3 + i * 0.12}s` }}
          >
            <div className="font-bebas text-[42px] text-orange-600 leading-none">{s.num}</div>
            <div className="text-xs text-muted tracking-wide mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 animate-fadeIn animate-delay-500">
        <span className="text-[11px] text-muted tracking-[1.5px] uppercase">Scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom,#8a8680,transparent)' }} />
      </div>
    </section>
  );
}
