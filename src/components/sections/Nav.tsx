import Image from 'next/image';

import { CTAButton } from '@/components/ds/CTAButton';
import { WhatsAppIcon } from '@/components/icons';
import { site } from '@/lib/site';

const LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#unidades', label: 'Onde estamos' },
];

export function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        /* Grade de 3 colunas em vez de space-between: com as laterais em 1fr, a
           coluna do meio fica no centro real da barra, e não onde a sobra de
           espaço a jogar — a marca e o bloco do CTA têm larguras diferentes. */
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: 16,
        padding: '14px clamp(20px,5vw,44px)',
        background: 'rgba(11,11,11,0.82)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Faixa da marca: vermelho cheio na origem, desmaiando até a direita. */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          background:
            'linear-gradient(90deg, var(--rp-red) 0%, var(--rp-red) 18%, var(--rp-red-shadow) 52%, rgba(225,20,20,.16) 100%)',
          pointerEvents: 'none',
        }}
      />
      <a
        href="#topo"
        style={{ display: 'inline-flex', alignItems: 'center', justifySelf: 'start' }}
        aria-label="Rodão Pneus, ir para o topo"
      >
        <Image
          src="/logo-rodao-header.png"
          alt="Rodão Pneus"
          width={490}
          height={346}
          priority
          style={{ height: 'clamp(36px,4.4vw,46px)', width: 'auto' }}
        />
      </a>

      <ul
        className="rp-nav-links"
        style={{ margin: 0, padding: 0, listStyle: 'none' }}
      >
        {LINKS.map((l) => (
          <li key={l.href}>
            <a className="rp-nav-link" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifySelf: 'end',
          gap: 'clamp(10px,2vw,22px)',
        }}
      >
        <span
          className="rp-nav-hours"
          style={{
            flexDirection: 'column',
            lineHeight: 1.05,
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            textTransform: 'none',
            letterSpacing: '.08em',
            fontSize: 12,
            color: 'var(--rp-ink-70)',
            textAlign: 'right',
          }}
        >
          <span style={{ color: 'var(--rp-gold)' }}>Aberto seg–sáb</span>
          <span>7:30 às 17:30</span>
        </span>
        <CTAButton
          as="a"
          href={site.whatsapp}
          target="_blank"
          rel="noopener"
          variant="whatsapp"
          size="sm"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </CTAButton>
      </div>
    </nav>
  );
}
