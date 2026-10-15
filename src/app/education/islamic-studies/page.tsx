import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import IslamicStudiesContent from './IslamicStudiesContent';

export const metadata = {
  title: 'Islamic Studies | Khairiyyah Learning Centre',
  description: 'Our comprehensive Islamic Studies program nurturing faith, knowledge, and character.',
};

export default function IslamicStudiesPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><IslamicStudiesContent /></main>
      <Footer />
    </div>
  );
}

