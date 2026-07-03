/**
 * Badge — reference implementation from DESIGN_SYSTEM.md §3.
 * Variants: pill (neutral) | coral (NEW / BETA / featured)
 */
export default function Badge({ variant = "pill", children, className = "" }) {
  const variants = {
    pill: "bg-surface-card text-ink text-caption font-sans rounded-pill px-3 py-1",
    coral:
      "bg-primary text-on-primary text-caption-uppercase font-sans uppercase rounded-pill px-3 py-1",
  };

  return <span className={`inline-block ${variants[variant]} ${className}`}>{children}</span>;
}
