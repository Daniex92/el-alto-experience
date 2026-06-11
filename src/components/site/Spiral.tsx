import type { SVGProps } from "react";

/**
 * Spiral motif extracted from the El Alto logo.
 * Pure SVG, takes currentColor so it can be tinted per surface.
 */
export function Spiral({
  className,
  strokeWidth = 1.2,
  ...rest
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d="M50 50 m0 0 a3 3 0 1 1 6 -1 a6 6 0 1 1 -10 -1 a10 10 0 1 1 16 0 a14 14 0 1 1 -22 -2 a18 18 0 1 1 28 1 a22 22 0 1 1 -34 -2 a26 26 0 1 1 40 2" />
    </svg>
  );
}
