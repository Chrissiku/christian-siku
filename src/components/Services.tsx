import React from "react";
import Section from "./common/Section";
import Title from "./common/Title";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import P3 from "./common/P3";
import CardTitle from "./common/CardTitle";

const Services = () => {
  const card = [1, 2, 3, 4];
  return (
    <Section customClassName="bg-light2 dark:bg-transparent">
      <div className="w-full mx-auto grid grid-cols-1 items-start justify-center gap-10 md:gap-16">
        <div className="mx-auto">
          <Title label1="services" label2="specialized in" />
        </div>
        <div
          className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center 
        items-center gap-5"
        >
          {card.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex flex-col items-center justify-between md:scale-95
              gap-5 p-5 md:py-8 hover:bg-light4 transition-all duration-300 ease-in-out md:hover:scale-100"
            >
              <div className="w-full flex flex-row md:flex-col  items-center justify-between md:gap-5">
                <div className="text-purple bg-[#e9e6f7] p-4 rounded-lg">
                  <GlobeAltIcon className=" h-6 w-6 md:h-8 md:w-8" />
                </div>
                <CardTitle
                  label="UI/UX Design"
                  customClassName="text-dark text-center"
                />
              </div>
              <P3 customClassName="text-cinder text-center">
                Turn what you have in mind of a digital product into reality.
                For any platform you consider.
              </P3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
