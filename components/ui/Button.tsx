import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: Props) => { 
  return (
    <button className={`py-1 px-3 border rounded-md text-sm cursor-default bg-primary text-secondary hover:bg-primary/80 transition-all ${className}`}>
      {children}
    </button>
  );
};

export default Button;
