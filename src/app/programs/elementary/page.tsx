import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ElementaryContent from './ElementaryContent';

export const metadata = {
  title: 'Elementary School | Khairiyyah Learning Centre',
  description: 'Our elementary program for grades 1-5 building strong academic and Islamic foundations.',
};

export default function ElementaryPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><ElementaryContent /></main>
      <Footer />
    </div>
  );
}

