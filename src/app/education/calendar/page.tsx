import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CalendarContent from './CalendarContent';

export const metadata = {
  title: 'Academic Calendar | Khairiyyah Learning Centre',
  description: 'View our academic calendar with important dates, events, and holidays.',
};

export default function CalendarPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><CalendarContent /></main>
      <Footer />
    </div>
  );
}

