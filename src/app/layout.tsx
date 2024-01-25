import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Emotion Detection`,
  description: 'Emotion detection website demo created for COSC380 Artificial Intelligence.',
  category: 'Technology',
  keywords: ['Technology', 'emotion', 'detection'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='light'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
