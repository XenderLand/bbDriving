import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <About />
        <Instructors />
        <Testimonials />
        <CTABanner />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
