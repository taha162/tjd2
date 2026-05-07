import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  href?: string;
  variant?: "primary" | "secondary"; // 👈 أضفناها
};

export function Button({
  children,
  className = "",
  type = "button",
  disabled = false,
  icon,
  size = "md",
  href,
  variant = "primary",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-black text-white",
    secondary: "bg-white text-black border border-black",
  };

  const baseClass = `
    rounded-lg flex items-center gap-2 disabled:opacity-50
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={baseClass}>
      {icon}
      {children}
    </button>
  );
}