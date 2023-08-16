import Image from "next/image";
import React from "react";

type Props = {
  src: any | string;
  alt: string;
};

const ImageBox = ({ src, alt }: Props) => {
  return (
    <div className="group flex justify-center items-center relative mx-auto my-10 md:my-0">
      <div className="absolute -rotate-6 group-hover:rotate-0 transition-all duration-300 bg-purple h-full w-full rounded-lg"></div>
      <div className="absolute rotate-6 group-hover:rotate-0 transition-all duration-300 bg-purple h-full w-full rounded-lg"></div>
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
