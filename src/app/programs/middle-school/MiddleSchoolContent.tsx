'use client';

import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Rocket, Brain, Users, Award, Microscope, Code } from 'lucide-react';

const features = [
  { icon: Brain, title: 'Critical Thinking', description: 'Advanced coursework that challenges students to analyze, evaluate, and create solutions.' },
  { icon: Microscope, title: 'STEM Focus', description: 'Enhanced science and math curriculum with laboratory experiments and hands-on projects.' },
  { icon: Code, title: 'Digital Literacy', description: 'Computer science fundamentals, coding, and responsible technology use.' },
  { icon: Users, title: 'Leadership Development', description: 'Student council, mentorship programs, and community service opportunities.' },
  { icon: Rocket, title: 'High School Prep', description: 'Academic counseling and preparation for the transition to secondary education.' },
  { icon: Award, title: 'Competitions & Awards', description: 'Participation in academic olympiads, Quran competitions, and inter-school events.' },
];

export default function MiddleSchoolContent() {
  return (
    <>
      <PageHero
        title="Middle School"
        subtitle="Preparing confident, capable young Muslims for the challenges of tomorrow — Grades 6 to 8"
        breadcrumb="Home / Programs / Middle School"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Grades 6-8</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Preparing Future Leaders</h2>
            <p className="mt-4 text-gray-600">
              Our middle school bridges childhood and adolescence with rigorous academics,
              deepened Islamic studies, and character development that prepares students for high school and beyond.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} animation="fade-up" delay={i * 100}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-50 to-gold-50 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Tracks */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal">Academic Tracks</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Honors Track', desc: 'Advanced coursework for high-achieving students preparing for competitive high school programs.', badge: 'Advanced' },
              { title: 'Standard Track', desc: 'Comprehensive curriculum meeting national standards with personalized support.', badge: 'Core' },
              { title: 'Hifz Intensive', desc: 'Accelerated Quran memorization combined with core academics for dedicated students.', badge: 'Islamic' },
              { title: 'STEM Enrichment', desc: 'Additional science, technology, engineering, and math projects and competitions.', badge: 'Enrichment' },
            ].map((track, i) => (
              <AnimatedSection key={track.title} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-bold mb-3">{track.badge}</span>
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-2">{track.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{track.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
