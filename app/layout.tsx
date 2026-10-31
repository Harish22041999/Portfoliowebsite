import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { personalData } from '@/data/personal';

export const metadata: Metadata = {
  metadataBase: new URL('https://drharish-geospatial.dev'),
  title: `${personalData.name} | Geospatial Solution Architect & Spatial AI Engineer`,
  description: `${personalData.heroBiography} Senior GIS Analyst, PhD in Remote Sensing & GIS, and software copyright holder for hydrological modeling automation.`,
  keywords: [
    'Dr. M. Harish',
    'Geospatial Engineer',
    'Remote Sensing',
    'GIS',
    'Spatial AI',
    'Earth Observation',
    'SWAT-MODFLOW',
    'Hydrodynamic Modeling',
    'DELUGE 3D',
    'SATVision',
    'Sentinel-1',
    'Sentinel-2',
    'Three.js',
    'MapLibre GL'
  ],
  authors: [{ name: personalData.name, url: 'https://drharish-geospatial.dev' }],
  creator: personalData.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drharish-geospatial.dev',
    title: `${personalData.name} — Geospatial Solution Architect | PhD in Remote Sensing & GIS`,
    description: personalData.heroBiography,
    siteName: `${personalData.name} Engineering Portfolio`,
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: `${personalData.name} - Geospatial Engineering & Spatial AI`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalData.name} — Geospatial Solution Architect`,
    description: personalData.heroBiography,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalData.name,
    jobTitle: personalData.currentRole,
    worksFor: {
      '@type': 'Organization',
      name: personalData.currentCompany,
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Tamil Nadu Agricultural University (TNAU)',
    },
    knowsAbout: [
      'Geospatial Engineering',
      'Earth Observation',
      'Satellite Remote Sensing',
      'Hydrodynamic Modeling',
      'Spatial Machine Learning',
      'SWAT-MODFLOW',
      'UAV Photogrammetry',
    ],
    email: `mailto:${personalData.email}`,
    url: 'https://drharish-geospatial.dev',
    description: personalData.heroBiography,
  };

  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.removeItem('theme');
                document.documentElement.classList.add('dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className="antialiased bg-[#08090B] text-[#D2D2D7] selection:bg-[#5AC8FA] selection:text-black min-h-screen flex flex-col font-sans"
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
