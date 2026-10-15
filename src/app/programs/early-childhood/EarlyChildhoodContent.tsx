'use client';

import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Heart, Smile, Palette, Music, BookOpen, Sun } from 'lucide-react';

const areas = [
  { icon: BookOpen, title: 'Early Literacy', description: 'Letter recognition, phonics, storytelling, and beginning reading skills in both English and Arabic.', color: 'from-blue-400 to-blue-500' },
  { icon: Smile, title: 'Social-Emotional Growth', description: 'Building friendships, sharing, empathy, and self-regulation through guided play and group activities.', color: 'from-pink-400 to-pink-500' },
  { icon: Palette, title: 'Creative Arts', description: 'Painting, drawing, Islamic patterns, and sensory play that spark imagination and fine motor skills.', color: 'from-purple-400 to-purple-500' },
  { icon: Sun, title: 'Outdoor Exploration', description: 'Nature walks, garden activities, and physical play that develop gross motor skills and curiosity.', color: 'from-yellow-400 to-yellow-500' },
  { icon: Heart, title: 'Islamic Foundation', description: 'Simple duas, short surahs, stories of prophets, and learning to love Allah from the earliest age.', color: 'from-green-400 to-green-500' },
  { icon: Music, title: 'Nasheeds & Rhymes', description: 'Islamic nasheeds, educational songs, and rhymes that make learning joyful and memorable.', color: 'from-orange-400 to-orange-500' },
];

const schedule = [
  { time: '7:30 AM', activity: 'Arrival & Free Play' },
  { time: '8:00 AM', activity: 'Morning Circle & Dua' },
  { time: '8:30 AM', activity: 'Literacy Block' },
  { time: '9:15 AM', activity: 'Snack Time' },
  { time: '9:45 AM', activity: 'Math & Discovery' },
  { time: '10:30 AM', activity: 'Outdoor Play' },
  { time: '11:00 AM', activity: 'Islamic Studies / Quran' },
  { time: '11:45 AM', activity: 'Lunch & Dua' },
  { time: '12:30 PM', activity: 'Rest / Quiet Time' },
  { time: '1:15 PM', activity: 'Art / Sensory Play' },
  { time: '2:00 PM', activity: 'Story Time & Closing Dua' },
  { time: '2:30 PM', activity: 'Dismissal' },
];

export default function EarlyChildhoodContent() {
  return (
    <>
      <PageHero
        title="Early Childhood"
        subtitle="Where little hearts discover the joy of learning in a warm Islamic environment"
        breadcrumb="Home / Programs / Early Childhood"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Ages 3-5</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Learning Through Discovery</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our early childhood program provides a safe, nurturing space where children learn through play,
              exploration, and gentle guidance rooted in Islamic values.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, i) => (
              <AnimatedSection key={area.title} animation="fade-up" delay={i * 100}>
                <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <area.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 to-transparent">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal">A Day in Early Childhood</h2>
          </AnimatedSection>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            {schedule.map((item, i) => (
              <AnimatedSection key={item.time} animation="fade-right" delay={i * 60}>
                <div className={`flex items-center gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-primary-50/30'} hover:bg-primary-50 transition-colors`}>
                  <span className="text-sm font-bold text-primary-600 min-w-[80px]">{item.time}</span>
                  <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0" />
                  <span className="text-charcoal font-medium">{item.activity}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
