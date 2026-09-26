"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface LinkUnderlineProps {
  href: string;
  children: ReactNode;
  className?: string;
  underlineClassName?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

export function LinkUnderline({
  href,
  children,
  className = "",
  underlineClassName = "bg-champagne-deep",
  onClick,
  ...props
}: LinkUnderlineProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-block ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-full scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none ${underlineClassName}`}
        aria-hidden="true"
      />
    </Link>
  );
}
