import React, { ButtonHTMLAttributes, ReactNode } from "react";

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
}) {
  return (
    <button
      className="px-4 py-2 text-lg rounded-full bg-blue-100 text-slate-500 disabled:opacity-30"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
