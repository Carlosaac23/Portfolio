import './globals.css';
import type { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Carlos Acosta',
  description: 'Portfolio personal de proyectos y perfil profesional',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={GeistSans.className}>
          <NavBar />
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
