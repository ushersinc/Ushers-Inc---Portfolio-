import React from 'react';

interface UshersIncLogoProps {
  variant?: 'light' | 'dark' | 'color' | 'monochrome';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showTagline?: boolean;
  withContainer?: boolean;
}

export const UshersIncLogo: React.FC<UshersIncLogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
  showTagline = true,
  withContainer = false,
}) => {
  // Color configuration
  const isDark = variant === 'dark'; // dark artwork for light bg
  const isColor = variant === 'color';

  const textColor = isDark ? '#0a0a0a' : '#ffffff';
  const taglineColor = isColor ? '#4A90D9' : isDark ? '#475569' : '#94a3b8';
  const swooshColor = isColor ? '#4A90D9' : isDark ? '#0f172a' : '#ffffff';

  // Size configuration
  const sizeClasses = {
    sm: 'h-7',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
    custom: '',
  }[size];

  const logoSvg = (
    <svg
      viewBox="0 0 540 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto ${sizeClasses} ${className} select-none transition-transform duration-200`}
      aria-label="Ushers Inc - Service To All Logo"
    >
      <defs>
        {/* Subtle gradient for color variant */}
        <linearGradient id="ushersSwooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="60%" stopColor="#4A90D9" />
          <stop offset="100%" stopColor="#1A3A6B" />
        </linearGradient>
      </defs>

      {/* Signature swoosh feather arc originating from the left and sweeping across the top */}
      <path
        d="M 75 142 C 72 135, 75 110, 85 92 C 105 58, 160 46, 215 44 C 275 42, 310 24, 320 18 C 322 17, 321 16, 318 17 C 270 28, 230 40, 165 44 C 115 47, 85 68, 77 96 C 73 110, 71 130, 75 142 Z"
        fill={isColor ? 'url(#ushersSwooshGrad)' : swooshColor}
      />
      {/* Extended graceful tail of the swoosh */}
      <path
        d="M 120 72 C 175 46, 240 38, 320 18 C 316 20, 248 44, 185 52 C 145 57, 108 72, 92 88 C 100 80, 110 75, 120 72 Z"
        fill={isColor ? '#60A5FA' : swooshColor}
        opacity={0.9}
      />
      {/* Dynamic left accent droplet */}
      <path
        d="M 74 125 C 72 128, 70 133, 71 137 C 72 140, 75 138, 76 135 C 78 131, 76 126, 74 125 Z"
        fill={isColor ? '#4A90D9' : swooshColor}
      />

      {/* Main Bold Extended Typography: USHERS INC */}
      <g fill={textColor}>
        {/* U */}
        <path
          d="M 94 92 L 109 92 L 109 116 C 109 122, 114 126, 121 126 C 128 126, 133 122, 133 116 L 133 92 L 148 92 L 148 116 C 148 130, 137 138, 121 138 C 105 138, 94 130, 94 116 Z"
        />

        {/* S */}
        <path
          d="M 157 125 C 160 128, 166 130, 173 130 C 180 130, 184 127, 184 123 C 184 118, 178 116, 170 114 C 158 111, 153 106, 153 99 C 153 91, 161 86, 172 86 C 181 86, 188 89, 192 93 L 184 102 C 181 99, 177 98, 172 98 C 167 98, 164 100, 164 103 C 164 107, 169 108, 176 110 C 189 114, 195 119, 195 127 C 195 135, 186 140, 173 140 C 163 140, 155 136, 149 131 Z"
        />

        {/* H */}
        <path
          d="M 203 88 L 217 88 L 217 106 L 235 106 L 235 88 L 249 88 L 249 138 L 235 138 L 235 118 L 217 118 L 217 138 L 203 138 Z"
        />

        {/* E */}
        <path
          d="M 258 88 L 292 88 L 292 100 L 272 100 L 272 107 L 289 107 L 289 118 L 272 118 L 272 126 L 293 126 L 293 138 L 258 138 Z"
        />

        {/* R */}
        <path
          d="M 302 88 L 324 88 C 334 88, 340 93, 340 101 C 340 107, 336 112, 329 114 L 342 138 L 327 138 L 316 116 L 316 116 L 316 138 L 302 138 Z M 316 99 L 316 106 L 323 106 C 326 106, 328 104, 328 102 C 328 100, 326 99, 323 99 Z"
        />

        {/* S */}
        <path
          d="M 349 125 C 352 128, 358 130, 365 130 C 372 130, 376 127, 376 123 C 376 118, 370 116, 362 114 C 350 111, 345 106, 345 99 C 345 91, 353 86, 364 86 C 373 86, 380 89, 384 93 L 376 102 C 373 99, 369 98, 364 98 C 359 98, 356 100, 356 103 C 356 107, 361 108, 368 110 C 381 114, 387 119, 387 127 C 387 135, 378 140, 365 140 C 355 140, 347 136, 341 131 Z"
        />

        {/* INC Spacing divider & Text */}
        {/* I */}
        <path d="M 405 88 L 418 88 L 418 138 L 405 138 Z" />

        {/* N */}
        <path
          d="M 427 88 L 441 88 L 455 116 L 455 88 L 468 88 L 468 138 L 454 138 L 440 110 L 440 138 L 427 138 Z"
        />

        {/* C */}
        <path
          d="M 503 98 L 493 106 C 490 102, 486 100, 481 100 C 473 100, 468 106, 468 113 C 468 120, 473 126, 481 126 C 486 126, 490 124, 494 119 L 504 127 C 499 134, 491 138, 481 138 C 465 138, 454 127, 454 113 C 454 99, 465 88, 481 88 C 491 88, 498 92, 503 98 Z"
        />
      </g>

      {/* Subtitle / Slogan: service To All */}
      {showTagline && (
        <text
          x="270"
          y="160"
          textAnchor="middle"
          fill={taglineColor}
          fontSize="14"
          fontWeight="600"
          letterSpacing="0.45em"
          fontFamily="system-ui, -apple-system, sans-serif"
          className="uppercase tracking-[0.45em]"
        >
          service To All
        </text>
      )}
    </svg>
  );

  if (withContainer) {
    return (
      <div
        className={`p-3 rounded-2xl ${
          isDark
            ? 'bg-white shadow-xl border border-gray-200'
            : 'bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl'
        } inline-flex items-center justify-center`}
      >
        {logoSvg}
      </div>
    );
  }

  return logoSvg;
};
