import Image from 'next/image';

import { CTAButton } from '@/components/ds/CTAButton';
import { Kicker } from '@/components/ds/Kicker';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Reveal } from '@/components/Reveal';
import { AlignmentIcon, BrakeIcon, OilDropIcon, SteeringWheelIcon } from '@/components/icons';
import { site } from '@/lib/site';

const SINAIS = [
  {
    id: 'alinhamento',
    Icon: AlignmentIcon,
    title: 'Carro puxando pra um lado',
    text: 'Geralmente é alinhamento, às vezes é coisa maior. Vale checar antes de rodar mais uma semana assim.',
  },
  {
    id: 'balanceamento',
    Icon: SteeringWheelIcon,
    title: 'Volante vibrando na estrada',
    text: 'Sinal clássico de balanceamento pedindo serviço.',
  },
  {
    id: 'freio',
    Icon: BrakeIcon,
    title: 'Freio arranhando ou "puxando"',
    text: 'O tipo de coisa que não espera pro mês que vem.',
  },
  {
    id: 'oleo',
    Icon: OilDropIcon,
    title: 'Óleo passando da troca',
    text: 'Motor trabalhando sujo por mais tempo do que devia.',
  },
];

export function Sinais() {
  return (
    <section
      style={{
        position: 'relative',
        /* Topo bem menor que a base: o hero já entrega uns 120px de respiro no
           rodapé dele, e somados viravam quase 250px de vazio entre as duas. */
        padding: 'clamp(28px,3.5vw,52px) clamp(20px,5vw,44px) clamp(72px,10vw,132px)',
        background: 'var(--rp-black)',
      }}
    >
      <GrainOverlay />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        <div className="rp-sinais-grid">
          {/* Sem largura própria: o texto mede exatamente as duas colunas de
              cards, então continua casando com elas se a grade mudar. */}
          {/* Item da grade é este div; a entrada escalonada acontece dentro dele.
              Fossem três Reveals soltos, virariam três células e a grade quebrava. */}
          <div className="rp-sinais-head">
            <Reveal>
              <Kicker color="gold">Sinais de alerta</Kicker>
            </Reveal>
            <Reveal delay={90}>
              <h2
              style={{
                margin: '18px 0 0',
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
                Você não precisa entender de carro. Só precisa prestar atenção nisso:
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p
              style={{
                margin: '20px auto 0',
                maxWidth: '58ch',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: 'clamp(15px,1.5vw,17px)',
                lineHeight: 1.6,
                color: 'var(--rp-ink-70)',
              }}
            >
                O carro quase sempre avisa antes de dar problema sério. A questão é que a maioria
                das pessoas só percebe o aviso depois que já custou caro.
              </p>
            </Reveal>
          </div>

          {SINAIS.map((s, i) => (
            <Reveal
              key={s.id}
              /* Cascata na ordem de leitura da grade 2×2. */
              delay={i * 90}
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--grad-panel)',
                border: '1px solid var(--rp-line)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(28px,3.2vw,36px)',
              }}
            >
              <GrainOverlay />
              <div style={{ position: 'relative' }}>
                <span aria-hidden style={{ display: 'inline-flex', color: 'var(--rp-red)' }}>
                  <s.Icon size={28} />
                </span>
                <h3
                  style={{
                    margin: '20px 0 10px',
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: 'clamp(18px,1.8vw,21px)',
                    color: 'var(--rp-ink-100)',
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: 'var(--rp-ink-70)',
                  }}
                >
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            className="rp-sinais-cta"
            /* Fecha a cascata: entra depois dos quatro cards. */
            delay={330}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 'var(--radius-md)',
              /* A foto é `fill`, então não gera altura: sem este mínimo o card
                 encolheria para o tamanho do texto quando sai da grade de 3
                 colunas e vira item empilhado. */
              minHeight: 'clamp(340px,42vw,420px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Image
              src="/sinaisdealerta.png"
              alt="Atendente da Rodão Pneus ao lado de um pneu novo na loja"
              fill
              sizes="(max-width: 1020px) 100vw, 400px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            {/* Dois véus. O de cima é leve, só assenta a foto clara na seção
                escura. O da base é fechado porque o piso da loja é cinza claro e
                o texto é branco — sem ele não lê. */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: [
                  'linear-gradient(180deg, rgba(11,11,11,.45) 0%, rgba(11,11,11,.16) 20%, rgba(11,11,11,0) 42%)',
                  'linear-gradient(180deg, rgba(11,11,11,0) 30%, rgba(11,11,11,.72) 58%, rgba(11,11,11,.96) 100%)',
                ].join(','),
                pointerEvents: 'none',
              }}
            />
            {/* Alinhado à direita: o pneu e o atendente ocupam a esquerda da foto,
                a direita é piso vazio. */}
            <div
              style={{
                position: 'relative',
                padding: 'clamp(24px,2.6vw,32px)',
                textAlign: 'right',
              }}
            >
              <h3
                style={{
                  margin: '0 0 18px',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: 'clamp(19px,2vw,24px)',
                  color: '#fff',
                  lineHeight: 1.2,
                  textWrap: 'balance',
                }}
              >
                Reconheceu algum? Manda a gente ver.
              </h3>
              <CTAButton as="a" href={site.whatsapp} target="_blank" rel="noopener" size="sm">
                Descrever no WhatsApp
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
