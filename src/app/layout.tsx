import type { Metadata } from 'next';
import { Inter, Georgia } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.khairiyyaedu.com'),
  title: 'Khairiyyah Learning Centre | Knowledge and Conduct',
  description:
    'Khairiyyah Learning Centre provides quality Islamic and academic education combining excellence in knowledge with moral conduct.',
  keywords: [
    'Khairiyyah Learning Centre',
    'Islamic school Accra',
    'Muslim education Ghana',
    'Quran school',
    'Khairiyyah',
  ],
  openGraph: {
    title: 'Khairiyyah Learning Centre',
    description: 'Knowledge and Conduct — Quality Islamic and Academic Education.',
    type: 'website',
    url: 'https://www.khairiyyaedu.com',
    images: ['/images/khairi.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        <link rel="icon" href="/images/khairi.png" />
        <meta name="theme-color" content="#166534" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
