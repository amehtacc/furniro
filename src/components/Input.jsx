import React from "react";

function Input({
  id,
  type = "text",
  label,
  placeholder,
  value,
  setValue,
  size = "md",
  className,
  ...props
}) {
  const baseStyle =
    "w-full relative outline-none rounded-md border-2 border-gray-300 focus:border-[#B88E2F] transition-all duration-300 ease-in-out";

  const sizeStyles = {
    lg: "px-4 py-2 text-lg",
    md: "px-3 py-2 tex-base",
    sm: "px-2 py-1 text-sm",
  };

  return (
    <div className="w-full flex flex-col items-start justify-center gap-1">
      <label htmlFor={id} className="text-[#be880a] font-medium">
        {label}
      </label>
      <input
        className={`${baseStyle} ${sizeStyles[size]} ${className}`}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
        {...props}
      />
    </div>
  );
}

export default Input;
