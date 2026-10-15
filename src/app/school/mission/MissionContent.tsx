'use client';

import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Target, Eye, Compass, Star, BookOpen, Shield } from 'lucide-react';

const pillars = [
  { icon: BookOpen, title: 'Academic Excellence', description: 'Rigorous academics that exceed national standards, preparing students for higher education and lifelong success.' },
  { icon: Star, title: 'Spiritual Growth', description: 'Deep connection with Allah through daily worship, Quran study, and application of Islamic principles in all aspects of life.' },
  { icon: Shield, title: 'Character Formation', description: 'Building strong moral character rooted in prophetic traditions of honesty, courage, and compassion.' },
  { icon: Compass, title: 'Community Leadership', description: 'Developing confident, articulate leaders who serve their communities with wisdom and integrity.' },
];

export default function MissionContent() {
  return (
    <>
      <PageHero
        title="Our Mission"
        subtitle="Guided by faith, driven by excellence — shaping the leaders of tomorrow"
        breadcrumb="Home / School / Our Mission"
      />

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-right">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-10 text-white relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} className="text-gold-300" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
                <p className="text-white/90 leading-relaxed text-lg">
                  To provide an outstanding Islamic education that nurtures the intellectual, spiritual,
                  and moral development of every child. We aim to graduate students who are academically
                  accomplished, spiritually grounded, and socially responsible — prepared to excel in
                  this world while striving for success in the hereafter.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-3xl p-10 text-white relative overflow-hidden h-full">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-6">Our Vision</h2>
                <p className="text-white/90 leading-relaxed text-lg">
                  To be a leading institution of Islamic education recognized for producing
                  well-rounded individuals who embody the best of Islamic character and academic
                  achievement. We envision a community where every student discovers their unique
                  potential and uses it to make a positive impact on humanity.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Our Foundation</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Four Pillars of Education</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={i * 150}>
                <div className="group flex gap-6 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-500">
                    <pillar.icon size={28} className="text-primary-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-2">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quranic Inspiration */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom" className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-charcoal to-midnight rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-10" />
            <div className="relative z-10">
              <p className="text-3xl sm:text-4xl font-heading text-gold-300 mb-6 leading-relaxed" dir="rtl">
                &ldquo;رَبِّ زِدْنِي عِلْمًا&rdquo;
              </p>
              <p className="text-white/80 text-lg italic mb-2">&ldquo;My Lord, increase me in knowledge.&rdquo;</p>
              <p className="text-gold-400/60 text-sm">— Surah Ta-Ha, 20:114</p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
