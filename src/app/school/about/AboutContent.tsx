'use client';

import { useEffect, useRef, useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Users, Award, BookOpen, Heart, Target, Eye } from 'lucide-react';

const stats = [
  { number: '2009', label: 'Year Founded' },
  { number: '500+', label: 'Students' },
  { number: '50+', label: 'Dedicated Staff' },
  { number: '15+', label: 'Years of Excellence' },
];

const values = [
  { icon: BookOpen, title: 'Knowledge', description: 'We pursue both sacred and secular knowledge as acts of worship, building strong academic foundations.' },
  { icon: Heart, title: 'Compassion', description: 'We teach empathy, kindness, and service to others following the Prophetic tradition of mercy.' },
  { icon: Award, title: 'Excellence', description: 'We strive for ihsan (excellence) in everything we do, encouraging students to reach their highest potential.' },
  { icon: Users, title: 'Community', description: 'We foster a united ummah within our school, welcoming families from diverse backgrounds.' },
  { icon: Target, title: 'Integrity', description: 'We uphold honesty, accountability, and moral courage as pillars of Islamic character.' },
  { icon: Eye, title: 'Vision', description: 'We prepare students to be future leaders who positively impact their communities and the world.' },
];

const timeline = [
  { year: '2009', title: 'Foundation', description: 'Khairiyyahh Learning Centre was established with 30 students and a dream of excellence in Islamic education.' },
  { year: '2012', title: 'First Graduation', description: 'Our first cohort graduated with outstanding results, setting the standard for years to come.' },
  { year: '2015', title: 'Campus Expansion', description: 'New classrooms, a science lab, and a dedicated Quran memorization hall were added.' },
  { year: '2018', title: 'Recognition', description: 'Received national recognition for academic performance and community development.' },
  { year: '2021', title: 'Digital Integration', description: 'Launched blended learning programs combining traditional Islamic pedagogy with modern technology.' },
  { year: '2024', title: 'Growing Strong', description: 'Over 500 students enrolled, with expanded programs from early childhood through middle school.' },
];

export default function AboutContent() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeTimeline, setActiveTimeline] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setActiveTimeline((prev) => Math.max(prev, index));
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = timelineRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Discover the story, values, and people behind Khairiyyahh Learning Centre"
        breadcrumb="Home / School / About Us"
      />

      {/* Stats Counter */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} animation="zoom" delay={i * 100}>
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary-600">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fade-right">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              A Legacy of <span className="text-primary-500">Faith</span> & <span className="text-gold-500">Learning</span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2009, Khairiyyahh Learning Centre began with a simple yet profound vision: to provide
                an educational environment where children could flourish academically while deepening their
                connection to Allah and Islamic values.
              </p>
              <p>
                What started as a small school with just 30 students has grown into a thriving institution
                serving over 500 families. Our name, &ldquo;Khairiyyah,&rdquo; derived from the Arabic word for
                &ldquo;goodness,&rdquo; reflects our commitment to nurturing the best in every child.
              </p>
              <p>
                Today, we offer a comprehensive curriculum that seamlessly integrates rigorous academics with
                authentic Islamic education, preparing students not only for academic success but for a life
                of purpose, service, and taqwa.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-gold-100 rounded-3xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🕌</div>
                  <p className="text-primary-700 font-heading font-bold text-xl">PLACEHOLDER</p>
                  <p className="text-primary-600/60 text-sm mt-1">School campus photo</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-heading font-bold">15+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-50/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">What We Stand For</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Our Core Values</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Guided by the Quran and Sunnah, these values shape everything we do at Khairiyyah.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={i * 120}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Our Journey</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Milestones & Growth</h2>
          </AnimatedSection>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2 hidden md:block" />

            {timeline.map((item, i) => (
              <div
                key={item.year}
                data-index={i}
                className={`relative flex items-center mb-12 last:mb-0 transition-all duration-700 ${
                  activeTimeline >= i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-bold mb-2">{item.year}</span>
                    <h3 className="text-lg font-heading font-bold text-charcoal">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary-500 border-4 border-white rounded-full shadow-md z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

