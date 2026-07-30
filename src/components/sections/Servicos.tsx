import Image from 'next/image';
import type { ReactNode } from 'react';

import { Kicker } from '@/components/ds/Kicker';
import { ServiceChip } from '@/components/ds/ServiceChip';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Reveal } from '@/components/Reveal';
import { BrakeIcon, OilDropIcon, TireIcon } from '@/components/icons';

type Servico = {
  id: string;
  icon: ReactNode;
  title: string;
  text: string;
  chips: string[];
  photo: string;
  /** Descreve a foto para leitor de tela. */
  photoAlt: string;
};

const SERVICOS: Servico[] = [
  {
    id: 'pneus',
    icon: <TireIcon />,
    title: 'Pneus e rodas',
    text: 'O pneu certo, calibrado e alinhado do jeito certo, é a diferença entre um carro seguro e um carro que engana.',
    chips: ['Pneus', 'Rodas', 'Alinhamento', 'Balanceamento'],
    photo: '/servico-pneus.jpg',
    photoAlt: 'Pneu e roda de liga leve em detalhe',
  },
  {
    id: 'freios',
    icon: <BrakeIcon />,
    title: 'Freios e suspensão',
    text: 'Freio não é peça pra economizar. A gente mostra o que está gasto e o que ainda tem vida útil, sem forçar troca desnecessária.',
    chips: ['Freios', 'Suspensão', 'Revisão de freios'],
    photo: '/servico-freios.jpg',
    photoAlt: 'Disco de freio e pinça expostos na suspensão do carro',
  },
  {
    id: 'manutencao',
    icon: <OilDropIcon />,
    title: 'Manutenção preventiva',
    text: 'Aquela manutenção simples que evita o problema grande lá na frente.',
    chips: ['Troca de óleo', 'Filtros', 'Palhetas', 'Escapamento', 'Revisão'],
    photo: '/servico-manutencao.jpg',
    photoAlt: 'Mecânico trabalhando no motor com o capô aberto',
  },
];

export function Servicos() {
  return (
    <section
      id="servicos"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(72px,10vw,132px) clamp(20px,5vw,44px)',
        /* Painel erguido e arredondado — separa das seções pretas em cima e embaixo. */
        background: '#121316',
        border: '1px solid var(--rp-line)',
        borderRadius: 'clamp(24px,3vw,40px)',
      }}
    >
      {/* Focos de luz nas laterais, atrás do conteúdo. */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translate(-45%,-50%)',
          width: 'clamp(280px,34%,560px)',
          aspectRatio: '1 / 1.5',
          background:
            'radial-gradient(closest-side, rgba(245,244,242,.11) 0%, rgba(245,244,242,.04) 45%, rgba(245,244,242,0) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translate(45%,-50%)',
          width: 'clamp(280px,34%,560px)',
          aspectRatio: '1 / 1.5',
          background:
            'radial-gradient(closest-side, rgba(225,20,20,.13) 0%, rgba(225,20,20,.05) 45%, rgba(225,20,20,0) 100%)',
          pointerEvents: 'none',
        }}
      />
      <GrainOverlay />

      <div
        style={{
          position: 'relative',
          maxWidth: 1180,
          margin: '0 auto',
        }}
      >
        <Reveal>
          <Kicker color="red">Serviços</Kicker>

          {/* Kicker fora do grid: assim título e apoio começam na mesma linha. */}
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
              Tudo que o seu carro precisa, resolvido em um lugar só.
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
              Sem precisar levar o carro em três lugares diferentes. E com o orçamento{' '}
              <strong style={{ color: 'var(--rp-ink-100)', fontWeight: 600 }}>
                sempre antes do serviço
              </strong>
              .
            </p>
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 'clamp(48px,6vw,76px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {SERVICOS.map((s) => (
            <Reveal
              key={s.id}
              className="rp-service-row"
              style={{
                overflow: 'hidden',
                border: '1px solid var(--rp-line)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
            <div
              style={{
                position: 'relative',
                background: 'var(--rp-black)',
                padding: 'clamp(30px,4vw,60px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 32,
              }}
            >
              <GrainOverlay />
              <span
                aria-hidden
                style={{ position: 'relative', display: 'inline-flex', color: 'var(--rp-red)' }}
              >
                {s.icon}
              </span>

              <div style={{ position: 'relative' }}>
                <h3
                  style={{
                    margin: '0 0 10px',
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: 'clamp(20px,2.2vw,26px)',
                    color: 'var(--rp-ink-100)',
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    margin: '0 0 20px',
                    maxWidth: '42ch',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: 'var(--rp-ink-70)',
                  }}
                >
                  {s.text}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {s.chips.map((chip, i) => (
                    <ServiceChip key={chip} active={i === 0}>
                      {chip}
                    </ServiceChip>
                  ))}
                </div>
              </div>
            </div>

              <div className="rp-service-media">
                <Image
                  src={s.photo}
                  alt={s.photoAlt}
                  fill
                  sizes="(max-width: 880px) 100vw, 700px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
