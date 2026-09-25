/**
 * Stylised Gujarat coverage map.
 *
 * Drawn inline as SVG rather than shipped as an image so it stays crisp,
 * themes with the brand palette and adds no network request. Positions are
 * schematic — this communicates coverage, it is not a survey map.
 */

const PINS = [
  { label: "Morbi", x: 205, y: 120 },
  { label: "Jamnagar", x: 105, y: 170 },
  { label: "Rajkot", x: 215, y: 190 },
  { label: "Gandhinagar", x: 335, y: 110 },
  { label: "Vadodara", x: 375, y: 195 },
  { label: "Upleta", x: 120, y: 255 },
  { label: "Gondal", x: 230, y: 255 },
  { label: "Bhavnagar", x: 310, y: 275 },
  { label: "Junagadh", x: 170, y: 315 },
  { label: "Porbandar", x: 92, y: 300 },
];

export default function ServiceAreaMap() {
  return (
    <div className="area-map">
      <svg viewBox="0 0 480 380" role="img" aria-label="Map showing SQUARE service coverage across Gujarat">
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

        {/* Schematic Gujarat boundary */}
        <path
          d="M125 130 L195 80 L330 65 L415 90 L425 210 L385 285 L320 330 L220 355 L130 345 L70 290 L65 190 L125 130 Z"
          fill="#ffffff"
          fillOpacity="0.72"
          stroke="#bcdcf1"
          strokeWidth="1.6"
          strokeDasharray="7 6"
        />

        {/* Arterial lines */}
        <g stroke="#d3e8f6" strokeWidth="1.4" fill="none">
          <path d="M215 190 L205 120" />
          <path d="M215 190 L105 170" />
          <path d="M215 190 L230 255" />
          <path d="M230 255 L170 315" />
          <path d="M230 255 L120 255" />
          <path d="M215 190 L310 275" />
          <path d="M215 190 L335 110" />
          <path d="M335 110 L375 195" />
          <path d="M375 195 L310 275" />
          <path d="M120 255 L92 300" />
          <path d="M92 300 L170 315" />
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
        across Gujarat
      </p>
    </div>
  );
}
