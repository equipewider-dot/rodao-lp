import type { ComponentType, ReactNode } from 'react';

import { Kicker } from '@/components/ds/Kicker';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Reveal } from '@/components/Reveal';
import { ChatIcon, CheckCircleIcon, KeyIcon, SearchIcon } from '@/components/icons';

type Passo = {
  id: string;
  Icon: ComponentType<{ size?: number }>;
  gold?: boolean;
  text: ReactNode;
};

const PASSOS: Passo[] = [
  {
    id: 'conta',
    Icon: ChatIcon,
    text: (
      <>
        <strong style={{ color: 'var(--rp-ink-100)', fontWeight: 600 }}>
          Você conta o que o carro está fazendo.
        </strong>{' '}
        Barulho, vibração, luz acesa, o que for.
      </>
    ),
  },
  {
    id: 'diagnostico',
    Icon: SearchIcon,
    text: (
      <>
        <strong style={{ color: 'var(--rp-ink-100)', fontWeight: 600 }}>
          A equipe faz o diagnóstico
        </strong>{' '}
        e te mostra exatamente o que está gasto.
      </>
    ),
  },
  {
    id: 'aprova',
    Icon: CheckCircleIcon,
    text: (
      <>
        <strong style={{ color: 'var(--rp-ink-100)', fontWeight: 600 }}>
          Você aprova só o que faz sentido
        </strong>{' '}
        para o seu bolso e para o seu carro.
      </>
    ),
  },
  {
    id: 'entrega',
    Icon: KeyIcon,
    gold: true,
    text: (
      <>
        <strong style={{ color: 'var(--rp-ink-100)', fontWeight: 600 }}>
          Serviço feito, carro testado.
        </strong>{' '}
        Você sai sabendo o que foi trocado e por quê.
      </>
    ),
  },
];

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      style={{
        position: 'relative',
        padding: 'clamp(72px,10vw,132px) clamp(20px,5vw,44px)',
        background: 'var(--rp-black)',
      }}
    >
      <GrainOverlay />

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        <Reveal>
          <Kicker color="gold">Como funciona</Kicker>

          <div className="rp-section-head" style={{ marginTop: 18 }}>
            <h2
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontStyle: 'normal',
                fontWeight: 600,
                textTransform: 'none',
                lineHeight: 1.12,
                letterSpacing: '.005em',
                fontSize: 'clamp(26px,3.2vw,38px)',
                color: 'var(--rp-ink-100)',
                textWrap: 'balance',
              }}
            >
              Do problema até o carro pronto, sem enrolação.
            </h2>

            <p
              className="rp-section-head-aside"
              style={{
                margin: 0,
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: 'clamp(15px,1.5vw,17px)',
                lineHeight: 1.65,
                color: 'var(--rp-ink-70)',
              }}
            >
              Quatro passos, do primeiro contato até a entrega. Nada acontece no seu carro{' '}
              <strong style={{ color: 'var(--rp-ink-100)', fontWeight: 600 }}>
                sem a sua aprovação
              </strong>
              .
            </p>
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 'clamp(56px,6vw,84px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: 20,
          }}
        >
          {PASSOS.map((p) => (
            <Reveal
              key={p.id}
              style={{
                position: 'relative',
                background: 'var(--grad-panel)',
                border: '1px solid var(--rp-line)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(28px,3.2vw,36px)',
              }}
            >
              <span
                aria-hidden
                style={{
                  display: 'inline-flex',
                  color: p.gold ? 'var(--rp-gold)' : 'var(--rp-red)',
                }}
              >
                <p.Icon size={28} />
              </span>
              <p
                style={{
                  margin: '20px 0 0',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'var(--rp-ink-70)',
                }}
              >
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
