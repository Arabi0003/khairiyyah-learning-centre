'use client';

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative min-h-[38vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-800 via-midnight to-primary-950 text-center pt-24 pb-14">
      {/* Decorative background ambient glows */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full pointer-events-none opacity-40" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-gold-400/10 rounded-full pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <span className="inline-block px-3.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gold-300 text-xs font-semibold tracking-wider uppercase mb-3">
          {breadcrumb}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 tracking-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
