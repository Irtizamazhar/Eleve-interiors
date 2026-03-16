'use client';

/**
 * Elevé Interiors logo — same design & colors, no image, no black box.
 * Background (e.g. hero interior) shows through.
 */
interface LogoProps {
  className?: string;
  height?: number; // height in px
  align?: 'left' | 'center';
}

export default function Logo({ className = '', height = 88, align = 'center' }: LogoProps) {
  const isSmall = height <= 54;
  const archSize = isSmall ? 20 : 28;
  const textScale = height / 88;

  return (
    <div
      className={`flex flex-col justify-center ${align === 'left' ? 'items-start' : 'items-center'} ${className}`}
      style={{
        height,
        width: 260 * (height / 88),
        maxWidth: '100%',
      }}
    >
      {/* Golden arch (top) + doorway below — upper line removed */}
      <svg
        width={archSize * 2.5}
        height={archSize + 8}
        viewBox="0 0 100 60"
        fill="none"
        className="flex-shrink-0"
        style={{ marginBottom: 4 }}
      >
        {/* Top: golden arch — color #C9A84C */}
        <path
          d="M 12 40 A 38 38 0 0 1 88 40"
          fill="none"
          stroke="#C9A84C"
          strokeWidth={3.5}
          strokeLinecap="round"
        />
        {/* Doorway: arch + verticals — light gray/silver */}
        <path
          d="M 22 55 L 22 40 A 28 28 0 0 1 78 40 L 78 55"
          fill="none"
          stroke="#B8B4AE"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner doorway — same silver tone */}
        <path
          d="M 32 55 L 32 45 A 18 18 0 0 1 68 45 L 68 55"
          fill="none"
          stroke="#B8B4AE"
          strokeWidth={0.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Base lines — light gray/silver */}
        <line x1="22" y1="55" x2="78" y2="55" stroke="#B8B4AE" strokeWidth={0.8} strokeLinecap="round" />
        <line x1="12" y1="55" x2="88" y2="55" stroke="#B8B4AE" strokeWidth={1} strokeLinecap="round" />
      </svg>

      {/* Elevé — warm chocolate brown #7B5B3A */}
      <span
        className="font-playfair font-normal"
        style={{
          fontSize: `${Math.round(22 * textScale)}px`,
          lineHeight: 1.1,
          color: '#7B5B3A',
        }}
      >
        Elevé
      </span>

      {/* INTERIORS — thoda chota, balanced */}
      <div
        className={`flex items-center gap-1.5 ${align === 'left' ? 'justify-start' : 'justify-center'}`}
        style={{
          marginTop: 2,
          fontSize: `${Math.max(7, Math.round(8 * textScale))}px`,
        }}
      >
        <span
          className="flex-shrink-0"
          style={{
            width: 12 * textScale,
            height: 1,
            backgroundColor: '#C9A84C',
          }}
        />
        <span
          className="font-montserrat font-normal uppercase"
          style={{ letterSpacing: '0.15em', color: '#A89880' }}
        >
          INTERIORS
        </span>
        <span
          className="flex-shrink-0"
          style={{
            width: 12 * textScale,
            height: 1,
            backgroundColor: '#C9A84C',
          }}
        />
      </div>
    </div>
  );
}
