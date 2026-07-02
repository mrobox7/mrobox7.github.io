/**
 * Button — reference implementation of the button family from DESIGN_SYSTEM.md §3.
 * Variants: primary | secondary | secondary-on-dark | text-link | icon-circular
 */
export default function Button({
  variant = "primary",
  disabled = false,
  children,
  icon = null,
  className = "",
  ...props
}) {
  const base = "inline-flex items-center justify-center text-button font-sans transition-colors";

  const variants = {
    primary: disabled
      ? "bg-primary-disabled text-muted rounded-md px-5 h-10"
      : "bg-primary text-on-primary rounded-md px-5 h-10 hover:bg-primary-active",
    secondary:
      "bg-canvas text-ink rounded-md px-5 h-10 border border-hairline hover:shadow-hover",
    "secondary-on-dark":
      "bg-surface-dark-elevated text-on-dark rounded-md px-5 h-10",
    "text-link": "bg-transparent text-ink px-0 h-auto",
    "icon-circular":
      "bg-canvas text-ink rounded-pill border border-hairline w-9 h-9 p-0",
  };

  return (
    <button
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
