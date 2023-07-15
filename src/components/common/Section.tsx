import React from "react";

type Props = {
  customClassName?: string;
  children: React.ReactNode;
};

const Section = ({ customClassName, children }: Props) => {
  const className = `w-full mx-auto ${customClassName || ""}`;

  return (
    <section className={className.trim()}>
      <div className="max-w-[1440px] px-5 md:px-10 lg:px-32 py-10 lg:py-14">
        {children}
      </div>
    </section>
  );
};

export default Section;
