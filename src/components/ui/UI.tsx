import React from 'react';
import { ArrowRight } from 'lucide-react';

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-semibold rounded-full transition-all duration-300 ease-in-out flex items-center justify-center";
  const variantStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
    secondary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
    outline: "bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
  };
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

// Card Component
interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 rounded-full p-3 mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <Button variant="outline" size="small" className="w-full">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

// Badge Component
interface BadgeProps {
  text: string;
  color?: 'green' | 'blue' | 'yellow' | 'red';
}

export const Badge: React.FC<BadgeProps> = ({ text, color = 'green' }) => {
  const colorStyles = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800"
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${colorStyles[color]}`}>
      {text}
    </span>
  );
};

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
        {label}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

