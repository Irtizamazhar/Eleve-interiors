'use client';

import { useState } from 'react';

interface LogoProps {
  className?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  /** Optional fixed height in px (e.g. Loader uses 130). Omit for navbar default. */
  height?: number;
}

export default function Logo({ className = '', align = 'center', variant = 'light', height }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const isDark = variant === 'dark';
  const containerClass = 'flex items-center justify-center';

  if (imgError) {
    return (
      <div
        className={`flex items-center ${align === 'left' ? 'justify-start' : 'justify-center'} ${className}`}
      >
        <span
          className={`font-playfair text-xl font-semibold italic md:text-2xl ${isDark ? 'text-white' : 'text-textDark'}`}
        >
          <span className="text-gold">Elevé</span> Interiors
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center ${align === 'left' ? 'justify-start' : 'justify-center'} ${className}`}
    >
      <div className={containerClass}>
        <img
          src="/logo.png"
          alt="Elevé Interiors"
          className={height != null ? 'w-auto object-contain' : 'h-[52px] w-auto object-contain md:h-[72px]'}
          style={height != null ? { height: `${height}px` } : undefined}
          onError={() => setImgError(true)}
        />
      </div>
    </div>
  );
}
