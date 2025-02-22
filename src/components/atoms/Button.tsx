import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  className = '',
}) => {
  const baseStyles = 'rounded-full font-medium transition-colors flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90',
    secondary: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon className="mr-2" size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />}
      {children}
    </button>
  );
};

export default Button;