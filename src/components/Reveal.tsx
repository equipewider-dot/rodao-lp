'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  /** Atraso da entrada, em ms — para escalonar itens de um mesmo bloco. */
  delay?: number;
};

/**
 * Entrada one-shot ao entrar na viewport (o antigo `[data-reveal]`).
 *
 * O conteúdo é SEMPRE visível por padrão (opacity:1). O reveal só ADICIONA a
 * animação de entrada; se qualquer coisa aqui falhar, nada fica escondido.
 */
export function Reveal({ children, style, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const play = (target: HTMLElement) => {
      /* `both` segura o estado inicial durante o delay — sem isso o item
         apareceria e só depois começaria a entrar. */
      target.style.animation = `rpReveal .7s cubic-bezier(0.16,1,0.3,1) ${delay}ms both`;
    };

    try {
      /* Sistema pedindo menos movimento: entrega tudo parado e visível. */
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

      if (!('IntersectionObserver' in window)) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              play(e.target as HTMLElement);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0, rootMargin: '0px 0px -6% 0px' },
      );

      const r = el.getBoundingClientRect();
      if (r.top < (window.innerHeight || 800)) play(el);
      else io.observe(el);

      return () => io.disconnect();
    } catch {
      /* conteúdo já visível; ignora */
    }
  }, [delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
