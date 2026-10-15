'use client';

import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BookOpen, Award, Users, Clock, Star, TrendingUp } from 'lucide-react';

const tracks = [
  { level: 'Beginner', name: 'Nooraniyyah', juz: 'Alphabet & Basics', description: 'Learning Arabic letters, connecting letters, and basic reading using the Nooraniyyah method.', color: 'bg-green-500' },
  { level: 'Foundation', name: 'Tilawah', juz: 'Juz 30 (Amma)', description: 'Correct recitation of short surahs with foundational tajweed rules and memorization.', color: 'bg-blue-500' },
  { level: 'Intermediate', name: 'Tajweed', juz: 'Juz 29-25', description: 'Advanced tajweed application, longer surah memorization, and recitation certification.', color: 'bg-purple-500' },
  { level: 'Advanced', name: 'Hifz', juz: 'Full Quran', description: 'Complete Quran memorization program with dedicated hifz teachers and daily revision.', color: 'bg-gold-500' },
];

export default function QuranContent() {
  return (
    <>
      <PageHero
        title="Quran Program"
        subtitle="Nurturing a lifelong connection with the Book of Allah through recitation, understanding, and memorization"
        breadcrumb="Home / Education / Quran Program"
      />

      {/* Stats */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, value: '4', label: 'Learning Tracks' },
            { icon: Users, value: '12', label: 'Quran Teachers' },
            { icon: Award, value: '50+', label: 'Huffaz Graduated' },
            { icon: Star, value: '100%', label: 'Ijazah Rate' },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} animation="zoom" delay={i * 100}>
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100">
                <stat.icon size={24} className="mx-auto mb-2 text-primary-500" />
                <div className="text-2xl font-heading font-bold text-primary-600">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Tracks */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Learning Paths</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Quran Learning Tracks</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {tracks.map((track, i) => (
              <AnimatedSection key={track.level} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={i * 150}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className={`${track.color} text-white rounded-2xl p-4 flex-shrink-0 text-center min-w-[100px] group-hover:scale-105 transition-transform duration-300`}>
                      <div className="text-xs uppercase tracking-wider opacity-80">{track.level}</div>
                      <div className="text-xl font-heading font-bold mt-1">{track.name}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={16} className="text-gold-500" />
                        <span className="text-sm text-gold-600 font-medium">{track.juz}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{track.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quran Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom" className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-charcoal to-midnight rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-10" />
            <div className="relative z-10">
              <p className="text-3xl font-heading text-gold-300 mb-4 leading-relaxed" dir="rtl">
                &ldquo;خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ&rdquo;
              </p>
              <p className="text-white/80 text-lg italic mb-2">&ldquo;The best of you are those who learn the Quran and teach it.&rdquo;</p>
              <p className="text-gold-400/60 text-sm">— Prophet Muhammad (PBUH), Sahih al-Bukhari</p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
