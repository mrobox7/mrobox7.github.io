/**
 * Card — reference implementation of the card family from DESIGN_SYSTEM.md §3.
 * Variants: feature | product-mockup-dark | model-comparison | pricing |
 *           pricing-featured | callout-coral | connector-tile
 *
 * Padding and radius are baked in per-variant per the design system; pass
 * `className` for one-off layout adjustments (grid placement, width, etc.)
 * only — never to override color/radius tokens.
 */
export default function Card({ variant = "feature", children, className = "" }) {
  const variants = {
    feature: "bg-surface-card text-ink rounded-lg p-xl",
    "product-mockup-dark": "bg-surface-dark text-on-dark rounded-lg p-xl",
    "model-comparison": "bg-canvas text-ink border border-hairline rounded-lg p-xl",
    pricing: "bg-canvas text-ink border border-hairline rounded-lg p-xl",
    "pricing-featured": "bg-surface-dark text-on-dark rounded-lg p-xl",
    "callout-coral": "bg-primary text-on-primary rounded-lg p-xxl",
    "connector-tile": "bg-canvas text-ink border border-hairline rounded-lg p-5",
  };

  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
}

/**
 * CodeWindowCard — the specialized dark card with an inner syntax-highlighted
 * block. Kept separate from Card because its inner structure (nested dark-soft
 * panel) isn't shared by any other variant.
 */
export function CodeWindowCard({ children, className = "" }) {
  return (
    <div className={`bg-surface-dark rounded-lg p-lg ${className}`}>
      <div className="bg-surface-dark-soft rounded-md p-md text-code font-mono text-on-dark overflow-x-auto whitespace-pre">
        {children}
      </div>
    </div>
  );
}
