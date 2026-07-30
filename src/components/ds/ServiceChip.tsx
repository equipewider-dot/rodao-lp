import type { HTMLAttributes, ReactNode } from 'react';

type ServiceChipProps = {
  children?: ReactNode;
  active?: boolean;
  icon?: ReactNode;
  /** Superfície onde o chip vive — muda o contraste do estado inativo. */
  tone?: 'dark' | 'light';
} & HTMLAttributes<HTMLSpanElement>;

/** Pill/chip de serviço, ex.: "Troca de óleo". Vermelho quando ativo/selecionado. */
export function ServiceChip({
  children,
  active = false,
  icon,
  tone = 'dark',
  style,
  ...rest
}: ServiceChipProps) {
  const idleBorder = tone === 'light' ? '1px solid rgba(18,18,18,.16)' : '1px solid var(--rp-line)';
  const idleBg = tone === 'light' ? 'transparent' : 'var(--surface-panel-alt)';
  const idleInk = tone === 'light' ? 'rgba(18,18,18,.7)' : 'var(--text-secondary)';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45em',
        padding: '7px 14px',
        borderRadius: 'var(--radius-tag)',
        border: active ? '1px solid transparent' : idleBorder,
        background: active ? 'var(--grad-red)' : idleBg,
        color: active ? 'var(--text-on-red)' : idleInk,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        textTransform: 'none',
        letterSpacing: '0.02em',
        fontSize: 13,
        lineHeight: 1,
        boxShadow: 'none',
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
    </span>
  );
}
