import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import QuranContent from './QuranContent';

export const metadata = {
  title: 'Quran Program | Khairiyyahh Learning Centre',
  description: 'Our Quran memorization and tajweed program for all levels.',
};

export default function QuranPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><QuranContent /></main>
      <Footer />
    </div>
  );
}

