'use client';

import { useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ClipboardList, FileText, UserCheck, GraduationCap, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';

const steps = [
  { icon: ClipboardList, step: '01', title: 'Submit Inquiry', description: 'Complete the online inquiry form or contact our admissions office to express your interest.' },
  { icon: FileText, step: '02', title: 'Application Form', description: 'Fill out the official application form with student and family information, and submit required documents.' },
  { icon: UserCheck, step: '03', title: 'Assessment & Interview', description: 'Students complete an age-appropriate assessment. Parents attend a family interview with the admissions team.' },
  { icon: GraduationCap, step: '04', title: 'Acceptance & Enrollment', description: 'Receive your acceptance letter, complete enrollment paperwork, and welcome to the Khairiyyah family!' },
];

const requirements = [
  'Completed application form',
  'Birth certificate (certified copy)',
  'Previous school records / report cards',
  'Immunization records',
  'Passport-size photographs (2)',
  'Parents / Guardian ID copies',
  'Recommendation letter from previous school (Grades 2+)',
  'Application fee payment',
];

const faqs = [
  { q: 'What age groups do you accept?', a: 'We accept students from Pre-K (age 3) through Grade 8 (age 14). Early childhood accepts children who are fully toilet trained.' },
  { q: 'Is there an entrance exam?', a: 'We conduct age-appropriate assessments for students entering Grades 1 and above. Pre-K and Kindergarten students participate in a readiness observation.' },
  { q: 'Do you offer financial aid or scholarships?', a: 'Yes, we offer need-based financial aid and merit scholarships. Contact our admissions office for details on how to apply.' },
  { q: 'When is the application deadline?', a: 'We accept applications year-round, but priority enrollment for the upcoming academic year closes in June. Late applications are considered based on availability.' },
  { q: 'Can my child join mid-year?', a: 'Yes, we accept mid-year transfers based on seat availability. Transfer students follow the same application process.' },
  { q: 'What curriculum do you follow?', a: 'We follow a comprehensive curriculum that meets national standards, enriched with Islamic studies, Arabic language, and Quran programs.' },
];

export default function AdmissionsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Join the Khairiyyah family — where every child is valued, nurtured, and inspired to excel"
        breadcrumb="Home / Admissions"
      />

      {/* Process Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">How To Apply</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-charcoal">Admissions Process</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.step} animation="fade-up" delay={i * 150}>
                <div className="relative group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <step.icon size={28} className="text-white" />
                    </div>
                    <span className="text-gold-500 font-bold text-sm">Step {step.step}</span>
                    <h3 className="text-lg font-heading font-bold text-charcoal mt-2 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <ArrowRight size={20} className="text-primary-300" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 to-transparent">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection animation="fade-right">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Checklist</span>
            <h2 className="mt-3 text-3xl font-heading font-bold text-charcoal mb-8">Required Documents</h2>
            <div className="space-y-3">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <CheckCircle2 size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 text-white sticky top-24">
              <h3 className="text-2xl font-heading font-bold mb-4">Ready to Apply?</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Take the first step toward giving your child an exceptional Islamic education.
                Our admissions team is here to guide you through the process.
              </p>
              <div className="space-y-3">
                <a href="mailto:info@khairiyyaedu.com" className="block w-full text-center bg-gold-500 hover:bg-gold-400 text-white py-3.5 rounded-xl font-semibold transition-colors">
                  Start Application
                </a>
                <a href="tel:+233594619640" className="block w-full text-center bg-white/10 hover:bg-white/20 text-white py-3.5 rounded-xl font-medium transition-colors border border-white/20">
                  Call +233 59 461 9640
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase">Questions?</span>
            <h2 className="mt-3 text-3xl font-heading font-bold text-charcoal">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left font-heading font-bold text-charcoal hover:text-primary-600 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
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

