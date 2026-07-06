type TechBadgeProps = {
  children: string;
};

export default function TechBadge({ children }: TechBadgeProps) {
  return (
    <li className="rounded-pill border border-hairline bg-canvas px-sm py-xs text-caption text-body">
      {children}
    </li>
  );
}
