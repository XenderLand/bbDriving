import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import Advanced from "../assets/images/486955063_1129915229154331_7858857922140479443_n.jpg";


const features = [
  { icon: '🎓', title: 'DVLA-Certified Instructors',     desc: 'All instructors are fully certified, background-checked, and trained in the latest road safety standards.' },
  { icon: '🚗', title: 'Modern Dual-Control Vehicles',   desc: "Learn in late-model cars with dual controls — you're always safe, even on your very first lesson." },
  { icon: '📅', title: 'Flexible Scheduling',            desc: 'Morning, afternoon, evenings, and weekends — book lessons around your life, not the other way round.' },
  { icon: '✅', title: '97% First-Time Pass Rate',       desc: 'Our structured curriculum and mock tests mean you walk into the exam ready and confident.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className=""
    >
      {/* DESKTOP */}
      <div   className="  hidden lg:flex 2xl:flex px-[5%] py-24 "
        style={{ background: 'linear-gradient(-130deg,#0f0f0e 60%,#fafaf8 40%)' }}
      >
     
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center ${inView ? 'animate-fadeUp' : 'opacity-0'}`}>

        {/* Visual */}
        <div className="relative">
          <div
            className="w-full h-[400px] rounded-2xl flex items-center justify-center text-[140px] border border-gold/10 overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg,#1a1208,#2a1f0a)' }}
          >
                    <img src={Advanced} alt="mages" className="relative object-fill"/>

            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%,rgba(212,168,71,0.06),transparent 70%)' }} />
          </div>
          {/* Accent */}
          <div className="absolute -bottom-6 -right-6 bg-orange-400 text-black rounded-xl px-6 py-5 font-bold">
            <div className="font-bebas text-4xl leading-none">10 YRS</div>
            <div className="text-[11px] font-semibold tracking-wide uppercase mt-1">On The Road</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="section-label">Why Choose Us</div>
          <div className="section-title">DRIVING DONE<br />DIFFERENTLY</div>
          <p className="section-sub mb-9">
            We believe every learner deserves a calm, encouraging, and professional experience.
            Our certified instructors adapt to your pace — no pressure, just progress.
            {/* <p>
            <div className="section-label mt-4">Business Target or Target market </div>

              
1.People who doesn’t know anything about driving 
2.People who have a drivers license but with little confidence,poor steering control,poor reserving parking and poor usage of the roundabout 
3.People preparing to write their DVLA written test exams or the computer exams
4.People who are going for driving test and road signs test at DVLA
5.People who have stop driving for a long time and want to enhance their driving skills
6.People who want to obtain a driver’s Licence fresh
7.people who want to upgrade their drivers license
            </p>
       */}
          </p>

          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex items-start gap-4 ${inView ? 'animate-fadeUp' : 'opacity-0'}`}
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-xl flex-shrink-0 bg-gold/[0.08] border border-gold/[0.18] flex items-center justify-center text-xl">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-offwhite mb-1">{f.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       </div>

      {/* MOBILE */}
          <div   className=" block lg:hidden 2xl:hidden px-[5%] py-24 "

      >
     
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center ${inView ? 'animate-fadeUp' : 'opacity-0'}`}>

        {/* Visual */}
        <div className="relative">
          <div
            className="w-full h-[400px] rounded-2xl flex items-center justify-center text-[140px] border border-gold/10 overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg,#1a1208,#2a1f0a)' }}
          >
                    <img src={Advanced} alt="mages" className="relative object-fill"/>

            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%,rgba(212,168,71,0.06),transparent 70%)' }} />
          </div>
          {/* Accent */}
          <div className="absolute -bottom-6 -right-6 bg-orange-400 text-black rounded-xl px-6 py-5 font-bold">
            <div className="font-bebas text-4xl leading-none">10 YRS</div>
            <div className="text-[11px] font-semibold tracking-wide uppercase mt-1">On The Road</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="section-label">Why Choose Us</div>
          <div className="section-title">DRIVING DONE<br />DIFFERENTLY</div>
          <p className="section-sub mb-9">
            We believe every learner deserves a calm, encouraging, and professional experience.
            Our certified instructors adapt to your pace — no pressure, just progress.
            {/* <p>
            <div className="section-label mt-4">Business Target or Target market </div>

              
1.People who doesn’t know anything about driving 
2.People who have a drivers license but with little confidence,poor steering control,poor reserving parking and poor usage of the roundabout 
3.People preparing to write their DVLA written test exams or the computer exams
4.People who are going for driving test and road signs test at DVLA
5.People who have stop driving for a long time and want to enhance their driving skills
6.People who want to obtain a driver’s Licence fresh
7.people who want to upgrade their drivers license
            </p>
       */}
          </p>

          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex items-start gap-4 ${inView ? 'animate-fadeUp' : 'opacity-0'}`}
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-xl flex-shrink-0 bg-gold/[0.08] border border-gold/[0.18] flex items-center justify-center text-xl">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-offwhite mb-1">{f.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       </div>
    </section>
  );
}
