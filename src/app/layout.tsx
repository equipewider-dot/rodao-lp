import type { Metadata } from 'next';
import { Saira_Condensed, Barlow_Semi_Condensed } from 'next/font/google';
import './globals.css';

/* Pesos médios (500/600) para os títulos — o itálico sintetizado e os pesos
   900 do export original deixavam a página pesada demais. */
const sairaCondensed = Saira_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-saira-condensed',
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-barlow-semi-condensed',
});

export const metadata: Metadata = {
  title: 'Rodão Pneus | Autocenter na Serra-ES há mais de 30 anos',
  description:
    'Pneus, freios, suspensão e manutenção na Serra-ES. Diagnóstico honesto: a Rodão Pneus só troca o que realmente precisa ser trocado.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sairaCondensed.variable} ${barlowSemiCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
