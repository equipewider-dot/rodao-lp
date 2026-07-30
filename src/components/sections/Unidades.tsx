import Image from 'next/image';

import { CTAButton } from '@/components/ds/CTAButton';
import { Kicker } from '@/components/ds/Kicker';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Reveal } from '@/components/Reveal';
import { ClockIcon, PinIcon, WhatsAppIcon } from '@/components/icons';
import { site } from '@/lib/site';

/**
 * Fechamento da página: o CTA final e a unidade viraram uma seção só. A chamada
 * é o cabeçalho; endereço, horário e mapa dão o "onde" logo abaixo dela.
 */
export function Unidades() {
  return (
    <section
      id="unidades"
      style={{
        position: 'relative',
        /* Acima da FAQ: esta seção cobre o bloco que transborda dela. */
        zIndex: 2,
        overflow: 'hidden',
        /* O topo arredondado só lê com o fio: o gradiente nasce no mesmo tom da
           FAQ atrás, então sem a hairline o recorte some no fundo. */
        borderTopLeftRadius: 'clamp(24px,3vw,40px)',
        borderTopRightRadius: 'clamp(24px,3vw,40px)',
        borderTop: '1px solid var(--rp-line)',
        borderLeft: '1px solid var(--rp-line)',
        borderRight: '1px solid var(--rp-line)',
        padding: 'clamp(72px,10vw,140px) clamp(20px,5vw,44px)',
        background: 'linear-gradient(180deg,#0e0e0e 0%,var(--rp-black) 100%)',
      }}
    >
      <Image
        src="/fundocta.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      {/* Véu sobre a arte. Ela tem rastros vermelhos fortes na metade esquerda,
          que é justo onde o headline branco cai. */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(11,11,11,.9) 0%, rgba(11,11,11,.82) 46%, rgba(11,11,11,.94) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Feixe nascendo por baixo: scaleY(-1) inverte o token, que é ancorado no
          topo, e o foco cai fora da borda inferior — topo limpo, luz no rodapé. */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '50%',
          transform: 'translateX(-50%) scaleY(-1)',
          width: '120%',
          height: '140%',
          background: 'var(--grad-beam)',
          pointerEvents: 'none',
        }}
      />
      <GrainOverlay />

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        <Reveal>
          <Kicker color="gold">Onde estamos</Kicker>

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
                fontSize: 'clamp(28px,3.8vw,44px)',
                color: 'var(--rp-ink-100)',
                textWrap: 'balance',
              }}
            >
              O carro já avisou. Falta só{' '}
              <span style={{ color: 'var(--rp-red)' }}>você responder.</span>
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
              Manda uma mensagem e conta o que está acontecendo. Ou passa aqui na loja, em Jardim
              Limoeiro.
            </p>
          </div>
        </Reveal>

        <Reveal
          className="rp-unidade-split"
          style={{ marginTop: 'clamp(48px,6vw,76px)' }}
        >
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: 'clamp(28px,3.2vw,36px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <GrainOverlay />
            <div style={{ position: 'relative' }}>
              <h3
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: 'clamp(19px,2vw,23px)',
                  color: 'var(--rp-red)',
                }}
              >
                Rodão Pneus · Jardim Limoeiro
              </h3>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 20 }}>
                <PinIcon />
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: 'var(--rp-ink-100)',
                  }}
                >
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.zip}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 16 }}>
                <ClockIcon />
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: 'var(--rp-ink-100)',
                  }}
                >
                  Seg a sex: <strong style={{ fontWeight: 600 }}>{site.hours.weekdays}</strong>
                  <br />
                  Sábado: <strong style={{ fontWeight: 600 }}>{site.hours.saturday}</strong>
                </p>
              </div>
            </div>
            <div style={{ position: 'relative', marginTop: 'auto' }}>
              <CTAButton as="a" href={site.whatsapp} target="_blank" rel="noopener" size="lg">
                <WhatsAppIcon size={19} />
                Chamar no WhatsApp
              </CTAButton>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              minHeight: 'clamp(280px,32vw,100%)',
              overflow: 'hidden',
            }}
          >
            <iframe
              title="Mapa Rodão Pneus Jardim Limoeiro"
              src={site.mapsEmbed}
              style={{
                width: '100%',
                height: '100%',
                minHeight: 280,
                border: 0,
                filter: 'grayscale(0.4) contrast(1.05)',
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
