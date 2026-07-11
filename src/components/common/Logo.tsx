import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface LogoProps extends React.SVGAttributes<SVGElement> {
  size?: number;
  variant?: "full" | "flat";
}

export function Logo({ size = 32, variant = "full", className, ...rest }: LogoProps) {
  const id = React.useId();
  const bgId = `${id}-bg`;
  const markId = `${id}-mark`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      role="img"
      aria-label="WhatsApp Business Agent Studio"
      {...rest}
    >
      <defs>
        <linearGradient id={bgId} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={variant === "flat" ? "#128C7E" : "#25D366"} />
          <stop offset="1" stopColor="#0F7A6A" />
        </linearGradient>
        <linearGradient id={markId} x1="22" y1="20" x2="42" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#128C7E" />
          <stop offset="1" stopColor="#075E54" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${bgId})`} />
      <g fill="#ffffff">
        <rect x="10" y="12" width="44" height="34" rx="10" />
        <path d="M17 42 L13 54 L28 44 Z" />
      </g>
      <path
        d="M32 19 Q35.5 26 43 30 Q35.5 34 32 41 Q28.5 34 21 30 Q28.5 26 32 19 Z"
        fill={`url(#${markId})`}
      />
      <circle cx="42" cy="20" r="2" fill="#ffffff" fillOpacity="0.55" />
      <circle cx="22" cy="40" r="1.4" fill="#ffffff" fillOpacity="0.55" />
    </svg>
  );
}
