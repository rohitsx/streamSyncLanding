import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, title, className = "" }) => (
  <div
    className={`bg-gray-800/50 backdrop-blur-xl p-4 md:p-8 rounded-2xl shadow-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300 ${className}`}
  >
    {title && (
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
        {title}
      </h3>
    )}
    {children}
  </div>
);

export default Card;
