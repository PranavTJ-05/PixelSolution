import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pixel Solutions - Smart Home Services & Hardware Maintenance',
  description: 'Your one-stop solution for smart home setup, device protection, tech support, and maintenance plans. Get doorstep service for all your smart home needs.',
  keywords: ['smart home', 'hardware services', 'tech support', 'maintenance plans', 'doorstep service', 'CRM', 'device protection'],
  openGraph: {
    title: 'Pixel Solutions - Smart Home Services & Hardware Maintenance',
    description: 'Your one-stop solution for smart home setup, device protection, tech support, and maintenance plans. Get doorstep service for all your smart home needs.',
    url: 'https://www.pixelsolutions.com', // Replace with your actual URL
    siteName: 'Pixel Solutions',
    images: [
      {
        url: 'https://www.pixelsolutions.com/og.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Pixel Solutions - Smart Home Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': 'large',
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Solutions - Smart Home Services & Hardware Maintenance',
    description: 'Your one-stop solution for smart home setup, device protection, tech support, and maintenance plans. Get doorstep service for all your smart home needs.',
    images: ['https://www.pixelsolutions.com/og.jpg'], // Replace with your actual OG image URL
    site: '@pixelsolutions', // Replace with your Twitter handle
    creator: '@pixelsolutions', // Replace with your Twitter handle
  },
};

export async function generateMetadata({ searchParams }: { searchParams: { device?: string } }): Promise<Metadata> {
  const device = searchParams?.device || 'Device';
  const title = `Extended Warranty Plans for Your ${device} | Pixel Solutions`;
  const description = `Protect your ${device} with our extended warranty plans. Get comprehensive coverage and peace of mind.`;

  return {
    title,
    description,
    keywords: ['extended warranty', device, 'device protection', 'hardware services', 'maintenance plans'],
    openGraph: {
      title,
      description,
      url: `https://www.pixelsolutions.com/extended-warranty?device=${device}`, // Replace with your actual URL
      siteName: 'Pixel Solutions',
      images: [
        {
          url: 'https://www.pixelsolutions.com/og.jpg', // Replace with your actual OG image URL
          width: 1200,
          height: 630,
          alt: `Extended Warranty for ${device}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.pixelsolutions.com/og.jpg'], // Replace with your actual OG image URL
      site: '@pixelsolutions', // Replace with your Twitter handle
      creator: '@pixelsolutions', // Replace with your Twitter handle
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
