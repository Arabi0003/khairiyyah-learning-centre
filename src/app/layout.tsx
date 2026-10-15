import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Khairiyyahh Learning Centre | Knowledge and Conduct',
  description:
    'Khairiyyahh Learning Centre provides quality Islamic and academic education combining excellence in knowledge with moral conduct.',
  keywords: [
    'Khairiyyahh Learning Centre',
    'Islamic school Accra',
    'Muslim education Ghana',
    'Quran school',
    'Khairiyyahh',
  ],
  openGraph: {
    title: 'Khairiyyahh Learning Centre',
    description: 'Knowledge and Conduct — Quality Islamic and Academic Education.',
    type: 'website',
    url: 'https://www.Khairiyyahedu.com',
    images: ['/images/khairi.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/images/khairi.png" />
        <meta name="theme-color" content="#166534" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}

