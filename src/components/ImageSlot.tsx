import Image from 'next/image';

type ImageSlotProps = {
  /** Caminho em /public. Sem src, renderiza o placeholder vazio. */
  src?: string;
  alt?: string;
  /** Legenda do estado vazio. */
  placeholder?: string;
  priority?: boolean;
};

/**
 * Slot de imagem — preenche o contêiner (que precisa ser `position:relative`).
 * Sem `src`, desenha o mesmo estado vazio do export original: anel tracejado,
 * ícone e legenda.
 */
export function ImageSlot({ src, alt = '', placeholder = 'Drop an image', priority }: ImageSlotProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 900px) 100vw, 600px"
        style={{ objectFit: 'cover' }}
      />
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: 'rgba(127,127,127,.08)',
        font: '13px/1.3 system-ui,-apple-system,sans-serif',
        color: 'inherit',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          textAlign: 'center',
          padding: 12,
          userSelect: 'none',
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.45 }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span style={{ maxWidth: '90%', fontWeight: 500, letterSpacing: '.01em', opacity: 0.75 }}>
          {placeholder}
        </span>
      </div>
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          border: '1.5px dashed currentColor',
          opacity: 0.35,
        }}
      />
    </div>
  );
}
