'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom' | 'flip';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediate check if element is near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '100px 0px' } // Pre-triggers 100px before scrolling into view!
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Snappy 250ms transitions
  const animations: Record<string, { hidden: string; visible: string }> = {
    'fade-up': { hidden: 'opacity-0 translate-y-3', visible: 'opacity-100 translate-y-0' },
    'fade-left': { hidden: 'opacity-0 -translate-x-3', visible: 'opacity-100 translate-x-0' },
    'fade-right': { hidden: 'opacity-0 translate-x-3', visible: 'opacity-100 translate-x-0' },
    'zoom': { hidden: 'opacity-0 scale-98', visible: 'opacity-100 scale-100' },
    'flip': { hidden: 'opacity-0', visible: 'opacity-100' },
  };

  const anim = animations[animation] || animations['fade-up'];

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ease-out will-change-transform ${
        isVisible ? anim.visible : anim.hidden
      } ${className}`}
      style={{ transitionDelay: isVisible && delay < 200 ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
