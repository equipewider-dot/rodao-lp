import { Kicker } from '@/components/ds/Kicker';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Reveal } from '@/components/Reveal';

type Depoimento = { id: string; nome: string; texto: string };

/* ⚠️ CONTEÚDO RESERVADO — trocar pelos depoimentos reais antes de publicar.
   Basta substituir `nome` e `texto` de cada item; o carrossel se ajusta a
   qualquer quantidade a partir de 4. */
const DEPOIMENTOS: Depoimento[] = [
  {
    id: 'd1',
    nome: 'Nome do cliente',
    texto:
      'Espaço reservado para o depoimento real do cliente. Aqui entra, nas palavras dele, o que aconteceu com o carro e como foi o atendimento na Rodão.',
  },
  {
    id: 'd2',
    nome: 'Nome do cliente',
    texto:
      'Espaço reservado para o depoimento real do cliente. Depoimentos que citam um serviço específico, como alinhamento, freio ou troca de óleo, costumam convencer mais do que elogios genéricos.',
  },
  {
    id: 'd3',
    nome: 'Nome do cliente',
    texto:
      'Espaço reservado para o depoimento real do cliente. Vale destacar quem chegou por indicação, já que é o que a seção anterior afirma.',
  },
  {
    id: 'd4',
    nome: 'Nome do cliente',
    texto:
      'Espaço reservado para o depoimento real do cliente. Se houver relato de orçamento que veio antes do serviço, é o que melhor sustenta a promessa da página.',
  },
  {
    id: 'd5',
    nome: 'Nome do cliente',
    texto:
      'Espaço reservado para o depoimento real do cliente. Textos de duas a quatro linhas funcionam melhor no formato do card.',
  },
  {
    id: 'd6',
    nome: 'Nome do cliente',
    texto:
      'Espaço reservado para o depoimento real do cliente. Cliente antigo, que volta há anos, reforça bem os mais de 30 anos de casa.',
  },
];

function Estrelas() {
  return (
    <span aria-label="5 de 5 estrelas" style={{ display: 'inline-flex', gap: 2, flex: '0 0 auto' }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--rp-red)" aria-hidden>
          <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9z" />
        </svg>
      ))}
    </span>
  );
}

function Card({ d }: { d: Depoimento }) {
  return (
    <article
      style={{
        flex: '0 0 auto',
        width: 'clamp(280px,26vw,360px)',
        marginRight: 20,
        background: 'var(--grad-panel)',
        border: '1px solid var(--rp-line)',
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(24px,2.6vw,30px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          aria-hidden
          style={{
            width: 38,
            height: 38,
            flex: '0 0 auto',
            borderRadius: '50%',
            background: 'var(--rp-panel-2)',
            border: '1px solid var(--rp-line)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--rp-ink-45)',
          }}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8.5" r="3.5" />
            <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
          </svg>
        </span>
        <span
          style={{
            flex: '1 1 auto',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 15,
            color: 'var(--rp-ink-100)',
          }}
        >
          {d.nome}
        </span>
        <Estrelas />
      </div>
      <p
        style={{
          margin: '18px 0 0',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: 15,
          lineHeight: 1.6,
          color: 'var(--rp-ink-70)',
        }}
      >
        {d.texto}
      </p>
    </article>
  );
}

export function ProvaSocial() {
  return (
    <section
      id="depoimentos"
      style={{
        position: 'relative',
        padding: 'clamp(72px,10vw,132px) 0',
        background: 'linear-gradient(180deg,var(--rp-black) 0%,#0e0e0e 100%)',
      }}
    >
      <GrainOverlay />

      <div
        style={{
          position: 'relative',
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 clamp(20px,5vw,44px)',
        }}
      >
        <Reveal>
          <Kicker color="red">Prova social</Kicker>
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
              Quem passou aqui, indica.
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
              A maior parte de quem chega na Rodão veio{' '}
              <strong style={{ color: 'var(--rp-ink-100)', fontWeight: 600 }}>
                por indicação de alguém
              </strong>
              .
            </p>
          </div>
        </Reveal>
      </div>

      {/* Full-bleed: a esteira ignora o container de 1180 e ocupa a largura toda. */}
      <div
        className="rp-marquee-viewport"
        style={{ position: 'relative', marginTop: 'clamp(40px,5vw,64px)' }}
      >
        <div className="rp-marquee-track">
          {/* Duas cópias idênticas: a animação anda -50% e reinicia sem emenda. */}
          {[0, 1].map((copia) => (
            <div key={copia} style={{ display: 'flex' }} aria-hidden={copia === 1}>
              {DEPOIMENTOS.map((d) => (
                <Card key={`${copia}-${d.id}`} d={d} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
