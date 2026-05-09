interface LogoProps {
  height?: number;
  className?: string;
  showText?: boolean;
}

export function SvLogoMark({ height = 40, className = '' }: { height?: number; className?: string }) {
  const w = Math.round(height * 0.63);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="80 100 520 870"
      width={w}
      height={height}
      className={className}
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="sv-logo-grad" x1="1" x2="0" y2="0.648" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.342" stopColor="#fff" stopOpacity="0.922" />
          <stop offset="0.654" stopColor="#fff" stopOpacity="0.851" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <g transform="translate(-155.838 112.5)">
        <g transform="translate(213.335 0)">
          <g transform="translate(63.417 0)">
            <path d="M276.624,0s-1.353,37.934-1.967,56.316c-2.087,84.978-46.384,156.78-119.876,187.431L0,146.961Z" transform="translate(155.757 9.654) rotate(-2)" fill="url(#sv-logo-grad)" />
            <path d="M377.729.082s13.482-.733,21.78,7.544S411.5,25,433,62.319c10.609,18.416,25.432,43.333,44.932,77.988,8.461,15.935-2.144,35.845-19.1,35.85L22.9,176.282c-16.952,0-28.841-20.7-19.788-36.265L83.918,0S364.453.016,377.729.082Z" transform="translate(88.149 114.533) rotate(30)" fill="#fff" />
          </g>
          <g transform="translate(0 347.369)">
            <path d="M276.624,0s-1.353,37.934-1.967,56.316c-2.087,84.978-46.384,156.78-119.876,187.431L0,146.961Z" transform="matrix(-0.999, 0.035, -0.035, -0.999, 348.886, 497.977)" fill="url(#sv-logo-grad)" />
            <path d="M377.729.083s13.482-.733,21.78,7.544S411.5,25,433,62.319c10.609,18.416,25.432,43.333,44.931,77.988,8.461,15.935-2.144,35.845-19.1,35.849L22.9,176.282c-16.952,0-28.841-20.7-19.788-36.265L83.918,0S364.453.016,377.729.083Z" transform="translate(416.494 393.098) rotate(-150)" fill="#fff" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function SvLogo({ height = 40, showText = true, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <SvLogoMark height={height} />
      {showText && (
        <span
          className="text-white"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: `${Math.round(height * 0.375)}px`,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          Systems Valley
        </span>
      )}
    </div>
  );
}
