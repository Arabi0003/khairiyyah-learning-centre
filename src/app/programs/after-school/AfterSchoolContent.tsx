'use client';

import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Clock, BookOpen, Palette, Dumbbell, Monitor, Users } from 'lucide-react';

const programs = [
  { icon: BookOpen, name: 'Homework Help', time: '3:30 - 4:30 PM', days: 'Mon - Thu', description: 'Supervised homework session with teacher assistance and tutoring support.', color: 'from-blue-500 to-blue-600' },
  { icon: Palette, name: 'Islamic Art Club', time: '3:30 - 5:00 PM', days: 'Monday', description: 'Arabic calligraphy, geometric art, and creative Islamic crafts.', color: 'from-purple-500 to-purple-600' },
  { icon: Dumbbell, name: 'Sports & Fitness', time: '3:30 - 5:00 PM', days: 'Tue & Thu', description: 'Football, basketball, athletics, and general fitness activities.', color: 'from-red-500 to-red-600' },
  { icon: Monitor, name: 'Coding Club', time: '3:30 - 5:00 PM', days: 'Wednesday', description: 'Learn programming basics through fun projects and games.', color: 'from-indigo-500 to-indigo-600' },
  { icon: BookOpen, name: 'Quran Enrichment', time: '3:30 - 5:00 PM', days: 'Mon - Thu', description: 'Extra Quran memorization and tajweed practice with dedicated teachers.', color: 'from-green-500 to-green-600' },
  { icon: Users, name: 'Extended Care', time: '3:30 - 5:30 PM', days: 'Mon - Fri', description: 'Supervised care with snacks, play, and quiet activities until pick-up.', color: 'from-orange-500 to-orange-600' },
];

export default function AfterSchoolContent() {
  return (
    <>
      <PageHero
        title="After School Programs"
        subtitle="Enriching activities and supervised care that extend the learning day"
        breadcrumb="Home / Programs / After School"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">3:30 PM - 5:30 PM</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">After School Enrichment</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <AnimatedSection key={program.name} animation="fade-up" delay={i * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className={`bg-gradient-to-r ${program.color} p-5 text-white`}>
                    <program.icon size={28} className="mb-2" />
                    <h3 className="text-xl font-heading font-bold">{program.name}</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Clock size={14} /> {program.time}</span>
                      <span className="bg-primary-50 text-primary-600 px-2 py-0.5 rounded text-xs font-medium">{program.days}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{program.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 to-transparent">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal">Program Fees</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: 'Single Activity', price: 'GHS 150', period: '/month', desc: 'One after-school activity of your choice' },
              { name: 'Extended Care', price: 'GHS 200', period: '/month', desc: 'Daily supervised care until 5:30 PM', featured: true },
              { name: 'Activity Bundle', price: 'GHS 350', period: '/month', desc: 'Any two activities plus extended care' },
              { name: 'Full Package', price: 'GHS 500', period: '/month', desc: 'All activities plus extended care' },
            ].map((plan, i) => (
              <AnimatedSection key={plan.name} animation="zoom" delay={i * 100}>
                <div className={`bg-white rounded-2xl p-7 border transition-all duration-300 hover:shadow-lg ${plan.featured ? 'border-primary-300 shadow-md ring-2 ring-primary-100' : 'border-gray-100 shadow-sm'}`}>
                  {plan.featured && <span className="inline-block px-3 py-1 bg-primary-500 text-white rounded-full text-xs font-bold mb-3">Popular</span>}
                  <h3 className="font-heading font-bold text-charcoal text-lg">{plan.name}</h3>
                  <div className="mt-2 mb-3">
                    <span className="text-3xl font-heading font-bold text-primary-600">{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
