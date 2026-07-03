import Button from "./Button";

/**
 * TopNav — reference implementation of `top-nav` from DESIGN_SYSTEM.md §3.
 * 64px cream bar; collapses to a full-screen cream sheet below the `tablet:` breakpoint.
 */
export default function TopNav({ menuItems = [], onSignIn, onTryClick, brand = "Claude" }) {
  return (
    <nav className="bg-canvas h-16 flex items-center justify-between px-lg border-b border-hairline">
      <div className="flex items-center gap-sm">
        {/* Brand mark is a sourced SVG asset, not a CSS token — see DESIGN_SYSTEM.md §6 */}
        <span className="text-title-md font-display text-ink">{brand}</span>
      </div>

      <ul className="hidden desktop:flex items-center gap-lg">
        {menuItems.map((item) => (
          <li key={item} className="text-nav-link font-sans text-ink">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-md">
        <button
          onClick={onSignIn}
          className="text-nav-link font-sans text-ink hidden tablet:inline-block"
        >
          Sign in
        </button>
        <Button variant="primary" onClick={onTryClick}>
          Try Claude
        </Button>
        {/* Hamburger toggle for < tablet: breakpoint would go here */}
      </div>
    </nav>
  );
}
