import { CTAButton } from '@/components/ds/CTAButton';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Reveal } from '@/components/Reveal';
import { WhatsAppIcon } from '@/components/icons';
import { site } from '@/lib/site';

export function CtaFinal() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(72px,10vw,140px) clamp(20px,5vw,44px)',
        background: 'var(--rp-black)',
        textAlign: 'center',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: '140%',
          background: 'var(--grad-beam)',

          pointerEvents: 'none',
        }}
      />
      <GrainOverlay />

      <Reveal style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontStyle: 'normal',
            fontWeight: 600,
            textTransform: 'none',
            lineHeight: 1.12,
            letterSpacing: '.005em',
            fontSize: 'clamp(28px,3.8vw,46px)',
            color: 'var(--rp-ink-100)',
            textWrap: 'balance',
          }}
        >
          O carro já avisou. Falta só{' '}
          <span style={{ color: 'var(--rp-red)' }}>você responder.</span>
        </h2>
        <p
          style={{
            margin: '24px auto 0',
            maxWidth: '52ch',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 'clamp(15px,1.5vw,17px)',
            lineHeight: 1.55,
            color: 'var(--rp-ink-70)',
          }}
        >
          Manda uma mensagem agora e conta o que está acontecendo. A gente te diz o que fazer antes de
          qualquer coisa virar problema grande.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 34 }}>
          <span
            style={{
              display: 'inline-block',
              
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <CTAButton as="a" href={site.whatsapp} target="_blank" rel="noopener" size="lg">
              <WhatsAppIcon size={24} />
              Chamar no WhatsApp
            </CTAButton>
          </span>
        </div>
      </Reveal>
    </section>
  );
}
