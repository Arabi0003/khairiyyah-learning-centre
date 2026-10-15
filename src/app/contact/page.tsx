import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact Us | Khairiyyah Learning Centre',
  description: 'Get in touch with Khairiyyah Learning Centre. Contact us by phone, email, or visit our campus.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><ContactContent /></main>
      <Footer />
    </div>
  );
}

