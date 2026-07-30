import Image from 'next/image';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppGlyph,
  YoutubeIcon,
} from '@/components/icons';
import { site } from '@/lib/site';

const REDES = [
  { href: site.social.instagram, Icon: InstagramIcon, label: '@rodaopneus' },
  { href: site.social.facebook, Icon: FacebookIcon, label: 'Facebook' },
  { href: site.social.youtube, Icon: YoutubeIcon, label: 'YouTube' },
  { href: site.social.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
];

const labelStyle = {
  display: 'block' as const,
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  textTransform: 'none' as const,
  letterSpacing: '.12em',
  fontSize: 12,
  color: 'var(--rp-gold)',
  marginBottom: 14,
};

const bodyStyle = {
  margin: 0,
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 15,
  lineHeight: 1.55,
  color: 'var(--rp-ink-70)',
};

export function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        padding: 'clamp(44px,6vw,64px) clamp(20px,5vw,44px) 40px',
        background: '#080808',
        borderTop: '1px solid var(--rp-line)',
      }}
    >
      <div className="rp-footer-grid">
        <div>
          <Image
            src="/logo-rodao.png"
            alt="Rodão Pneus"
            width={500}
            height={500}
            style={{ width: 'clamp(96px,11vw,118px)', height: 'auto' }}
          />
          <p
            style={{
              /* 8px e não 16: a arte do logo tem folga transparente na base do
                 canvas, então o vão ótico já vem embutido nela. */
              margin: '8px 0 0',
              maxWidth: '32ch',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 1.5,
              color: 'var(--rp-ink-45)',
            }}
          >
            Autocenter na Serra-ES há mais de 30 anos. Pneus, freios, suspensão e manutenção. Só o
            que o carro precisa.
          </p>
        </div>

        <div>
          <span style={labelStyle}>Endereço</span>
          <p style={bodyStyle}>
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.zip}
          </p>
        </div>

        <div>
          <span style={labelStyle}>Redes</span>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 11 }}>
            {REDES.map((r) => (
              <li key={r.href}>
                <a className="rp-social-link" href={r.href} target="_blank" rel="noopener">
                  <r.Icon size={18} />
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span style={labelStyle}>Horário</span>
          <p style={bodyStyle}>
            Seg a sex: {site.hours.weekdays}
            <br />
            Sábado: {site.hours.saturday}
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 16,
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              textTransform: 'none',
              letterSpacing: '.06em',
              fontSize: 14,
              color: 'var(--rp-red)',
            }}
          >
            <WhatsAppGlyph size={18} />
            WhatsApp da loja
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1180,
          margin: '36px auto 0',
          paddingTop: 20,
          borderTop: '1px solid var(--rp-line)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px 20px',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 13,
          color: 'var(--rp-ink-45)',
        }}
      >
        <span>© {new Date().getFullYear()} Rodão Pneus. Todos os direitos reservados.</span>
        <span>Serra · Espírito Santo</span>
      </div>
    </footer>
  );
}
