import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CampusContent from './CampusContent';

export const metadata = {
  title: 'Campus Tour | Khairiyyah Learning Centre',
  description: 'Take a virtual tour of our beautiful campus facilities.',
};

export default function CampusPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><CampusContent /></main>
      <Footer />
    </div>
  );
}

