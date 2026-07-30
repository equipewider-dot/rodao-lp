/** Divisória fina entre seções — herdeira da faixa de demarcação do piso. */
export function HazardStripe() {
  return (
    <div
      aria-hidden
      style={{
        height: 1,
        background: 'var(--rp-line)',
      }}
    />
  );
}
