import React from "react";

type Props = {
  label: string;
  customClassName?: string;
};

const CardTitle = ({ label, customClassName }: Props) => {
  const className = `first-letter:uppercase w-full font-semibold text-[16px] ${
    customClassName || ""
  }`;
  return <h4 className={className.trim()}>{label}</h4>;
};

export default CardTitle;
