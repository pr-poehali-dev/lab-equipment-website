interface SunflowerIconProps {
  size?: number;
  className?: string;
}

const SunflowerIcon = ({ size = 32, className = "" }: SunflowerIconProps) => {
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
        d="M16 32V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Центр цветка */}
      <circle cx="16" cy="12" r="4" fill="currentColor" opacity="0.9" />

      {/* Лепестки */}
      <ellipse
        cx="16"
        cy="6"
        rx="1.5"
        ry="3"
        fill="currentColor"
        opacity="0.6"
      />
      <ellipse
        cx="22"
        cy="12"
        rx="3"
        ry="1.5"
        fill="currentColor"
        opacity="0.6"
      />
      <ellipse
        cx="16"
        cy="18"
        rx="1.5"
        ry="3"
        fill="currentColor"
        opacity="0.6"
      />
      <ellipse
        cx="10"
        cy="12"
        rx="3"
        ry="1.5"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Диагональные лепестки */}
      <ellipse
        cx="20.5"
        cy="7.5"
        rx="1.5"
        ry="2.5"
        fill="currentColor"
        opacity="0.6"
        transform="rotate(45 20.5 7.5)"
      />
      <ellipse
        cx="20.5"
        cy="16.5"
        rx="1.5"
        ry="2.5"
        fill="currentColor"
        opacity="0.6"
        transform="rotate(-45 20.5 16.5)"
      />
      <ellipse
        cx="11.5"
        cy="16.5"
        rx="1.5"
        ry="2.5"
        fill="currentColor"
        opacity="0.6"
        transform="rotate(45 11.5 16.5)"
      />
      <ellipse
        cx="11.5"
        cy="7.5"
        rx="1.5"
        ry="2.5"
        fill="currentColor"
        opacity="0.6"
        transform="rotate(-45 11.5 7.5)"
      />

      {/* Семечки в центре */}
      <circle cx="14" cy="10" r="0.5" fill="currentColor" opacity="0.4" />
      <circle cx="18" cy="10" r="0.5" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="14" r="0.5" fill="currentColor" opacity="0.4" />
      <circle cx="18" cy="14" r="0.5" fill="currentColor" opacity="0.4" />
      <circle cx="16" cy="12" r="0.5" fill="currentColor" opacity="0.4" />

      {/* Листья */}
      <path
        d="M12 20C8 20 6 22 6 26C6 28 8 30 12 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M20 24C24 24 26 26 26 30C26 32 24 34 20 34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
};

export default SunflowerIcon;
