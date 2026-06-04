import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const perks = [
  { title: 'Free first lesson — no strings attached', desc: 'Try us out before you commit to a full package.' },
  { title: 'Pick-up from your home or workplace',     desc: 'We come to you — no need to travel to a centre.' },
  { title: 'Instant confirmation via SMS and Email',       desc: 'Get your booking confirmed within 30 minutes.' },
  { title: 'Money-back guarantee',                    desc: 'Not satisfied after your second lesson? Full refund, no questions asked.' },
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    course: 'Starter Pack — Beginner',
    date: '', time: 'Morning (7am–12pm)', location: '',
  });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="booking" className="px-[5%] py-24" 
    // style={{ background: 'linear-gradient(130deg,#0f0f0e 50%,#fafaf8 50%)' }}
    ref={ref}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${inView ? 'animate-fadeUp' : 'opacity-0'}`}>

        {/* Info */}
        <div>
          <div className="section-label">Book a Lesson</div>
          <div className="section-title">START YOUR<br />JOURNEY TODAY</div>
          <p className="section-sub">
            Fill in the form and we'll match you with the perfect instructor and schedule.
            Your first trial lesson is completely free.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {perks.map((p, i) => (
              <div
                key={p.title}
                className={`flex items-start gap-3.5 ${inView ? 'animate-fadeUp' : 'opacity-0'}`}
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0 mt-1.5" />
                <div>
                  <h4 className="text-[15px] font-semibold text-offwhite mb-0.5">{p.title}</h4>
                  <p className="text-sm text-muted">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="bg-dark-card border border-white/[0.07] rounded-2xl p-10">
          {submitted ? (
            <div className="text-center py-10 animate-fadeUp">
              <div className="text-6xl mb-5">🎉</div>
              <div className="font-bebas text-3xl text-offwhite mb-3">BOOKING RECEIVED!</div>
              <p className="text-muted text-[15px] leading-relaxed">
                Thank you, {form.firstName || 'friend'}! We'll confirm your lesson via WhatsApp within 30 minutes. See you on the road! 🚗
              </p>
              <button className="btn-primary mt-7" onClick={() => setSubmitted(false)}>
                Book Another
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="First Name" name="firstName" placeholder="Kofi"   value={form.firstName} onChange={handleChange} />
                <Field label="Last Name"  name="lastName"  placeholder="Mensah" value={form.lastName}  onChange={handleChange} />
              </div>
              <Field label="Phone Number"   name="phone"    type="tel"   placeholder="+233 XX XXX XXXX"  value={form.phone}    onChange={handleChange} />
              <Field label="Email Address"  name="email"    type="email" placeholder="kofi@email.com"    value={form.email}    onChange={handleChange} />

              {/* Course select */}
              <div>
                <label className="block text-xs font-medium text-muted mb-2 tracking-wide">Select Course</label>
                <select name="course" value={form.course} onChange={handleChange} className="input-field cursor-pointer">
                  <option>Regular Package — Beginner</option>
                  <option>Intensive Package</option>
                  <option>Private Package</option>
                  <option>Online Package</option>
                </select>
              </div>

              {/* Date & time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted mb-2 tracking-wide">Preferred Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange}
                    className="input-field [color-scheme:dark]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-2 tracking-wide">Preferred Time</label>
                  <select name="time" value={form.time} onChange={handleChange} className="input-field cursor-pointer">
                    <option>Morning (7am–12pm)</option>
                    <option>Afternoon (12pm–5pm)</option>
                    <option>Evening (5pm–8pm)</option>
                  </select>
                </div>
              </div>

              <Field label="Pick-up Location" name="location" placeholder="Your address in Accra" value={form.location} onChange={handleChange} />

              <button className="btn-primary w-full mt-2" onClick={() => setSubmitted(true)}>
                Confirm Booking →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted mb-2 tracking-wide">{label}</label>
      <input
        type={type} name={name} placeholder={placeholder}
        value={value} onChange={onChange}
        className="input-field"
      />
    </div>
  );
}
