interface BarleyIconProps {
  size?: number;
  className?: string;
}

const BarleyIcon = ({ size = 32, className = "" }: BarleyIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Главный стебель */}
      <path
        d="M16 4V28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Левые колоски */}
      <ellipse
        cx="12"
        cy="8"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse
        cx="10"
        cy="12"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse
        cx="12"
        cy="16"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse
        cx="10"
        cy="20"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse
        cx="12"
        cy="24"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Правые колоски */}
      <ellipse
        cx="20"
        cy="8"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse
        cx="22"
        cy="12"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse
        cx="20"
        cy="16"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse
        cx="22"
        cy="20"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse
        cx="20"
        cy="24"
        rx="2"
        ry="1.5"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Усики */}
      <path d="M12 6L8 4" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path
        d="M20 6L24 4"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M10 10L6 8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M22 10L26 8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
};

export default BarleyIcon;
