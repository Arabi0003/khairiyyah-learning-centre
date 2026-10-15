'use client';

import { useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BookOpen, Calculator, FlaskConical, Globe2, Languages, Palette, Dumbbell, Monitor, ChevronDown } from 'lucide-react';

const subjects = [
  { icon: BookOpen, name: 'English Language Arts', grades: 'All Grades', description: 'Reading, writing, grammar, vocabulary, literature analysis, and public speaking skills.', color: 'from-blue-500 to-blue-600' },
  { icon: Calculator, name: 'Mathematics', grades: 'All Grades', description: 'From foundational arithmetic to pre-algebra and geometry, building strong mathematical reasoning.', color: 'from-purple-500 to-purple-600' },
  { icon: FlaskConical, name: 'Science', grades: 'Grades 1-8', description: 'Hands-on exploration of biology, chemistry, physics, and earth sciences with lab experiments.', color: 'from-green-500 to-green-600' },
  { icon: Globe2, name: 'Social Studies', grades: 'All Grades', description: 'History, geography, civics, and Islamic civilization studies with a global perspective.', color: 'from-orange-500 to-orange-600' },
  { icon: Languages, name: 'Arabic Language', grades: 'All Grades', description: 'Classical and modern Arabic reading, writing, and conversation from beginner to advanced.', color: 'from-teal-500 to-teal-600' },
  { icon: Palette, name: 'Islamic Art & Calligraphy', grades: 'Grades 2-8', description: 'Arabic calligraphy, geometric patterns, and creative expression through Islamic artistic traditions.', color: 'from-pink-500 to-pink-600' },
  { icon: Dumbbell, name: 'Physical Education', grades: 'All Grades', description: 'Fitness, team sports, and health education promoting the Sunnah of physical well-being.', color: 'from-red-500 to-red-600' },
  { icon: Monitor, name: 'Technology', grades: 'Grades 3-8', description: 'Digital literacy, coding basics, responsible technology use, and computational thinking.', color: 'from-indigo-500 to-indigo-600' },
];

const approach = [
  { title: 'Integrated Learning', description: 'Islamic values are woven into every subject, helping students see the connection between faith and knowledge.' },
  { title: 'Differentiated Instruction', description: 'Teachers adapt their methods to meet each student where they are, ensuring no child is left behind.' },
  { title: 'Project-Based Learning', description: 'Students tackle real-world challenges through collaborative projects that develop critical thinking.' },
  { title: 'Assessment for Growth', description: 'Regular formative assessments guide instruction and celebrate progress, not just test scores.' },
];

export default function CurriculumContent() {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  return (
    <>
      <PageHero
        title="Our Curriculum"
        subtitle="A balanced approach to academic rigor and Islamic enrichment across every grade level"
        breadcrumb="Home / Education / Curriculum"
      />

      {/* Subjects Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">What We Teach</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Academic Subjects</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, i) => (
              <AnimatedSection key={subject.name} animation="fade-up" delay={i * 80}>
                <div
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer transition-all duration-500 hover:-translate-y-2 h-full"
                  onClick={() => setExpandedSubject(expandedSubject === subject.name ? null : subject.name)}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${subject.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <subject.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-charcoal mb-1">{subject.name}</h3>
                  <span className="text-xs text-primary-500 font-medium">{subject.grades}</span>
                  <div className={`overflow-hidden transition-all duration-500 ${expandedSubject === subject.name ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 text-sm leading-relaxed">{subject.description}</p>
                  </div>
                  <ChevronDown size={16} className={`mt-3 text-gray-400 transition-transform duration-300 ${expandedSubject === subject.name ? 'rotate-180' : ''}`} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">How We Teach</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Our Teaching Approach</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {approach.map((item, i) => (
              <AnimatedSection key={item.title} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={i * 100}>
                <div className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
