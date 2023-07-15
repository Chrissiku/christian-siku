import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
  customClassName?: string;
};

const Button = ({ label, onClick, customClassName }: Props) => {
  const className = `first-letter:uppercase w-full rounded-md px-4 py-3 text-sm shadow-md ${
    customClassName || ""
  }`;

  return (
    <button onClick={onClick} className={className.trim()}>
      {label}
    </button>
  );
};

export default Button;
