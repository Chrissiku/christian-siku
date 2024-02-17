import React from "react";
import Section from "./common/Section";
import Title from "./common/Title";
import P3 from "./common/P3";
import CardTitle from "./common/CardTitle";
import ServicesData from "../data/service";

const Services = () => {
  return (
    <Section customClassName="bg-light2 dark:bg-transparent">
      <div className="w-full mx-auto grid grid-cols-1 items-start justify-center gap-10 md:gap-16">
        <div className="mx-auto">
          <Title label1="services" label2="specialized in" />
        </div>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5">
          {ServicesData.map((item, index) => (
            <div
              key={`service-${item.id} ${index}`}
              className="bg-white rounded-lg flex flex-col items-center justify-between md:scale-95
              gap-5 p-5 md:py-8 hover:bg-light4 transition-all duration-300 ease-in-out md:hover:scale-100"
            >
              <div className="w-full flex flex-row md:flex-col  items-center justify-between md:gap-5 z-40">
                <div className="text-purple bg-[#e9e6f7] p-4 rounded-lg">
                  <item.icon className=" h-6 w-6 md:h-8 md:w-8" />
                </div>
                <CardTitle
                  label={item?.title}
                  customClassName="text-dark text-center"
                />
              </div>
              <P3 customClassName="text-cinder text-center">
                {item?.description}
              </P3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
