/**
 * Input — reference implementation of text-input / text-input-focused
 * from DESIGN_SYSTEM.md §3. Focus ring uses the brand coral at 15% alpha.
 */
export default function Input({ className = "", ...props }) {
  return (
    <input
      className={
        "bg-canvas text-ink text-body-md font-sans rounded-md px-3.5 h-10 " +
        "border border-hairline outline-none " +
        "focus:border-primary focus:ring-[3px] focus:ring-primary/15 " +
        className
      }
      {...props}
    />
  );
}
