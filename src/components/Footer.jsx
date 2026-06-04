import React from 'react';

const footerCols = [
  { title: 'Courses',  links: ['Starter Pack', 'Advanced Skills', 'Motorway Mastery', 'Night Confidence', 'Corporate Training'] },
  { title: 'Company',  links: ['About Us', 'Our Instructors', 'Testimonials', 'Careers', 'Blog'] },
  { title: 'Contact',  links: ['📍 Fijai (Mobik Filling Station), Takoradi', '📍 Racecourse (Shell Filling Station), Takoradi', '📞 +233 54 523 9272', '📱 WhatsApp Us', '✉️ hello@bbdriving.com'] },
];

export default function Footer() {
  return (
    <footer className="bg-dark-deep border-t border-white/[0.05] px-[5%] pt-14 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div
            className="font-bebas text-2xl tracking-[2px] text-blur-600 cursor-pointer mb-3"
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          >
            BB Driving<span className="text-orange-600 ml-2">Consult</span>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            Ghana's premier driving school, trusted by over 1,000+ students.
            Fully DVLA-certified and committed to road safety since 2018.
          </p>
        </div>

        {footerCols.map(col => (
          <div key={col.title}>
            <h4 className=" text-xs font-semibold tracking-[0.8px] uppercase text-orange-600 mb-4">{col.title}</h4>
            {col.links.map(link => (
              <button
                key={link}
                onClick={e => e.preventDefault()}
                className="block text-sm text-muted text-start mb-2.5 transition-colors duration-200 hover:text-offwhite no-underline"
              >
                {link}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-sm text-muted"> &copy; {new Date().getFullYear()} BB Driving Consult. All rights reserved.</span>
        <span className="text-sm text-muted">Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  );
}
