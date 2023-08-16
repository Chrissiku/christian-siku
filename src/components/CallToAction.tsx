import React, { useState } from "react";
import {
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const contactInfo = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div
      className={`z-40 flex w-[250px] justify-end items-center fixed top-[02%] right-0 translate-y-1/2 transition-all 
      duration-700 ease-in-out ${
        isVisible ? "translate-x-0" : "translate-x-[82%]"
      }`}
      onClick={handleClick}
    >
      <div className="w-full relative flex flex-row items-start justify-start">
        <button
          type="button"
          className="bg-purple p-2 rounded-s-lg outline-none focus:outline-none"
        >
          {isVisible ? (
            <XCircleIcon
              className="w-8 h-8 text-red-700 animate-spin"
              style={{ animationDuration: "3s" }}
            />
          ) : (
            <InformationCircleIcon
              className="w-8 h-8 text-white animate-spin"
              style={{ animationDuration: "3s" }}
            />
          )}
          {""}
        </button>
        <div className="bg-purple p-3 w-full">
          <div className="grid grid-cols-3 w-full items-center justify-center gap-5 mx-auto">
            {contactInfo.map((item, index) => (
              <Link
                href="/"
                key={`cat-${index}`}
                className="p-2 text-center border rounded-lg mx-auto bg-light-4"
              >
                <InformationCircleIcon className="w-6 h-6 text-cinder" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
