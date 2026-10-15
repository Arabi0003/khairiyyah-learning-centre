'use client';

import { useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { MapPin, Maximize2, X } from 'lucide-react';

const facilities = [
  { id: 1, name: 'Main Academic Building', category: 'Academic', description: 'Modern classrooms equipped with interactive whiteboards and comfortable learning spaces.', emoji: '🏫' },
  { id: 2, name: 'Masjid & Prayer Hall', category: 'Spiritual', description: 'A beautiful prayer hall where students perform daily salah and attend Islamic gatherings.', emoji: '🕌' },
  { id: 3, name: 'Quran Memorization Hall', category: 'Spiritual', description: 'Dedicated space for hifz program with individual study corners and qualified instructors.', emoji: '📖' },
  { id: 4, name: 'Science Laboratory', category: 'Academic', description: 'Fully equipped lab for hands-on experiments in biology, chemistry, and physics.', emoji: '🔬' },
  { id: 5, name: 'Library & Media Center', category: 'Academic', description: 'Extensive collection of Islamic and academic resources with digital learning stations.', emoji: '📚' },
  { id: 6, name: 'Sports Complex', category: 'Recreation', description: 'Outdoor fields and indoor spaces for physical education and team sports.', emoji: '⚽' },
  { id: 7, name: 'Art & Calligraphy Room', category: 'Creative', description: 'Creative space for Islamic art, Arabic calligraphy, and artistic expression.', emoji: '🎨' },
  { id: 8, name: 'Cafeteria', category: 'Services', description: 'Halal kitchen serving nutritious meals in a clean and welcoming dining area.', emoji: '🍽️' },
  { id: 9, name: 'Playground', category: 'Recreation', description: 'Safe and stimulating play areas designed for different age groups.', emoji: '🎪' },
];

const categories = ['All', 'Academic', 'Spiritual', 'Recreation', 'Creative', 'Services'];

export default function CampusContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedFacility, setSelectedFacility] = useState<typeof facilities[0] | null>(null);

  const filtered = activeCategory === 'All' ? facilities : facilities.filter((f) => f.category === activeCategory);

  return (
    <>
      <PageHero
        title="Campus Tour"
        subtitle="Explore our thoughtfully designed campus where learning and faith come together"
        breadcrumb="Home / School / Campus Tour"
      />

      {/* Filter tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((facility, i) => (
              <AnimatedSection key={facility.id} animation="zoom" delay={i * 100}>
                <div
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedFacility(facility)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-gold-100 flex items-center justify-center relative overflow-hidden">
                    <span className="text-6xl group-hover:scale-125 transition-transform duration-500">{facility.emoji}</span>
                    <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300 flex items-center justify-center">
                      <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                    </div>
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-600">
                      {facility.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-charcoal text-lg mb-2">{facility.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-5" />
            <div className="relative z-10">
              <MapPin size={40} className="mx-auto mb-4 text-gold-300" />
              <h2 className="text-3xl font-heading font-bold mb-4">Visit Us In Person</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Nothing compares to experiencing our campus firsthand. Schedule a personal tour and see why families choose Khairiyyah.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedFacility(null)}>
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedFacility(null)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close">
              <X size={20} />
            </button>
            <div className="text-6xl mb-4">{selectedFacility.emoji}</div>
            <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium">{selectedFacility.category}</span>
            <h3 className="text-2xl font-heading font-bold text-charcoal mt-3 mb-3">{selectedFacility.name}</h3>
            <p className="text-gray-600 leading-relaxed">{selectedFacility.description}</p>
            <p className="text-gray-400 text-sm mt-4 italic">PLACEHOLDER: Replace with actual facility photos</p>
          </div>
        </div>
      )}
    </>
  );
}

