'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="main-content"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      role="region"
      aria-label="Welcome to Khairiyyah Learning Centre"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 pb-32">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gold-300 text-sm font-medium tracking-wide mb-6">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
        </div>

        <h1 className="animate-fade-in-up animation-delay-200">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-2">
            Knowledge and Conduct
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-heading font-semibold leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">
              Khairiyyah Learning Centre
            </span>
          </span>
        </h1>

        <p className="animate-fade-in-up animation-delay-400 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          At Khairiyyah Learning Centre, we cultivate a love of learning rooted in
          Islamic values, empowering students to excel academically, grow
          spiritually, and embody upright conduct.
        </p>

        <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/admissions"
            className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-400/40 hover:-translate-y-0.5"
          >
            Begin Your Journey
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/school/campus"
            className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 border border-white/25 hover:border-white/40"
          >
            Explore Our Campus
          </Link>
        </div>

        <div className="animate-fade-in-up animation-delay-800 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: BookOpen, value: '15+', label: 'Years of Excellence' },
            { icon: Users, value: '500+', label: 'Students Enrolled' },
            { icon: Star, value: '98%', label: 'Parent Satisfaction' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <stat.icon className="text-gold-400 mb-2" size={24} />
              <span className="text-3xl font-heading font-bold text-white">{stat.value}</span>
              <span className="text-sm text-white/60 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about-preview" className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors" aria-label="Scroll down to learn more">
          <span className="text-xs tracking-widest uppercase mb-2">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </a>
      </div>
    </section>
  );
}

