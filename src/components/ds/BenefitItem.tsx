import type { HTMLAttributes, ReactNode } from 'react';

type BenefitItemProps = {
  children?: ReactNode;
  /** check ouro + texto ouro — a linha do diferencial (usar uma vez) */
  highlight?: boolean;
  /** sobrescreve o glifo de check */
  icon?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Linha de benefício em checklist. Check vermelho por padrão; check ouro marca
 * O diferencial da lista.
 */
export function BenefitItem({
  children,
  highlight = false,
  icon,
  style,
  ...rest
}: BenefitItemProps) {
  const fill = highlight ? 'var(--grad-gold)' : 'var(--grad-red)';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.7em',
        fontFamily: 'var(--font-body)',
        fontWeight: highlight ? 600 : 500,
        fontSize: 'clamp(15px,1.5vw,17px)',
        color: highlight ? 'var(--accent-highlight)' : 'var(--text-primary)',
        lineHeight: 1.4,
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden
        style={{
          flex: '0 0 auto',
          width: '1.3em',
          height: '1.3em',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-xs)',
          background: fill,
          color: highlight ? 'var(--text-on-gold)' : 'var(--text-on-red)',
        }}
      >
        {icon || (
          <svg
            width="62%"
            height="62%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </span>
      <span>{children}</span>
    </div>
  );
}
