import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FacultyContent from './FacultyContent';

export const metadata = {
  title: 'Faculty & Staff | Khairiyyah Learning Centre',
  description: 'Meet our dedicated team of educators and staff members.',
};

export default function FacultyPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><FacultyContent /></main>
      <Footer />
    </div>
  );
}

