import Image from "next/image";
import React from "react";

type Props = {
  src: any | string;
  alt: string;
};

const ImageBox = ({ src, alt }: Props) => {
  return (
    <div className="flex justify-center items-center relative mx-auto">
      <div className="hidden md:block absolute left-5 bottom-5 bg-purple h-full w-full rounded-lg"></div>
      <div className="relative text-gray-50 rounded-lg overflow-hidden">
        <Image
          src={src as string}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageBox;
