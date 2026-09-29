import type {Metadata} from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Parvus Space | Private Digital Architecture for Medical & Dental Practices',
  description: 'Estúdio de alta engenharia de software e arquitetura digital de conversão para clínicas médicas e odontológicas de altíssimo padrão.',
  metadataBase: new URL('https://parvuspace.com.br'),
  openGraph: {
    title: 'Parvus Space | O Paradoxo da Clínica de Luxo',
    description: 'Alta engenharia de conversão e arquitetura digital mobile-first para clínicas de elite em Campinas, Jardins e Faria Lima.',
    url: 'https://parvuspace.com.br',
    siteName: 'Parvus Space',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parvus Space | Private Digital Architecture',
    description: 'Arquitetura digital e engenharia de conversão para clínicas médicas e odontológicas de altíssimo padrão.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${plusJakarta.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-[#09090B] text-[#F4F4F5] font-sans antialiased selection:bg-[#D4AF37]/20 selection:text-[#E5C378]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

