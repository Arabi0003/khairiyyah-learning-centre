'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronDown, Phone, Mail } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'School',
    href: '/school',
    children: [
      { label: 'About Us', href: '/school/about' },
      { label: 'Our Mission', href: '/school/mission' },
      { label: 'Faculty & Staff', href: '/school/faculty' },
      { label: 'Campus Tour', href: '/school/campus' },
    ],
  },
  {
    label: 'Education',
    href: '/education',
    children: [
      { label: 'Curriculum', href: '/education/curriculum' },
      { label: 'Islamic Studies', href: '/education/islamic-studies' },
      { label: 'Quran Program', href: '/education/quran' },
      { label: 'Academic Calendar', href: '/education/calendar' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Early Childhood', href: '/programs/early-childhood' },
      { label: 'Elementary', href: '/programs/elementary' },
      { label: 'Middle School', href: '/programs/middle-school' },
      { label: 'After School', href: '/programs/after-school' },
    ],
  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Top Info Bar */}
      <div
        className={`hidden md:block transition-all duration-500 ease-in-out z-50 relative ${
          isScrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="bg-primary-700/90 backdrop-blur-sm text-white/90 text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
            <div className="flex items-center gap-6">
              <a href="tel:+233594619640" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
                <Phone size={13} />
                <span>+233 59 461 9640</span>
              </a>
              <a href="mailto:info@Khairiyyahedu.com" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
                <Mail size={13} />
                <span>info@Khairiyyahedu.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/portal" className="hover:text-gold-300 transition-colors">Parent Portal</Link>
              <span className="text-white/30">|</span>
              <Link href="/admissions" className="bg-gold-500 hover:bg-gold-400 text-white px-3 py-1 rounded text-xs font-semibold transition-colors">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Name */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Khairiyyahh Learning Centre - Home">
              <div className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'bg-white shadow-sm' : 'bg-white/20 backdrop-blur-sm border border-white/30'
              }`}>
                <Image
                  src="/images/khairi.png"
                  alt="Khairiyyahh Learning Centre Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-heading font-bold leading-tight transition-colors duration-300 ${
                  isScrolled ? 'text-primary-700' : 'text-white'
                }`}>
                  Khairiyyahh
                </span>
                <span className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-gold-500' : 'text-gold-300'
                }`}>
                  Learning Centre
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-charcoal hover:text-primary-600 hover:bg-primary-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    aria-haspopup={link.children ? 'true' : undefined}
                    aria-expanded={link.children ? activeDropdown === link.label : undefined}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {link.children && (
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                        activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      role="menu"
                      aria-label={`${link.label} submenu`}
                    >
                      <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 min-w-[220px] overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-charcoal hover:text-primary-600 hover:bg-primary-50 transition-colors"
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/admissions"
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-md shadow-primary-500/25 hover:shadow-lg'
                    : 'bg-gold-500 hover:bg-gold-400 text-white shadow-md shadow-black/20'
                }`}
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-charcoal hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-charcoal' : 'bg-white'
                } ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-charcoal' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-charcoal' : 'bg-white'
                } ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMobileMenu} aria-hidden="true" />
        <div
          id="mobile-menu"
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src="/images/khairi.png" alt="Logo" fill sizes="40px" className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-primary-700 leading-tight">Khairiyyahh</span>
                  <span className="text-[10px] tracking-widest text-gold-500 uppercase">Learning Centre</span>
                </div>
              </Link>
              <button onClick={closeMobileMenu} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-6 py-3.5 text-left text-charcoal hover:text-primary-600 hover:bg-primary-50 transition-colors font-medium"
                        onClick={() => setMobileSubmenu(mobileSubmenu === link.label ? null : link.label)}
                        aria-expanded={mobileSubmenu === link.label}
                      >
                        {link.label}
                        <ChevronDown size={16} className={`transition-transform duration-300 ${mobileSubmenu === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === link.label ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href} onClick={closeMobileMenu} className="block pl-10 pr-6 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={link.href} onClick={closeMobileMenu} className="block px-6 py-3.5 text-charcoal hover:text-primary-600 hover:bg-primary-50 transition-colors font-medium">
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 p-5 space-y-3">
              <Link href="/admissions" onClick={closeMobileMenu} className="block w-full text-center bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-colors">
                Apply Now
              </Link>
              <div className="flex gap-3 text-sm text-gray-500">
                <a href="tel:+233594619640" className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                  <Phone size={13} /> +233 59 461 9640
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

