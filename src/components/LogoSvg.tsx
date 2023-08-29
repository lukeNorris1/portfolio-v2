export default function LogoSvg() {
  return (
    <svg width={42} height={42} viewBox="0 0 100 100">
      <g>
        <polygon
          points="50,10 83.33,30 83.33,70 50,90 16.67,70 16.67,30"
          stroke="#5ac1e7"
          fill="none"
          strokeWidth="5"
        />
        <rect
          x="30"
          y="30"
          width="5"
          height="40"
          fill="#5ac1e7"
          strokeWidth="0.3"
        />
        <rect
          x="65"
          y="30"
          width="5"
          height="40"
          fill="#5ac1e7"
          strokeWidth="0.3"
        />
        <path
          d="M 30 30 L 70 65 L 70 69.8 L 30 35 L 30 30"
          stroke="gray"
          fill="#5ac1e7"
          strokeWidth="0.5"
          fillOpacity="1"
        />
      </g>
    </svg>
  );
}
