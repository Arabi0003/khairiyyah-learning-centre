'use client';

import { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, Heart, Globe } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Rigorous Academics',
    description: 'Our curriculum meets and exceeds state standards while integrating Islamic perspectives across all subjects.',
  },
  {
    icon: GraduationCap,
    title: 'Quran & Islamic Studies',
    description: 'Daily Quran recitation, memorization programs, and comprehensive Islamic studies nurture spiritual growth.',
  },
  {
    icon: Heart,
    title: 'Character Development',
    description: 'We instill Islamic values of compassion, integrity, and service, building leaders of tomorrow.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Students develop cultural awareness and critical thinking to thrive in an interconnected world.',
  },
];

export default function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-preview" ref={sectionRef} className="relative py-24 sm:py-32" role="region" aria-label="About our school">
      <div className="absolute inset-0 section-glass islamic-pattern" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Why Choose Khairiyyah</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal">
            Where <span className="text-primary-500">Knowledge</span> Meets <span className="text-gold-500">Faith</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            We provide a holistic educational experience that balances academic
            rigor with spiritual enrichment, preparing students for success in
            this life and the hereafter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-7 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary-500/10 border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-500 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <feature.icon size={26} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

