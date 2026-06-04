import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const instructors = [
  { initials: 'KA', name: 'Kofi Asante',   role: 'Lead Instructor',            exp: '10 years · 800+ students', avatarBg: 'bg-gold',        textColor: 'text-black' },
  { initials: 'AM', name: 'Abena Mensah',  role: 'Senior Instructor',           exp: '9 years · 500+ students',  avatarBg: 'bg-red-500',     textColor: 'text-white' },
  { initials: 'KO', name: 'Kwame Ofori',   role: 'Advanced Driving Specialist', exp: '7 years · 600+ students',  avatarBg: 'bg-emerald-500', textColor: 'text-black' },
  { initials: 'EA', name: 'Esi Agyemang',  role: 'Senior Instructor',      exp: '6 years · 400+ students',    avatarBg: 'bg-indigo-400',  textColor: 'text-black' },
];

export default function Instructors() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="instructors" className="px-[5%] py-24" ref={ref}>
      <div className={`text-center mb-14 ${inView ? 'animate-fadeUp' : 'opacity-0'}`}>
        <div className="section-label">Meet the Team</div>
        <div className="section-title">YOUR EXPERT<br />INSTRUCTORS</div>
        <p className="section-sub mx-auto text-center">
          Experienced, patient, and passionate about road safety — our instructors
          have trained thousands of confident drivers across Ghana.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((inst, i) => (
          <InstructorCard key={inst.name} instructor={inst} delay={i * 0.1} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function InstructorCard({ instructor: inst, delay, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`card-base p-8 text-center transition-all duration-300 cursor-default
        ${hovered ? '-translate-y-1 border-gold/20' : ''}
        ${inView ? 'animate-fadeUp' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center font-bebas text-3xl tracking-wide ${inst.avatarBg} ${inst.textColor}`}>
        {inst.initials}
      </div>
      <div className="font-semibold text-base text-offwhite mb-1">{inst.name}</div>
      <div className="text-sm text-orange-500 mb-2.5">{inst.role}</div>
      <div className="text-orange-500 text-sm mb-2">★★★★★</div>
      <div className="text-xs text-muted">{inst.exp}</div>
    </div>
  );
}
