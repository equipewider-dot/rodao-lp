import Image from 'next/image';

import { BenefitItem } from '@/components/ds/BenefitItem';
import { Kicker } from '@/components/ds/Kicker';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Reveal } from '@/components/Reveal';

export function PorQueConfiar() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(72px,10vw,132px) clamp(20px,5vw,44px)',
        background: 'var(--rp-black)',
      }}
    >
      <Image
        src="/porqueconfiar.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      {/* A foto é clara e de dia — sem overlay forte o texto some. */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(100deg, rgba(11,11,11,.95) 0%, rgba(11,11,11,.88) 40%, rgba(11,11,11,.55) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Fecha nas bordas de cima e de baixo para emendar com as seções vizinhas. */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, var(--rp-black) 0%, rgba(11,11,11,0) 22%, rgba(11,11,11,0) 72%, var(--rp-black) 100%)',
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
        <Reveal style={{ maxWidth: 620 }}>
          <Kicker color="red">Por que confiar</Kicker>
          <h2
            style={{
              margin: '18px 0 0',
              fontFamily: 'var(--font-display)',
              fontStyle: 'normal',
              fontWeight: 600,
              textTransform: 'none',
              lineHeight: 1.12,
              letterSpacing: '.005em',
              fontSize: 'clamp(28px,3.8vw,44px)',
              color: 'var(--rp-ink-100)',
              textWrap: 'balance',
            }}
          >
            Mais de <span style={{ color: 'var(--rp-gold)' }}>30 anos</span> de atendimento.
          </h2>
          <p
            style={{
              margin: '22px 0 0',
              maxWidth: '46ch',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: 'clamp(15px,1.5vw,17px)',
              lineHeight: 1.6,
              color: 'var(--rp-ink-70)',
            }}
          >
            A Rodão está na Serra há mais de três décadas, e quem chega até aqui na maior parte das
            vezes chega porque alguém indicou. Isso só acontece quando o carro sai da oficina do jeito
            que devia, com o que precisava trocado e nada além disso. É esse mesmo padrão que a equipe
            segue com você.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            <BenefitItem>Diagnóstico transparente, item por item</BenefitItem>
            <BenefitItem>Técnicos experientes, atendimento direto</BenefitItem>
            <BenefitItem highlight>Só troca o que realmente precisa</BenefitItem>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
