'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'About Us', href: '/school/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Curriculum', href: '/education/curriculum' },
  { label: 'Islamic Studies', href: '/education/islamic-studies' },
  { label: 'Faculty & Staff', href: '/school/faculty' },
  { label: 'Academic Calendar', href: '/education/calendar' },
];

const programLinks = [
  { label: 'Early Childhood', href: '/programs/early-childhood' },
  { label: 'Elementary School', href: '/programs/elementary' },
  { label: 'Middle School', href: '/programs/middle-school' },
  { label: 'Quran Program', href: '/education/quran' },
  { label: 'After School', href: '/programs/after-school' },
  { label: 'Campus Tour', href: '/school/campus' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'YouTube', href: 'https://youtube.com', Icon: YoutubeIcon },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative" role="contentinfo" aria-label="Site footer">
      <div className="relative z-10 section-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Begin Your Child&apos;s Journey Today
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Join a community dedicated to knowledge and conduct. Admissions are now open for the upcoming academic year.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/admissions" className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Apply for Admission
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-white/25">
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:scale-105 transition-transform bg-white">
                  <Image src="/images/khairi.png" alt="Khairiyyahh Logo" fill sizes="48px" className="object-contain p-0.5" />
                </div>
                <div>
                  <span className="block text-lg font-heading font-bold text-white">Khairiyyahh</span>
                  <span className="block text-xs tracking-widest text-gold-400 uppercase">Learning Centre</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Providing quality Islamic and academic education centered on <strong className="text-gold-300">Knowledge and Conduct</strong>.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-primary-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300" aria-label={`Follow us on ${social.label}`}>
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-heading font-bold text-lg mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:bg-gold-400 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-heading font-bold text-lg mb-5">Our Programs</h3>
              <ul className="space-y-3">
                {programLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:bg-gold-400 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-heading font-bold text-lg mb-5">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm group">
                    <MapPin size={18} className="text-primary-500 mt-0.5 flex-shrink-0 group-hover:text-gold-400 transition-colors" />
                    <span>1234 Education Drive<br />Accra, Ghana</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+233594619640" className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm group">
                    <Phone size={18} className="text-primary-500 flex-shrink-0 group-hover:text-gold-400 transition-colors" />
                    +233 59 461 9640
                  </a>
                </li>
                <li>
                  <a href="mailto:info@Khairiyyahedu.com" className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm group">
                    <Mail size={18} className="text-primary-500 flex-shrink-0 group-hover:text-gold-400 transition-colors" />
                    info@Khairiyyahedu.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Clock size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <span>Mon – Fri: 7:30 AM – 3:30 PM<br />Office: 7:00 AM – 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <p>&copy; {currentYear ?? '2025'} Khairiyyahh Learning Centre. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Use</Link>
                <Link href="/accessibility" className="hover:text-gold-400 transition-colors">Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

