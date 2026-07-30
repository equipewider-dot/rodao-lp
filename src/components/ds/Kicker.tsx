import type { HTMLAttributes, ReactNode } from 'react';

type KickerProps = {
  children?: ReactNode;
  color?: 'red' | 'gold' | 'muted';
  /** barra/tick de abertura */
  bar?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

/** Kicker / overline curto em caixa alta — fica acima de um headline. */
export function Kicker({ children, color = 'red', bar = true, style, ...rest }: KickerProps) {
  const c =
    color === 'gold'
      ? 'var(--accent-highlight)'
      : color === 'muted'
        ? 'var(--text-secondary)'
        : 'var(--accent-primary)';
  /* O texto fica na cor sólida; só o ponto ganha a rampa, senão o bullet chapado
     é o único vermelho opaco que sobra na página. */
  const dot =
    color === 'gold' ? 'var(--grad-gold)' : color === 'muted' ? c : 'var(--grad-red)';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6em',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '.13em',
        fontSize: 12,
        color: c,
        ...style,
      }}
      {...rest}
    >
      {bar && (
        <span
          aria-hidden
          style={{
            width: 5,
            height: 5,
            flex: '0 0 auto',
            background: dot,
            borderRadius: '50%',
          }}
        />
      )}
      {children}
    </span>
  );
}
