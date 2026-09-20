/**
 * Stylised Delhi NCR coverage map.
 *
 * Drawn inline as SVG rather than shipped as an image so it stays crisp,
 * themes with the brand palette and adds no network request. Positions are
 * schematic — this communicates coverage, it is not a survey map.
 */

const PINS = [
  { label: "Rohini", x: 176, y: 120 },
  { label: "Delhi", x: 232, y: 168 },
  { label: "Ghaziabad", x: 320, y: 138 },
  { label: "Noida", x: 316, y: 214 },
  { label: "Gr. Noida", x: 366, y: 262 },
  { label: "South Delhi", x: 216, y: 236 },
  { label: "Dwarka", x: 140, y: 214 },
  { label: "Gurugram", x: 160, y: 286 },
  { label: "Faridabad", x: 268, y: 308 },
];

export default function ServiceAreaMap() {
  return (
    <div className="area-map">
      <svg viewBox="0 0 480 380" role="img" aria-label="Map showing SQUARE service coverage across Delhi NCR">
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="48%" r="60%">
            <stop offset="0%" stopColor="#e2f2fd" />
            <stop offset="55%" stopColor="#f4fafe" />
            <stop offset="100%" stopColor="#ffffff" />
          </radialGradient>
          <linearGradient id="pinFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#147fc9" />
            <stop offset="100%" stopColor="#0a4d83" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="480" height="380" rx="28" fill="url(#mapGlow)" />

        {/* Schematic NCR boundary */}
        <path
          d="M118 148 L168 78 L262 64 L352 96 L402 168 L386 262 L318 332 L214 344 L136 300 L104 216 Z"
          fill="#ffffff"
          fillOpacity="0.72"
          stroke="#bcdcf1"
          strokeWidth="1.6"
          strokeDasharray="7 6"
        />

        {/* Arterial lines */}
        <g stroke="#d3e8f6" strokeWidth="1.4" fill="none">
          <path d="M232 168 L176 120" />
          <path d="M232 168 L320 138" />
          <path d="M232 168 L316 214" />
          <path d="M232 168 L216 236" />
          <path d="M232 168 L140 214" />
          <path d="M216 236 L160 286" />
          <path d="M216 236 L268 308" />
          <path d="M316 214 L366 262" />
        </g>

        {PINS.map((pin, i) => (
          <g key={pin.label} className="area-map__pin">
            <circle
              className="area-map__ripple"
              cx={pin.x}
              cy={pin.y}
              r="6"
              fill="#147fc9"
              fillOpacity="0.28"
              style={{ animationDelay: `${i * 0.28}s` }}
            />
            <circle cx={pin.x} cy={pin.y} r="5.5" fill="url(#pinFill)" />
            <circle cx={pin.x} cy={pin.y - 0.5} r="1.9" fill="#ffffff" />
            <text className="area-map__label" x={pin.x} y={pin.y + 19} textAnchor="middle">
              {pin.label}
            </text>
          </g>
        ))}
      </svg>
      <p className="area-map__script">
        Serving homes &amp; businesses
        <br />
        across the region
      </p>
    </div>
  );
}
