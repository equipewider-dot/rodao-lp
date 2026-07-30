import type { HTMLAttributes, ReactNode } from 'react';

type OfferBadgeProps = {
  children?: ReactNode;
  tone?: 'gold' | 'red';
  size?: 'sm' | 'md' | 'lg';
  skew?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Selo de oferta enviesado — carrega o DIFERENCIAL da oferta (desconto,
 * benefício-chave). Ouro por padrão; ouro é reservado ao diferencial da peça.
 */
export function OfferBadge({
  children,
  tone = 'gold',
  size = 'md',
  skew = true,
  style,
  ...rest
}: OfferBadgeProps) {
  const pad = size === 'lg' ? '16px 28px' : size === 'sm' ? '6px 14px' : '11px 20px';
  const fs = size === 'lg' ? 'var(--fs-h2)' : size === 'sm' ? 'var(--fs-title)' : 'var(--fs-h3)';
  const bg = tone === 'red' ? 'var(--grad-red)' : 'var(--grad-gold)';
  const fg = tone === 'red' ? 'var(--text-on-red)' : 'var(--text-on-gold)';
  const glow = tone === 'red' ? 'var(--shadow-red-glow)' : 'var(--shadow-gold-glow)';

  return (
    <span
      style={{
        display: 'inline-block',
        transform: skew ? 'skewX(var(--skew))' : 'none',
        background: bg,
        color: fg,
        padding: pad,
        boxShadow: `${glow}, var(--shadow-inset-top)`,
        borderRadius: 'var(--radius-xs)',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          display: 'inline-block',
          transform: skew ? 'skewX(calc(-1 * var(--skew)))' : 'none',
          fontFamily: 'var(--font-display)',
          fontStyle: 'normal',
          fontWeight: 600,
          textTransform: 'none',
          fontSize: fs,
          lineHeight: 1.1,
          letterSpacing: '0.005em',
        }}
      >
        {children}
      </span>
    </span>
  );
}
