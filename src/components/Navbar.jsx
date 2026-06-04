import React, { useState, useEffect } from 'react';
import logoImg from "../assets/images/312016788_488634056615788_2333126231630248398_n.jpg";

const navItems = [
  { label: 'Courses',     id: 'courses' },
  { label: 'About',       id: 'about' },
  { label: 'Instructors', id: 'instructors' },
  { label: 'Reviews',     id: 'reviews' },
  { label: 'Book Now',    id: 'booking' },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] border-b border-blue-600/10 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-white/80' : 'linear-gradient(135deg,#fafaf8 70%,#1a1208 50%,#0f0f0e 100%)'}`}>
        {/* Logo */}

        <button onClick={() => scrollTo('home')} className=" flex items-center justify-between font-bebas font-bold text-[20px] tracking-[2px] text-blue-600 border-0 bg-transparent cursor-pointer">
          <img src={logoImg} alt="" className="w-14 h-auto mr-2" />
          BB Driving <span className="text-orange-600 ml-2"> Consult</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 list-none">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 text-sm font-medium tracking-wide bg-transparent border-0 cursor-pointer transition-colors duration-200 hover:text-blue-700 font-dm"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('booking')}
          className="btn-primary !px-6 !py-2.5 text-sm hidden md:block"
        >
          Get Started
        </button>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.5 bg-transparent font-bold border-0 cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} className={`block w-6 h-0.5 bg-black rounded transition-all duration-300 ${menuOpen && i === 0 ? 'rotate-45 translate-y-2' : menuOpen && i === 2 ? '-rotate-45 -translate-y-2' : menuOpen && i === 1 ? 'opacity-0' : ''}`} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
              className="font-bebas text-4xl tracking-[2px] text-black bg-transparent border-0 cursor-pointer hover:text-blue-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
