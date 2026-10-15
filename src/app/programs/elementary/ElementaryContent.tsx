'use client';

import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BookOpen, Calculator, FlaskConical, Globe2, Languages, Pen } from 'lucide-react';

const subjects = [
  { icon: BookOpen, name: 'English Language Arts', description: 'Comprehensive reading, creative writing, grammar, and literature studies.' },
  { icon: Calculator, name: 'Mathematics', description: 'Problem-solving, arithmetic mastery, fractions, geometry, and early algebra concepts.' },
  { icon: FlaskConical, name: 'Science', description: 'Hands-on experiments, scientific method, life sciences, and earth sciences.' },
  { icon: Globe2, name: 'Social Studies', description: 'World history, geography, communities, and Islamic civilizations.' },
  { icon: Languages, name: 'Arabic Language', description: 'Reading, writing, vocabulary building, and conversation in Arabic.' },
  { icon: Pen, name: 'Islamic Studies & Quran', description: 'Daily Quran, tajweed, seerah, fiqh, and Islamic character education.' },
];

export default function ElementaryContent() {
  return (
    <>
      <PageHero
        title="Elementary School"
        subtitle="Building strong academic foundations while nurturing Islamic character for grades 1-5"
        breadcrumb="Home / Programs / Elementary"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Grades 1-5</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Core Subjects</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, i) => (
              <AnimatedSection key={subject.name} animation={i % 3 === 0 ? 'fade-right' : i % 3 === 1 ? 'fade-up' : 'fade-left'} delay={i * 120}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-500 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:rotate-6">
                    <subject.icon size={26} className="text-primary-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{subject.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{subject.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 to-transparent">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { title: 'Small Class Sizes', desc: 'Maximum 20 students per class ensuring personalized attention and support for every learner.', emoji: '👨‍🏫' },
            { title: 'Integrated Technology', desc: 'Interactive whiteboards, educational software, and supervised digital learning tools.', emoji: '💻' },
            { title: 'Field Trips & Enrichment', desc: 'Regular educational excursions to museums, nature reserves, and community organizations.', emoji: '🚌' },
            { title: 'Parent Partnership', desc: 'Regular communication, conferences, and volunteer opportunities keep families connected.', emoji: '🤝' },
          ].map((item, i) => (
            <AnimatedSection key={item.title} animation="zoom" delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex gap-5 items-start">
                <span className="text-4xl">{item.emoji}</span>
                <div>
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
