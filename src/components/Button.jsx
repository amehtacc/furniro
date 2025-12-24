import React from "react";

function Button({
  children,
  variant,
  size,
  disabled = false,
  className,
  ...props
}) {
  const baseStyle =
    "flex items-center justify-center outline-none cursor-pointer transition-colors duration-200 ease-in-out";

  const variantStyles = {
    primary: "bg-[#B88E2F] text-white hover:bg-[#B88E2F]/95",
    secondary: "bg-white text-[#B88E2F] hover:text-white hover:bg-[#B88E2F]",
    outline:
      "border border-[#B88E2F] text-[#B88E2F] bg-white hover:bg-[#B88E2F] hover:text-white",
  };

  const sizeStyles = {
    lg: "px-16 py-6 text-lg",
    md: "px-12 py-4 text-base",
    sm: "px-8 py-3 text-sm",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
