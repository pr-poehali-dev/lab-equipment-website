interface RapeIconProps {
  size?: number;
  className?: string;
}

const RapeIcon = ({ size = 32, className = "" }: RapeIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Стебель */}
      <path
        d="M16 28V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Цветки */}
      <g>
        {/* Центральный цветок */}
        <circle cx="16" cy="8" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="14" cy="6" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="6" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="14" cy="10" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="10" r="1" fill="currentColor" opacity="0.6" />
      </g>

      {/* Боковые цветки */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="10" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="22" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="20" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" opacity="0.7" />

      {/* Стебельки к цветкам */}
      <path
        d="M16 12L12 12"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M16 12L20 12"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M16 16L10 16"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M16 16L22 16"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M16 20L14 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M16 20L18 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Листья */}
      <path
        d="M8 24C6 24 4 26 4 28C4 30 6 32 8 32"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M24 26C26 26 28 28 28 30C28 32 26 34 24 34"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
};

export default RapeIcon;
