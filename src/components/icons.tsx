type IconProps = { size?: number };

export function WhatsAppIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.46-.15-.65.15-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.34.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.65-1.58-.9-2.16-.24-.57-.48-.5-.65-.5h-.56c-.2 0-.5.07-.77.37-.26.3-1 .98-1 2.4s1.03 2.78 1.17 2.98c.15.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.56-.34z" />
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.16l-.3-.18-2.85.9.9-2.78-.2-.32A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

/** Glifo simplificado usado no link do rodapé (só o balão, sem o fone). */
export function WhatsAppGlyph({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.16l-.3-.18-2.85.9.9-2.78-.2-.32A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function TireIcon({ size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  );
}

export function BrakeIcon({ size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3a9 9 0 0 1 0 18" />
    </svg>
  );
}

export function OilDropIcon({ size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2s5 5.5 5 10a5 5 0 0 1-10 0c0-4.5 5-10 5-10z" />
    </svg>
  );
}

/** Rodas com convergência errada em torno do eixo central — carro puxando pra um lado. */
export function AlignmentIcon({ size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.5v19" strokeDasharray="2.5 3" opacity=".5" />
      <rect x="4" y="6.5" width="5.5" height="11" rx="1.8" transform="rotate(-13 6.75 12)" />
      <rect x="14.5" y="6.5" width="5.5" height="11" rx="1.8" transform="rotate(13 17.25 12)" />
    </svg>
  );
}

/** Volante com traços de trepidação nas laterais. */
export function SteeringWheelIcon({ size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 4.5v5.3M5.5 15.6l4.6-1.5M18.5 15.6l-4.6-1.5" />
      <path d="M1.8 9.8v4.4M22.2 9.8v4.4" opacity=".55" />
    </svg>
  );
}

/** Mola helicoidal entre os apoios — barulho de suspensão. */
export function SuspensionIcon({ size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 3h14M5 21h14" />
      <path d="M12 3v2l-4 1.6 8 2.8-8 2.8 8 2.8-8 2.8 4 1.2v2" />
    </svg>
  );
}

/** Prancheta com check — diagnóstico feito antes do orçamento. */
export function DiagnosisIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
      <path d="M15 4.5h2.5A1.5 1.5 0 0 1 19 6v13.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5V6a1.5 1.5 0 0 1 1.5-1.5H9" />
      <path d="m8.8 13.2 2.2 2.2 4.2-4.2" />
    </svg>
  );
}

/** Escudo com check — garantia por escrito. */
export function ShieldCheckIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.5 4.5 5.8v5.4c0 4.6 3.1 8.4 7.5 9.8 4.4-1.4 7.5-5.2 7.5-9.8V5.8L12 2.5z" />
      <path d="m8.8 11.8 2.3 2.3 4.3-4.3" />
    </svg>
  );
}

/** Adulto e criança — famílias atendidas. */
export function FamilyIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="3" />
      <path d="M3.5 20c0-3.2 2.4-5.5 5.5-5.5s5.5 2.3 5.5 5.5" />
      <circle cx="17.6" cy="11" r="2.2" />
      <path d="M15 20c0-2.4 1.2-4 2.6-4s2.6 1.3 2.9 3.2" />
    </svg>
  );
}

/** Balão de conversa — o cliente conta o que está sentindo no carro. */
export function ChatIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 12.2c0 3.9-3.8 7-8.5 7-.98 0-1.93-.13-2.8-.38L4 20.5l1.45-3.4C4.2 15.8 3.5 14.1 3.5 12.2c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7z" />
    </svg>
  );
}

/** Lupa — a etapa de diagnóstico. */
export function SearchIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.4 15.4 4.6 4.6" />
    </svg>
  );
}

/** Check dentro de círculo — a aprovação do cliente. */
export function CheckCircleIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.3 2.6 2.6 5-5.3" />
    </svg>
  );
}

/** Chave — o carro pronto voltando para o dono. */
export function KeyIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="16.5" r="3.6" />
      <path d="M10.1 13.9 20 4" />
      <path d="m16.6 7.4 2.6 2.6M14 10l2.6 2.6" />
    </svg>
  );
}

export function PinIcon({ size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--rp-red)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: '0 0 auto', marginTop: 2 }}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--rp-red)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: '0 0 auto', marginTop: 2 }}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/* Marcas sociais no mesmo traço do resto do conjunto: o rótulo ao lado é quem
   nomeia a rede, o ícone só apoia. Logo fiel exigiria path preenchido e
   destoaria da linha de 1.8 usada na página inteira. */

/** Instagram — moldura, lente e o ponto do flash. */
export function InstagramIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.9 7.1h.01" />
    </svg>
  );
}

/** Facebook — o "f" dentro do quadrado. */
export function FacebookIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M15 8.2h-1.4c-1 0-1.8.8-1.8 1.8V21" />
      <path d="M10.2 12.6h4.2" />
    </svg>
  );
}

/** YouTube — tela e o play. */
export function YoutubeIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.6" y="6" width="18.8" height="12" rx="3.4" />
      <path d="M10.7 9.9l4.4 2.1-4.4 2.1z" />
    </svg>
  );
}

/** LinkedIn — o "in" dentro do quadrado. */
export function LinkedinIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7.6 10.6V17" />
      <path d="M7.6 7.7h.01" />
      <path d="M11.4 17v-6.4" />
      <path d="M11.4 13.2c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2V17" />
    </svg>
  );
}
