import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'original' | 'mark';
  height?: number | string;
  showText?: boolean;
  useImg?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  height = 52,
  showText = true,
  useImg = true,
}) => {
  const [imgError, setImgError] = React.useState(false);

  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#071126';
  const subTextColor = isDark ? '#CBD5E1' : '#0B1E3D';

  const numericHeight = typeof height === 'number' ? height : parseInt(height as string, 10) || 52;
  const viewBoxWidth = showText ? 360 : 85;
  const viewBoxHeight = 80;
  const computedWidth = (numericHeight / viewBoxHeight) * viewBoxWidth;

  if (useImg && !imgError) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/logo.png"
          alt="DATAMINT AARVIX"
          style={{ height: `${numericHeight}px` }}
          className={`w-auto object-contain transition-transform duration-300 hover:scale-[1.02] ${
            isDark ? 'brightness-110 contrast-105' : ''
          }`}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        width={computedWidth}
        height={numericHeight}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-[1.02] filter drop-shadow-sm"
      >
        <defs>
          {/* Bottom Left Leaf / Flame Gradient (Cyan -> Electric Blue) */}
          <linearGradient id="electricLeafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#00A2FF" />
            <stop offset="100%" stopColor="#0052FF" />
          </linearGradient>

          {/* Right Ribbon Swoosh Gradient (Cyan -> Blue -> Neon Violet) */}
          <linearGradient id="violetRibbonGrad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="35%" stopColor="#0075FF" />
            <stop offset="70%" stopColor="#4F00FF" />
            <stop offset="100%" stopColor="#8B00FF" />
          </linearGradient>

          {/* Deep Midnight Navy Ribbon Gradient */}
          <linearGradient id="deepNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#0C1B3A' : '#050D1E'} />
            <stop offset="100%" stopColor={isDark ? '#060E22' : '#030712'} />
          </linearGradient>

          {/* 3D Dot Sphere Gradient for A counters */}
          <radialGradient id="dotSphereGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#0052FF" />
            <stop offset="100%" stopColor="#6C00FF" />
          </radialGradient>
        </defs>

        {/* ============================================================ */}
        {/* LOGO MARK / ICON */}
        {/* ============================================================ */}
        <g id="LogoMark" transform="translate(0, 4)">
          {/* 1. Electric Cyan-Blue Base Leaf Curve */}
          <path
            d="M 5 52 C 5 40, 16 38, 24 38 C 24 48, 18 58, 8 58 C 5 58, 5 55, 5 52 Z"
            fill="url(#electricLeafGrad)"
          />

          {/* 2. Main Deep Navy "D" Ribbon Body */}
          <path
            d="M 12 10 L 42 10 C 56 10, 66 18, 66 34 C 66 50, 54 58, 38 58 L 26 58 L 36 44 L 38 44 C 47 44, 52 40, 52 34 C 52 26, 45 22, 38 22 L 26 22 L 12 42 Z"
            fill="url(#deepNavyGrad)"
          />

          {/* 3. Outer Ribbon with Cyan -> Blue -> Neon Violet Gradient */}
          <path
            d="M 32 8 C 40 8, 45 10, 50 15 L 68 40 C 72 46, 75 52, 78 58 L 62 58 C 58 52, 54 44, 48 34 C 44 28, 38 24, 32 24 L 25 24 L 32 8 Z"
            fill="url(#violetRibbonGrad)"
          />
        </g>

        {/* ============================================================ */}
        {/* LOGO TEXT (DATAMINT AARVIX) */}
        {/* ============================================================ */}
        {showText && (
          <g id="LogoText" transform="translate(92, 0)">
            {/* LINE 1: DATAMINT */}
            <g id="DATAMINT" fill={textColor}>
              {/* D */}
              <path d="M 0 16 H 12 C 20 16 25 20 25 29 C 25 38 20 42 12 42 H 0 V 16 Z M 6 22 V 36 H 11 C 16 36 19 33 19 29 C 19 25 16 22 11 22 H 6 Z" />

              {/* A with 3D Cyan-Violet Sphere Dot */}
              <g transform="translate(28, 0)">
                <path d="M 11 16 L 22 42 H 16 L 14 37 H 8 L 6 42 H 0 L 11 16 Z M 11 24 L 9 31 H 13 L 11 24 Z" />
                <circle cx="11" cy="33" r="2.8" fill="url(#dotSphereGrad)" />
              </g>

              {/* T */}
              <path d="M 52 16 H 68 V 22 H 63 V 42 H 57 V 22 H 52 V 16 Z" />

              {/* A with 3D Cyan-Violet Sphere Dot */}
              <g transform="translate(70, 0)">
                <path d="M 11 16 L 22 42 H 16 L 14 37 H 8 L 6 42 H 0 L 11 16 Z M 11 24 L 9 31 H 13 L 11 24 Z" />
                <circle cx="11" cy="33" r="2.8" fill="url(#dotSphereGrad)" />
              </g>

              {/* M */}
              <path d="M 94 16 H 101 L 106 31 L 111 16 H 118 V 42 H 112 V 26 L 107 42 H 105 L 100 26 V 42 H 94 V 16 Z" />

              {/* I */}
              <path d="M 121 16 H 127 V 42 H 121 V 16 Z" />

              {/* N */}
              <path d="M 130 16 H 136 L 146 33 V 16 H 152 V 42 H 146 L 136 25 V 42 H 130 V 16 Z" />

              {/* T */}
              <path d="M 154 16 H 170 V 22 H 165 V 42 H 159 V 22 H 154 V 16 Z" />
            </g>

            {/* LINE 2: A A R V I X */}
            <g id="AARVIX" fill={subTextColor} stroke={subTextColor} strokeWidth="0.3">
              {/* First Caret A */}
              <g transform="translate(1, 54)">
                <path d="M 0 16 L 8 0 L 16 16" fill="none" stroke={subTextColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Second Caret A */}
              <g transform="translate(35, 54)">
                <path d="M 0 16 L 8 0 L 16 16" fill="none" stroke={subTextColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* R */}
              <g transform="translate(70, 54)">
                <path d="M 0 0 H 9 C 13 0 15 2 15 5 C 15 8 13 10 9 10 H 3 V 16 H 0 V 0 Z M 3 3 V 7 H 8 C 10 7 12 6.5 12 5 C 12 3.5 10 3 8 3 H 3 Z M 8 9.5 L 15 16 H 11.5 L 5 9.5 H 8 Z" stroke="none" />
              </g>

              {/* V */}
              <g transform="translate(103, 54)">
                <path d="M 0 0 L 7.5 16 L 15 0" fill="none" stroke={subTextColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* I */}
              <g transform="translate(138, 54)">
                <path d="M 0 0 H 3 V 16 H 0 V 0 Z" stroke="none" />
              </g>

              {/* X */}
              <g transform="translate(160, 54)">
                <path d="M 0 0 L 14 16 M 14 0 L 0 16" fill="none" stroke={subTextColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};


