import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import beginner from "../assets/images/shutterstock-2096241784_4d1b.jpg";
import Advanced from "../assets/images/ADepositphotos_404398356_L.jpg";
import Private from "../assets/images/360_F_1388462542_sLKfhAAzvDevA7iyo0cSz8H96g5bxdVI.jpg";
import Online from "../assets/images/Distockphoto-184398330-612x612.jpg";


const courses = [
  {
    icon: beginner, bg: 'linear-gradient(135deg,#1a1208,#2a1e08)',
    tag: 'Beginner', tagClass: 'bg-orange-600/15 text-orange-600',
    name: 'Regular Package',
    desc: 'Perfect for first-time drivers. Learn vehicle control, road signs, and basic manoeuvres in a relaxed, pressure-free environment.',
    price: 'GH₵ 2,700', duration: '10 lessons · 5 weeks',
  },
  {
    icon: Advanced, bg: 'linear-gradient(135deg,#1a0808,#2a1010)',
    tag: 'Advanced', tagClass: 'bg-red-900/30 text-red-400',
    name: 'Intensive Package',
    desc: 'Master defensive driving, emergency manoeuvres, and precision vehicle control. Ideal for drivers wanting to sharpen their expertise.',
    price: 'GH₵ 3,500', duration: '8 lessons · 4 weeks',
  },
  {
    icon: Private, bg: 'linear-gradient(135deg,#081a0a,#0a2a10)',
    tag: 'Private', tagClass: 'bg-emerald-900/30 text-emerald-400',
    name: 'Private Package',
    desc: 'Enjoy our private lesson with our best teachers at your preferred day, time and location',
    price: 'GH₵ 4,000', duration: '6 lessons · 3 weeks',
  },
  {
    icon: Online, bg: 'linear-gradient(135deg,#0a0a1a,#10102a)',
    tag: 'Online ', tagClass: 'bg-indigo-900/30 text-indigo-400',
    name: 'Online Package',
    desc: 'Start learning at the comfort of your own home via smartphone or computer.',
    price: 'GH₵ 2,000', duration: '4 lessons · 2 weeks',
  },


];

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="courses" className="px-[5%] py-24" 
    ref={ref}>
      <div className={inView ? 'animate-fadeUp' : 'opacity-0'}>
        <div className="section-label">What We Offer</div>
        <div className="section-title">OUR DRIVING<br />COURSES</div> 
        <p className="section-sub">From your very first lesson to advanced defensive driving — we have a programme tailored precisely for you.</p>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-14 ${inView ? 'animate-fadeUp animate-delay-200' : 'opacity-0'}`}>
        {courses.map(c => <CourseCard key={c.name} course={c} onEnroll={() => scrollTo('booking')} />)}
      </div>
    </section>
  );
}

function CourseCard({ course: c, onEnroll }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`card-base overflow-hidden cursor-pointer ${hovered ? '-translate-y-1.5 border-gold/30' : ''}`}
    >
      {/* Image */}
      <div className="h-44 flex items-center justify-center text-7xl relative" style={{ background: c.bg }}>
        {/* <span className="relative z-10">{c.icon}</span> */}
        <img src={c.icon} alt="mages" className="relative z-10 object-fill"/>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center,rgba(212,168,71,0.05),transparent 70%)' }} />
      </div>

      {/* Body */}
      <div className="p-6">
        <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase mb-3 ${c.tagClass}`}>{c.tag}</span>
        <h3 className="font-bebas text-2xl tracking-wide text-offwhite mb-2">{c.name}</h3>
        <p className="text-sm text-muted leading-relaxed mb-5">{c.desc}</p>

        <div className="flex justify-between items-center border-t border-white/[0.06] pt-4">
          <div>
            <div className="font-bebas text-2xl text-orange-600">{c.price}</div>
            <div className="text-xs text-muted">{c.duration}</div>
          </div>
          <EnrollBtn onClick={onEnroll} />
        </div>
      </div>
    </div>
  );
}

function EnrollBtn({ onClick }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className={`px-4 py-2 rounded-md text-sm font-medium border border-orange-600/25 transition-all duration-200 font-dm cursor-pointer ${h ? 'bg-orange-600 text-black' : 'bg-orange-600/10 text-orange-600'}`}
    >
      Enroll
    </button>
  );
}
