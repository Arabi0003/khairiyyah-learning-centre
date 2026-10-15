import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EarlyChildhoodContent from './EarlyChildhoodContent';

export const metadata = {
  title: 'Early Childhood | Khairiyyah Learning Centre',
  description: 'Our nurturing early childhood program for Pre-K and Kindergarten students.',
};

export default function EarlyChildhoodPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><EarlyChildhoodContent /></main>
      <Footer />
    </div>
  );
}

