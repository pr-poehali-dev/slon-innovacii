interface PioneerLogoProps {
  className?: string;
  height?: number;
}

export default function PioneerLogo({ className = "", height = 120 }: PioneerLogoProps) {
  const w = height * 2.8;
  const h = height;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 280 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8c00" />
          <stop offset="100%" stopColor="#e04500" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d0d8e8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Звезда пятиконечная */}
      <g filter="url(#starGlow)">
        <polygon
          points="30,6 34.5,19.5 49,19.5 37.5,27.5 42,41 30,33 18,41 22.5,27.5 11,19.5 25.5,19.5"
          fill="url(#starGrad)"
          stroke="#ff6000"
          strokeWidth="0.5"
        />
      </g>

      {/* Тонкая разделительная линия */}
      <line x1="58" y1="8" x2="58" y2="92" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />

      {/* ПИОНЕР */}
      <text
        x="70"
        y="48"
        fontFamily="'Didact Gothic', 'Trebuchet MS', 'Arial Narrow', sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="6"
        fill="url(#textGrad)"
        filter="url(#glow)"
        style={{ fontVariant: "normal" }}
      >
        ПИОНЕР
      </text>

      {/* ТРЕЙД */}
      <text
        x="70"
        y="82"
        fontFamily="'Didact Gothic', 'Trebuchet MS', 'Arial Narrow', sans-serif"
        fontSize="34"
        fontWeight="300"
        letterSpacing="10"
        fill="url(#starGrad)"
        filter="url(#glow)"
      >
        ТРЕЙД
      </text>

      {/* Нижняя тонкая линия акцент */}
      <line x1="70" y1="90" x2="270" y2="90" stroke="url(#starGrad)" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}
