import React from "react";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  Icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  onClick,
  children,
  Icon,
  className = "",
}) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`px-4 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 text-base md:text-lg font-medium flex items-center gap-2 w-full md:w-auto justify-center
      ${
        active
          ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white scale-105 shadow-lg shadow-blue-500/25"
          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:scale-102"
      }
      ${className}`}
  >
    {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" />}
    {children}
  </button>
);

export default TabButton;
