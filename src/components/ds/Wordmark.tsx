import type { CSSProperties, HTMLAttributes } from 'react';

type WordmarkProps = {
  variant?: 'stacked' | 'inline' | 'monogram';
  color?: 'red' | 'white' | 'gold';
  size?: number;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Lockup tipográfico RP — usado onde iria um logo (não existe marca gráfica).
 * Saira Condensed italic 900 caixa alta.
 */
export function Wordmark({
  variant = 'stacked',
  color = 'red',
  size = 64,
  style,
  ...rest
}: WordmarkProps) {
  const ink =
    color === 'white'
      ? 'var(--rp-ink-100)'
      : color === 'gold'
        ? 'var(--accent-highlight)'
        : 'var(--accent-primary)';

  const base: CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontStyle: 'normal',
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: 1.08,
    letterSpacing: '0.005em',
    color: ink,
    display: 'inline-block',
    ...style,
  };

  if (variant === 'monogram') {
    return (
      <span style={{ ...base, fontSize: size, position: 'relative', paddingLeft: '0.06em' }} {...rest}>
        RP
      </span>
    );
  }

  if (variant === 'inline') {
    return (
      <span style={{ ...base, fontSize: size * 0.5 }} {...rest}>
        RODÃO <span style={{ color: 'var(--rp-ink-100)' }}>PNEUS</span>
      </span>
    );
  }

  // stacked (padrão)
  return (
    <span
      style={{ ...base, fontSize: size * 0.5, display: 'inline-flex', flexDirection: 'column' }}
      {...rest}
    >
      <span>RODÃO</span>
      <span
        style={{
          color: color === 'red' ? 'var(--rp-ink-100)' : ink,
          WebkitTextStroke: color === 'red' ? '0' : undefined,
        }}
      >
        PNEUS
      </span>
    </span>
  );
}
