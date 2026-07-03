"use client";

interface DifficultyData {
  label: string;
  solved: number;
  total: number;
  color: string;
}

interface ArcProgressProps {
  difficulty: DifficultyData;
  size?: number;
}

export default function ArcProgress({
  difficulty,
  size = 150,
}: ArcProgressProps) {
  const { label, solved, total, color } = difficulty;

  const stroke = size / 20;

  const radius = (size - stroke) / 2;

  const circumference = 2 * Math.PI * radius;

  const progress = Math.min(solved / total, 1);

  // Show 75% of the circle
  const visibleArc = circumference * 0.75;

  // Leave 25% hidden
  const hiddenArc = circumference - visibleArc;

  // Fill only part of the visible arc
  const filled = visibleArc * progress;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-135"
      >
        {/* Track */}

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,.12)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${visibleArc} ${hiddenArc}`}
        />

        {/* Progress */}

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${filled} ${circumference}`}
          className="transition-all duration-700 ease-out"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-end gap-1">
          <p
            className="text-xl font-bold font-mono leading-none"
            style={{
              color,
            }}
          >
            {solved}
          </p>

          <p className="mt-1 text-sm text-black/60">/ {total}</p>
        </div>

        <p
          className="mt-1 text-sm font-mono font-semibold"
          style={{
            color,
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
