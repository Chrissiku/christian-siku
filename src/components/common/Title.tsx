import React from "react";

type Props = {
  label1: string;
  label2: string;
  variant?: string;
};

const Title = ({ label1, label2, variant }: Props) => {
  return (
    <div className="flex flex-col justify-start">
      <div className="flex items-center justify-start space-x-3">
        <hr className="w-[20px] border border-cinder dark:border-light4" />
        <span className="uppercase text-sm text-[12px] tracking-[5px]">
          {label1}
        </span>
      </div>
      <h1 className="tracking-[3px] capitalize font-semibold text-[32px] lg:text-[44px] text-cinder dark:text-white">
        {" "}
        <span>{label2}</span>{" "}
        {variant && <span className="text-purple">{variant}</span>}
      </h1>
    </div>
  );
};

export default Title;
