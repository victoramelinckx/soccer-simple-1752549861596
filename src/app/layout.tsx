
import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalyticsScript } from '@/components/GoogleAnalyticsScript';
import './globals.css';

export const metadata: Metadata = { 
  title: 'Soccer Simple',
  description: 'Sitio web de Soccer Simple'
};

export const viewport: Viewport = { 
  width: 'device-width', 
  initialScale: 1 
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Toaster />
        <GoogleAnalyticsScript />
      </body>
    </html>
  );
}