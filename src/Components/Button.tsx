import React from "react";
import { twMerge } from "tailwind-merge"; 
import { clsx } from "clsx"; 
interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  children?: React.ReactNode;
  classNames?: string;
  rest?: Record<string, unknown>;
  removeDefaultStyles?: boolean;
  
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  children,
  classNames,
  removeDefaultStyles = false,
  ...rest
}) => {
  const baseStyles =
    "px-4 py-2 rounded  font-medium focus:outline-none cursor-pointer";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";


  const finalClassNames = removeDefaultStyles
    ? classNames 
    : twMerge(

        clsx(

          baseStyles,
          variantStyles[variant],
          disabled && disabledStyles
        ),
        classNames 
      );


  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className={finalClassNames} 
    >
      {children}
    </button>
  );
};

export default Button;
