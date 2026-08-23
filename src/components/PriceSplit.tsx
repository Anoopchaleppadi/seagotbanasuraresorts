/**
 * Presents a villa tariff as its applicable room/component split
 * (e.g. ₹9,000 for a 2-bedroom villa is shown as "₹4,500 × 2").
 *
 * The underlying tariff value is never changed — only its presentation.
 */
export function splitTariff(total: number, parts: number) {
  const safeParts = Math.max(1, Math.round(parts || 1));
  return { unit: Math.round(total / safeParts), parts: safeParts };
}

interface PriceSplitProps {
  total: number;
  parts: number;
  /** Tailwind classes for the main figure. */
  className?: string;
  suffix?: string;
  showNote?: boolean;
  noteClassName?: string;
}

export function PriceSplit({
  total,
  parts,
  className = "",
  suffix = " / night",
  showNote = false,
  noteClassName = "mt-1 text-[11px] text-muted-foreground",
}: PriceSplitProps) {
  const { unit, parts: n } = splitTariff(total, parts);
  return (
    <>
      <span className={className}>
        ₹{unit.toLocaleString("en-IN")}
        <span className="mx-1 text-[0.75em] text-muted-foreground">×</span>
        {n}
        {suffix ? <span className="text-[0.5em] text-muted-foreground">{suffix}</span> : null}
      </span>
      {showNote ? (
        <p className={noteClassName}>Tariff displayed as applicable room/component split</p>
      ) : null}
    </>
  );
}
