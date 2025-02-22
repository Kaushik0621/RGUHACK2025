import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 p-6 border border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export default Card;