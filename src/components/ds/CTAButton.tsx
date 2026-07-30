import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'gold' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
};

type CTAButtonProps =
  | ({ as?: 'button' } & CommonProps & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'a' } & CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>);

const SKINS: Record<Variant, { bg: string; fg: string; ring: string; glow: string }> = {
  primary: {
    bg: 'var(--grad-red)',
    fg: 'var(--text-on-red)',
    ring: 'var(--rp-red-shadow)',
    glow: 'var(--shadow-red-glow)',
  },
  gold: {
    bg: 'var(--grad-gold)',
    fg: 'var(--text-on-gold)',
    ring: 'var(--rp-gold-shadow)',
    glow: 'var(--shadow-gold-glow)',
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-primary)',
    ring: 'var(--rp-line)',
    glow: 'none',
  },
};

/**
 * Botão de ação primária. Vermelho = CTA padrão. Ouro reservado para CTA ligado
 * a oferta (usar pouco). Saira caixa alta, sombra em bloco que "afunda" no clique.
 */
export function CTAButton(props: CTAButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    as = 'button',
    style,
    ...rest
  } = props as CommonProps & {
    as?: 'button' | 'a';
    style?: React.CSSProperties;
  } & Record<string, unknown>;

  const Tag = as as 'button' | 'a';
  // Botão contido: altura previsível, rótulo em caixa normal, sem relevo.
  const pad = size === 'lg' ? '15px 30px' : size === 'sm' ? '9px 18px' : '12px 24px';
  const fs = size === 'lg' ? 17 : size === 'sm' ? 14 : 15;
  const skin = SKINS[variant];

  return (
    <Tag
      className="rp-cta"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5em',
        border: variant === 'ghost' ? '1px solid var(--rp-line)' : 'none',
        background: skin.bg,
        color: skin.fg,
        padding: pad,
        fontFamily: 'var(--font-body)',
        fontStyle: 'normal',
        fontWeight: 600,
        textTransform: 'none',
        fontSize: fs,
        letterSpacing: '0.01em',
        lineHeight: 1,
        borderRadius: 'var(--radius-xs)',
        cursor: 'pointer',
        boxShadow: 'none',
        transition:
          'transform var(--dur-fast) var(--ease-punch), filter var(--dur-fast)',
        ...style,
      }}
      {...rest}
    >
      {icon && (
        <span style={{ display: 'inline-flex' }} aria-hidden>
          {icon}
        </span>
      )}
      {children}
    </Tag>
  );
}
