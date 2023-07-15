import React from "react";

type Props = {
  children: React.ReactNode;
  customClassName?: string;
};

const P3 = ({ children, customClassName }: Props) => {
  const className = `first-letter:uppercase w-full text-[14px] ${
    customClassName || ""
  }`;
  return <p className={className.trim()}>{children}</p>;
};

export default P3;
