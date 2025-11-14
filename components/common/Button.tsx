import {ButtonProps} from '../../interfaces';
import Link from 'next/link';
import React from 'react';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  size = "md",
  rounded = "md",
  bgColor,
  textColor,
  href,
}) => {
  const base =
    "inline-block font-semibold transition disabled:bg-gray-400 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    custom: "",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const roundeds = {
    sm: "rounded-sm",
    md: "rounded-md",
    full: "rounded-full",
  };

  const customColors =
    variant === "custom" ? `${bgColor ?? ""} ${textColor ?? ""}` : "";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${roundeds[rounded]} ${customColors}`;

  // If `href` is passed, render as <Link>
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;