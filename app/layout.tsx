import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Carlos Acosta',
  description: 'Portfolio personal de proyectos y perfil profesional',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://portfolio-steel-kappa-78.vercel.app/'),
  openGraph: {
    title: 'Carlos Acosta - Portfolio',
    description: 'Personal Portfolio',
    url: 'https://portfolio-steel-kappa-78.vercel.app/',
    siteName: 'Carlos Acosta - Portfolio',
    images: [
      {
        url: '/cap.png',
        width: 1200,
        height: 630,
        alt: 'Carlos Acosta - Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Acosta - Portfolio',
    description: 'Personal Portfolio',
    creator: '@Carlosaac23',
    images: ['/cap.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${GeistSans.className} bg-neutral-50 dark:bg-neutral-950`}
      >
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <NavBar />
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
