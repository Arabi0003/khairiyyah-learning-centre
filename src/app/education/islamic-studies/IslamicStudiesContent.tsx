'use client';

import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BookOpen, Heart, Star, Users, Moon, Sparkles } from 'lucide-react';

const programs = [
  { icon: BookOpen, title: 'Aqeedah (Creed)', description: 'Foundation of Islamic belief, studying the pillars of Iman and developing a strong relationship with Allah.' },
  { icon: Heart, title: 'Fiqh (Jurisprudence)', description: 'Practical Islamic law covering worship, daily life, and personal conduct according to the Sunnah.' },
  { icon: Star, title: 'Seerah (Prophetic Biography)', description: 'The life and teachings of Prophet Muhammad (PBUH) as a model for character and leadership.' },
  { icon: Users, title: 'Islamic History', description: 'Stories of the Companions, scholars, and great civilizations that shaped the Muslim world.' },
  { icon: Moon, title: 'Daily Adhkar & Duas', description: 'Students learn and practice daily remembrances and supplications from the Quran and Sunnah.' },
  { icon: Sparkles, title: 'Islamic Ethics (Akhlaq)', description: 'Character development through the study of virtues, manners, and social responsibility in Islam.' },
];

export default function IslamicStudiesContent() {
  return (
    <>
      <PageHero
        title="Islamic Studies"
        subtitle="Building a strong foundation of faith through comprehensive Islamic education"
        breadcrumb="Home / Education / Islamic Studies"
      />

      {/* Programs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Our Programs</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">
              Comprehensive <span className="text-primary-500">Islamic</span> Education
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <AnimatedSection key={program.title} animation="fade-up" delay={i * 120}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-100 transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                      <program.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal">Daily Islamic Routine</h2>
          </AnimatedSection>

          {[
            { time: '7:30 AM', activity: 'Morning Adhkar & Dua', desc: 'Students begin each day with collective morning remembrances' },
            { time: '8:00 AM', activity: 'Quran Recitation', desc: 'Daily Quran reading with tajweed practice' },
            { time: '10:30 AM', activity: 'Islamic Studies Class', desc: 'Structured lessons in aqeedah, fiqh, or seerah' },
            { time: '12:15 PM', activity: 'Dhuhr Prayer', desc: 'Congregational prayer with brief reminder' },
            { time: '2:00 PM', activity: 'Arabic Language', desc: 'Reading, writing, and conversational Arabic' },
            { time: '3:15 PM', activity: 'Closing Dua', desc: 'Day ends with evening supplications' },
          ].map((item, i) => (
            <AnimatedSection key={item.time} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={i * 100}>
              <div className="flex gap-4 sm:gap-8 mb-6 items-start">
                <div className="w-24 sm:w-28 flex-shrink-0 text-right">
                  <span className="text-primary-600 font-bold text-sm">{item.time}</span>
                </div>
                <div className="w-3 h-3 bg-gold-500 rounded-full mt-1.5 flex-shrink-0 ring-4 ring-gold-100" />
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1 hover:shadow-md transition-shadow">
                  <h4 className="font-heading font-bold text-charcoal">{item.activity}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
