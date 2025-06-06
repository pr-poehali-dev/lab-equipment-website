interface SorghumIconProps {
  size?: number;
  className?: string;
}

const SorghumIcon = ({ size = 32, className = "" }: SorghumIconProps) => {
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
        d="M16 28V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Метелка сорго */}
      <path
        d="M16 4C16 4 12 6 12 8C12 10 16 12 16 12C16 12 20 10 20 8C20 6 16 4 16 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.3"
      />

      {/* Зерна в метелке */}
      <circle cx="14" cy="7" r="0.8" fill="currentColor" opacity="0.8" />
      <circle cx="16" cy="6" r="0.8" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="7" r="0.8" fill="currentColor" opacity="0.8" />
      <circle cx="13" cy="9" r="0.8" fill="currentColor" opacity="0.8" />
      <circle cx="15" cy="8.5" r="0.8" fill="currentColor" opacity="0.8" />
      <circle cx="17" cy="8.5" r="0.8" fill="currentColor" opacity="0.8" />
      <circle cx="19" cy="9" r="0.8" fill="currentColor" opacity="0.8" />
      <circle cx="14" cy="10.5" r="0.8" fill="currentColor" opacity="0.8" />
      <circle cx="16" cy="10" r="0.8" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="10.5" r="0.8" fill="currentColor" opacity="0.8" />

      {/* Веточки метелки */}
      <path
        d="M16 6L12 4"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M16 6L20 4"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M16 8L10 6"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M16 8L22 6"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M16 10L8 8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M16 10L24 8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Листья */}
      <path
        d="M12 16C8 16 6 18 6 22C6 24 8 26 12 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M20 20C24 20 26 22 26 26C26 28 24 30 20 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
};

export default SorghumIcon;
