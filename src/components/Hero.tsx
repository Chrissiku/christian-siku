import React from "react";
import Section from "./common/Section";
import Title from "./common/Title";
import SocialMediaIcons from "./SocialMediaIcons";
import Image from "next/image";
import hero from "../assets/hero/heroImage.jpg";
import ImageBox from "./common/ImageBox";

const Hero = () => {
  return (
    <Section>
      <div
        className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between 
      gap-10 lg:gap-20 md:py-5 lg:py-20"
      >
        <div className="flex flex-col justify-between items-start gap-5">
          <Title label1="my name is" label2="christian" variant="siku" />
          <div className="block md:hidden">
            <ImageBox src={hero} alt="hero image" />
          </div>
          <p className="text-left text-[16px]">
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:tracking-wide to apply the tracking-wide utility
            at only medium screen sizes and above.
          </p>
          <div className="w-full lg:w-auto mx-auto lg:mx-0 z-40">
            <SocialMediaIcons />
          </div>
        </div>
        <div className="hidden md:block">
          <ImageBox src={hero} alt="hero image" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
