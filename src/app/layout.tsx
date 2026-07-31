import type { Metadata } from 'next';
import { Saira_Condensed, Barlow_Semi_Condensed } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const GTM_ID = 'GTM-WHX6D6T4';

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
      {/* Google Tag Manager. O <Script> do Next injeta no <head>; `afterInteractive`
          é a estratégia recomendada para GTM — carrega assim que a página fica
          interativa, sem bloquear a pintura do hero. */}
      <Script
        id="gtm-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <body>
        {/* Google Tag Manager (noscript) — primeiro filho do <body>. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
