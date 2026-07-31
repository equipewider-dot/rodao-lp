import Image from 'next/image';

import { CTAButton } from '@/components/ds/CTAButton';
import { Kicker } from '@/components/ds/Kicker';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Reveal } from '@/components/Reveal';
import { DiagnosisIcon, FamilyIcon, ShieldCheckIcon, WhatsAppIcon } from '@/components/icons';
import { site } from '@/lib/site';

const DESTAQUES = [
  {
    id: 'diagnostico',
    Icon: DiagnosisIcon,
    text: 'Diagnóstico antes do orçamento,',
    strong: 'sem surpresa na conta',
  },
  {
    id: 'garantia',
    Icon: ShieldCheckIcon,
    text: 'Peça e serviço com',
    strong: 'garantia por escrito',
  },
  {
    id: 'familias',
    Icon: FamilyIcon,
    text: 'Mais de 30 anos atendendo',
    strong: 'famílias da Serra-ES',
  },
];

export function Hero() {
  return (
    <header
      id="topo"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(56px,9vw,110px) clamp(20px,5vw,44px) clamp(64px,9vw,120px)',
      }}
    >
      <Image
        src="/hero-novo.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="rp-hero-photo"
        /* A arte é 21:9 e o carro vive no quarto direito. Ancorar em 72%
           mantém carro e lanterna no enquadramento quando a tela estreita e o
           corte passa a ser horizontal. */
        style={{ objectFit: 'cover', objectPosition: '72% center', zIndex: 0 }}
      />
      {/* Véu do texto. Mora no CSS porque muda de forma por breakpoint: no
          desktop é lateral e leve, no mobile é parelho e forte. */}
      <div aria-hidden className="rp-hero-veil" />
      {/* Emenda com Sinais. Sobe de baixo para cima no MESMO --rp-black do fundo
          da seção seguinte, então a base do hero e o topo dela são o mesmo pixel.
          Os stops são progressivos de propósito: uma rampa linear marca a linha
          onde a foto ainda aparece. Fica leve até 62%, que é onde o carro vive. */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: [
            'linear-gradient(180deg,',
            'rgba(11,11,11,.35) 0%,',
            'rgba(11,11,11,0) 34%,',
            'rgba(11,11,11,.10) 62%,',
            'rgba(11,11,11,.40) 80%,',
            'rgba(11,11,11,.76) 91%,',
            'var(--rp-black) 100%)',
          ].join(' '),
          pointerEvents: 'none',
        }}
      />
      <GrainOverlay />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1180,
          margin: '0 auto',
        }}
      >
        {/* Entrada escalonada: cada peça sobe um pouco depois da anterior, na
            ordem em que se lê. Os atrasos são pequenos de propósito — a abertura
            inteira fecha em menos de 1s. */}
        <Reveal>
          <Kicker color="red">Rodão desde 1989 · Serra-ES</Kicker>
        </Reveal>
        <Reveal delay={90}>
          <h1
            style={{
              margin: '16px 0 0',
              fontFamily: 'var(--font-display)',
              fontStyle: 'normal',
              fontWeight: 600,
              textTransform: 'none',
              lineHeight: 1.1,
              letterSpacing: '.005em',
              fontSize: 'clamp(30px,4.2vw,52px)',
              color: 'var(--rp-ink-100)',
            }}
          >
            {/* Quebra fixa depois de "antes". Saiu o textWrap:balance junto: ele
                redistribuiria as linhas por conta e brigaria com a quebra. */}
            O carro avisa <span style={{ color: 'var(--rp-red)' }}>antes</span>
            <br />
            de parar de vez.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p
            style={{
              margin: '22px 0 0',
              maxWidth: '34ch',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 'clamp(15px,1.5vw,17px)',
              lineHeight: 1.5,
              color: 'var(--rp-ink-70)',
            }}
          >
            Pneu gasto, freio arranhando, volante vibrando no meio da pista. A Rodão Pneus
            diagnostica certo e só troca o que{' '}
            <strong style={{ color: 'var(--rp-ink-100)' }}>realmente precisa</strong> ser trocado. Há
            mais de 30 anos cuidando de carro aqui na Serra.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
            <CTAButton as="a" href={site.whatsapp} target="_blank" rel="noopener">
              <WhatsAppIcon size={17} />
              Falar no WhatsApp
            </CTAButton>
            <CTAButton as="a" href="#servicos" variant="ghost">
              Ver serviços
            </CTAButton>
          </div>
        </Reveal>

        {/* Faixa de reforço no rodapé do hero — três garantias com ícone. */}
        <div style={{ marginTop: 'clamp(48px,7vw,88px)' }}>
          {/* Era `border-top` do grid; virou elemento próprio para poder ser
              desenhado da esquerda para a direita. */}
          <span
            aria-hidden
            className="rp-hero-rule"
            style={{ display: 'block', height: 1, background: 'rgba(245,244,242,.12)' }}
          />
          <div
            style={{
              paddingTop: 26,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
              justifyItems: 'center',
              gap: '24px 32px',
            }}
          >
            {DESTAQUES.map((d, i) => (
              <Reveal key={d.id} delay={780 + i * 110}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    maxWidth: 300,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: 1.4,
                    color: 'var(--rp-ink-45)',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      color: 'var(--rp-ink-100)',
                      flex: '0 0 auto',
                      display: 'inline-flex',
                    }}
                  >
                    <d.Icon size={22} />
                  </span>
                  <span>
                    {d.text}{' '}
                    <strong style={{ color: 'var(--rp-ink-100)', fontWeight: 600 }}>
                      {d.strong}
                    </strong>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
