interface MealIconProps {
  size?: number;
  className?: string;
}

const MealIcon = ({ size = 32, className = "" }: MealIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Мешок */}
      <path
        d="M8 12C8 10 10 8 12 8H20C22 8 24 10 24 12V24C24 26 22 28 20 28H12C10 28 8 26 8 24V12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.2"
      />

      {/* Горловина мешка */}
      <path
        d="M10 8C10 6 12 4 16 4C20 4 22 6 22 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Завязка */}
      <path
        d="M12 8H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Гранулы жмыха */}
      <circle cx="12" cy="14" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="13" r="0.8" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="15" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="17" r="0.8" fill="currentColor" opacity="0.7" />
      <circle cx="18" cy="16" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="13" cy="20" r="0.8" fill="currentColor" opacity="0.7" />
      <circle cx="17" cy="19" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="15" cy="22" r="0.8" fill="currentColor" opacity="0.7" />
      <circle cx="19" cy="22" r="0.8" fill="currentColor" opacity="0.7" />
      <circle cx="11" cy="23" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="21" cy="24" r="0.8" fill="currentColor" opacity="0.7" />

      {/* Дополнительные мелкие частицы */}
      <circle cx="15" cy="15" r="0.4" fill="currentColor" opacity="0.5" />
      <circle cx="19" cy="18" r="0.4" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="19" r="0.4" fill="currentColor" opacity="0.5" />
      <circle cx="16" cy="21" r="0.4" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="20" r="0.4" fill="currentColor" opacity="0.5" />

      {/* Швы на мешке */}
      <path
        d="M8 16L10 16"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M8 20L10 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M8 24L10 24"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
};

export default MealIcon;
