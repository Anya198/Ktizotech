'use client'

import React, { useRef, useEffect, ReactNode, CSSProperties } from "react";
import Link from 'next/link'
import { cn } from "@/lib/utils";

interface StarButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  className?: string;
  onClick?: () => void;
}

export function StarButton({
  children,
  href,
  target,
  rel,
  lightWidth = 80, // Concentrated light
  duration = 3,
  lightColor = "#FFFFFF",
  backgroundColor = "#2575FC", // KtizoTech Blue
  borderWidth = 1.5, // Thinner border for a sleeker look
  className,
  onClick,
  ...props
}: StarButtonProps & React.HTMLAttributes<HTMLElement>) {
  const pathRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const el = pathRef.current;
      el.style.setProperty(
        "--path",
        `path('M 0 0 H ${el.offsetWidth} V ${el.offsetHeight} H 0 V 0')`,
      );
    }
  }, []);

  const content = (
    <>
      {/* Border Light Animation */}
      <div 
        className="absolute inset-[0] rounded-[inherit] z-[4] pointer-events-none overflow-hidden" 
        style={{
          maskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          maskClip: 'padding-box, border-box',
          WebkitMaskClip: 'padding-box, border-box',
          padding: '2px', // Match border area
        }}
        aria-hidden="true"
      >
        <div
          className="absolute aspect-square animate-star-btn bg-[radial-gradient(circle_at_center,var(--light-color)_0%,transparent_70%)] opacity-90"
          style={
            {
              offsetPath: "var(--path)",
              offsetDistance: "0%",
              width: "var(--light-width)",
              filter: "blur(2px)", // Soften the "line" but keep it concentrated
            } as CSSProperties
          }
        />
      </div>
      {/* Content */}
      <span className="z-10 relative text-white flex items-center gap-2">
        {children}
      </span>
    </>
  );

  const sharedClasses = cn(
    "relative z-[3] overflow-hidden h-12 px-6 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-[15px] font-bold transition-all duration-300 shadow-[0_4px_16px_rgba(37,117,252,0.3)] hover:shadow-[0_6px_24px_rgba(37,117,252,0.45)] hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 group/star-button cursor-pointer",
    className,
  );

  const styles = {
    "--duration": `${duration}s`,
    "--light-width": `${lightWidth}px`,
    "--light-color": lightColor,
    "--border-width": `${borderWidth}px`,
    backgroundColor: backgroundColor, // Apply background color here
    isolation: "isolate",
  } as CSSProperties;

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={sharedClasses}
          style={styles}
          onClick={onClick}
          ref={pathRef as React.RefObject<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={sharedClasses}
        style={styles}
        onClick={onClick}
        ref={pathRef as React.RefObject<HTMLAnchorElement>}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      style={styles}
      // @ts-expect-error - ref type mismatch
      ref={pathRef}
      className={sharedClasses}
      onClick={onClick}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}

export default StarButton;
