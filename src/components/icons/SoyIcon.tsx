interface SoyIconProps {
  size?: number;
  className?: string;
}

const SoyIcon = ({ size = 32, className = "" }: SoyIconProps) => {
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

      {/* Бобы */}
      <ellipse
        cx="10"
        cy="8"
        rx="3"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
        transform="rotate(-20 10 8)"
      />
      <ellipse
        cx="22"
        cy="12"
        rx="3"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
        transform="rotate(20 22 12)"
      />
      <ellipse
        cx="8"
        cy="16"
        rx="3"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
        transform="rotate(-15 8 16)"
      />
      <ellipse
        cx="24"
        cy="20"
        rx="3"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
        transform="rotate(15 24 20)"
      />
      <ellipse
        cx="12"
        cy="24"
        rx="3"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
        transform="rotate(-10 12 24)"
      />

      {/* Стебельки к бобам */}
      <path
        d="M16 8L10 8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M16 12L22 12"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M16 16L8 16"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M16 20L24 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M16 24L12 24"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Листья */}
      <path
        d="M8 6C6 6 4 8 4 10C4 12 6 14 8 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M24 10C26 10 28 12 28 14C28 16 26 18 24 18"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
};

export default SoyIcon;
