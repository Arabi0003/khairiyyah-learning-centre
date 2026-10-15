'use client';

import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail } from 'lucide-react';

const faculty = [
  { name: 'Dr. Ahmad Ibrahim', role: 'Principal', department: 'Administration', bio: 'Over 20 years of experience in Islamic education leadership.' },
  { name: 'Ustadha Fatima Hassan', role: 'Vice Principal', department: 'Administration', bio: 'Specialist in curriculum development and teacher training.' },
  { name: 'Sheikh Yusuf Kamara', role: 'Head of Islamic Studies', department: 'Islamic Studies', bio: 'Hafiz with ijazah in the ten qiraat. Dedicated to nurturing young huffaz.' },
  { name: 'Mrs. Amina Owusu', role: 'Head of Academics', department: 'Academic', bio: 'Masters in Education. Passionate about differentiated instruction.' },
  { name: 'Mr. Kwame Mensah', role: 'Science Teacher', department: 'Academic', bio: 'BSc in Chemistry. Making science exciting through hands-on experiments.' },
  { name: 'Ustadha Mariam Diallo', role: 'Arabic Teacher', department: 'Islamic Studies', bio: 'Native Arabic speaker with expertise in teaching Arabic as a second language.' },
  { name: 'Mrs. Sarah Adjei', role: 'Early Childhood Lead', department: 'Early Childhood', bio: 'Certified early childhood educator with a heart for young learners.' },
  { name: 'Mr. Ibrahim Osman', role: 'PE & Sports Coach', department: 'Extracurricular', bio: 'Former athlete dedicated to developing fitness and sportsmanship.' },
];

const departments = ['All', 'Administration', 'Academic', 'Islamic Studies', 'Early Childhood', 'Extracurricular'];

export default function FacultyContent() {
  return (
    <>
      <PageHero
        title="Faculty & Staff"
        subtitle="Meet the dedicated educators who make Khairiyyah a place of excellence"
        breadcrumb="Home / School / Faculty & Staff"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((person, i) => (
              <AnimatedSection key={person.name} animation="fade-up" delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-gold-100 flex items-center justify-center relative overflow-hidden">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-500">👤</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <a href="mailto:info@Khairiyyahedu.com" className="flex items-center gap-1 text-white text-sm hover:text-gold-300">
                        <Mail size={14} /> Email
                      </a>
                    </div>
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-600">
                      {person.department}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-charcoal">{person.name}</h3>
                    <p className="text-primary-500 text-sm font-medium">{person.role}</p>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-12 italic">PLACEHOLDER: Replace with actual staff photos and bios</p>
        </div>
      </section>
    </>
  );
}

