'use client';

import { useEffect, useState } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[45vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/90 via-midnight/85 to-primary-900/90 z-0" />

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className={`absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute bottom-20 right-20 w-48 h-48 border border-gold-400/10 rounded-full transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rotate-45 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
      </div>

      <div className="relative z-10 text-center pt-24 pb-16 max-w-4xl mx-auto">
        <span className={`inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gold-300 text-sm font-medium tracking-wider uppercase mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          {breadcrumb}
        </span>
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {title}
        </h1>
        <p className={`text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
