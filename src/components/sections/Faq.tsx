'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Kicker } from '@/components/ds/Kicker';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Reveal } from '@/components/Reveal';

const FAQS = [
  {
    q: 'Vou pagar por serviço que eu não preciso?',
    a: 'Não. O diagnóstico mostra o que está gasto de verdade. Se não precisa trocar, a gente fala.',
  },
  {
    q: 'Dá pra parcelar?',
    a: 'Dá, em até 4x sem juros nos combos.',
  },
  {
    q: 'Preciso agendar ou posso chegar direto?',
    a: 'Manda mensagem no WhatsApp antes, assim já chega sabendo o horário certo para ser atendido sem espera.',
  },
];

export function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggle = (i: number) => setOpenFaq((current) => (current === i ? -1 : i));

  return (
    <section
      id="faq"
      style={{
        position: 'relative',
        /* zIndex baixo e sem overflow:hidden — o bloco transborda por baixo e a
           seção seguinte (zIndex maior) passa por cima dele. O contexto de
           empilhamento aqui impede que o zIndex interno do bloco escape. */
        zIndex: 1,
        padding: 'clamp(72px,10vw,132px) clamp(20px,5vw,44px) 0',
        /* Mesmo tom da imagem de fundo: emenda sem degrau com as vizinhas. */
        background: '#0e0e0e',
      }}
    >
      <Image
        src="/faq-pneus.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      {/* Overlay vertical: os pneus nascem e morrem no tom da seção. */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, #0e0e0e 0%, rgba(14,14,14,.55) 18%, rgba(14,14,14,.15) 45%, rgba(14,14,14,.6) 82%, #0e0e0e 100%)',
          pointerEvents: 'none',
        }}
      />
      <GrainOverlay />

      <Reveal
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 900,
          /* Some por baixo da seção seguinte. O padding inferior extra abaixo
             garante que só sobra vazio para ser coberto, nunca conteúdo. */
          margin: '0 auto calc(-1 * clamp(22px,2.6vw,44px))',
          background: 'rgba(17,17,19,.82)',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(245,244,242,.22)',
          borderRadius: 'clamp(20px,2.6vw,32px)',
          boxShadow: '0 30px 60px rgba(0,0,0,.55)',
          padding:
            'clamp(30px,4.5vw,64px) clamp(30px,4.5vw,64px) calc(clamp(30px,4.5vw,64px) + clamp(22px,2.6vw,44px))',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 'clamp(28px,4vw,44px)' }}>
          <Kicker color="red" bar={false}>
            FAQ
          </Kicker>
          <h2
            style={{
              margin: '14px 0 0',
              fontFamily: 'var(--font-display)',
              fontStyle: 'normal',
              fontWeight: 600,
              textTransform: 'none',
              lineHeight: 1.12,
              fontSize: 'clamp(24px,3vw,34px)',
              color: 'var(--rp-ink-100)',
              textWrap: 'balance',
            }}
          >
            Antes de você perguntar.
          </h2>
        </div>

        <div style={{ borderTop: '1px solid rgba(245,244,242,.14)' }}>
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} style={{ borderBottom: '1px solid rgba(245,244,242,.14)' }}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '22px 2px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: 'clamp(16px,1.7vw,20px)',
                    color: 'var(--rp-ink-100)',
                  }}
                >
                  <span>{f.q}</span>
                  <span
                    aria-hidden
                    style={{
                      flex: '0 0 auto',
                      width: 32,
                      height: 32,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--grad-red)',
                      color: '#fff',
                      fontSize: 20,
                      lineHeight: 1,
                    }}
                  >
                    {open ? '−' : '+'}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: open ? '320px' : '0px',
                    opacity: open ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height .4s cubic-bezier(0.2,0.8,0.2,1), opacity .3s ease',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      padding: '0 2px 24px',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: 'clamp(15px,1.4vw,16px)',
                      lineHeight: 1.6,
                      color: 'var(--rp-ink-70)',
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
