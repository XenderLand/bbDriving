import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    text: "Passed my test first time after just 8 lessons. Kofi was incredibly patient and made me feel so comfortable behind the wheel. I honestly could not have asked for a better instructor.",
    name: 'Priscilla Addoo', info: 'Passed August 2024 · Anaji, Takoradi',
    avatarBg: 'bg-orange-500', textColor: 'text-black', initials: 'PA',
  },
  {
    text: "I was terrified of driving and had less time for driving lessons. The Intensive package completely transformed my skills and confidence quickly. I now drive to Cape Coast regularly without a second thought.",
    name: 'Samuel Ennin', info: 'Completed November 2024 · Fijai, Takoradi',
    avatarBg: 'bg-emerald-500', textColor: 'text-black', initials: 'SE',
  },
  {
    text: "The flexible scheduling was a lifesaver. I work full-time and booked evening lessons. Abena was fantastic — structured, clear, and never made me feel rushed.",
    name: 'Rachel Asiedu', info: 'Passed January 2025 · Racecourse, Takoradi',
    avatarBg: 'bg-red-500', textColor: 'text-white', initials: 'RA',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="reviews"
      ref={ref}
      className="px-[5%] py-24"
      style={{ background: 'linear-gradient(135deg,#111009,#0f0f0e)' }}
    >
      <div className={inView ? 'animate-fadeUp' : 'opacity-0'}>
        <div className="section-label">What Students Say</div>
        <div className="section-title">REAL RESULTS,<br />REAL STORIES</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`bg-white/[0.025] border border-white/[0.07] rounded-2xl p-7 relative ${inView ? 'animate-fadeUp' : 'opacity-0'}`}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            {/* Big quote */}
            <div className="font-bebas text-[80px] text-gold/15 absolute top-2 left-5 leading-none select-none pointer-events-none">
              "
            </div>
            <p className="text-[15px] text-bodytext leading-[1.75] mb-5 font-light relative z-10">
              {t.text}
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-semibold ${t.avatarBg} ${t.textColor}`}>
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-sm text-offwhite">{t.name}</div>
                <div className="text-xs text-muted">{t.info}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
