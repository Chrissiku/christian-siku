/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  src: any | string;
  title: string;
  link: string;
  stack: string[];
};

const WorkCard = ({ src, title, link, stack }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-black group">
      <div className="w-full mx-auto">
        <div className="w-full h-[250px] mx-auto aspect-video">
          <Image
            src={src}
            alt={title}
            className="w-full h-full object-cover filter grayscale-[70%] 
          group-hover:grayscale-0 transition-all duration-500 easy-in-out"
          />
        </div>
      </div>
      <div
        className="rounded-b-lg w-full mx-auto px-4 py-6 bg-white border-b border-l border-r 
    border-light4 flex flex-col items-start justify-between gap-1 group-hover:bg-light4 
    transition-all duration-500 easy-in-out"
      >
        <h4 className="text-[16px] font-semibold">Project title</h4>
        <div className="flex flex-row items-center justify-between gap-3 w-full">
          <div className="inline-flex items-center justify-start gap-2">
            {stack.map((item, index) => (
              <span
                key={index}
                className="text-[13px] border border-light4 hover:bg-light3 px-2 py-1 rounded-lg"
              >
                {item}
              </span>
            ))}
          </div>
          <Link
            href={link}
            target="_blank"
            className="cursor-pointer text-gray-600 hover:text-black font-bold"
          >
            <LinkIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
