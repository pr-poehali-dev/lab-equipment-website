interface CornIconProps {
  size?: number;
  className?: string;
}

const CornIcon = ({ size = 32, className = "" }: CornIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Початок */}
      <path
        d="M12 8C12 6 14 4 16 4C18 4 20 6 20 8V24C20 26 18 28 16 28C14 28 12 26 12 24V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.2"
      />

      {/* Зерна кукурузы */}
      <circle cx="14" cy="10" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="10" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="14" cy="13" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="13" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="14" cy="16" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="16" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="14" cy="19" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="19" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="14" cy="22" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="22" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="14" cy="25" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="25" r="1" fill="currentColor" opacity="0.8" />

      {/* Листья */}
      <path
        d="M12 6C8 6 6 8 6 12C6 14 8 16 12 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M20 6C24 6 26 8 26 12C26 14 24 16 20 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
};

export default CornIcon;
