import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MissionContent from './MissionContent';

export const metadata = {
  title: 'Our Mission | Khairiyyahh Learning Centre',
  description: 'Our mission, vision, and guiding principles at Khairiyyahh Learning Centre.',
};

export default function MissionPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><MissionContent /></main>
      <Footer />
    </div>
  );
}

