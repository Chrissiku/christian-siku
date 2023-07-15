import React from "react";
import { useTheme } from "next-themes";
import socialMediaIcons from "@/data/socilaMediaIcon";
import Image from "next/image";
import Link from "next/link";

const SocialMediaIcons = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex flex-row items-center justify-center mt-3 gap-8">
      {Object.values(socialMediaIcons).map((icon) => (
        <Link
          href={icon.link}
          target="_blank"
          key={icon.name}
          className="w-7 h-7"
        >
          {currentTheme === "light" ? (
            // Light theme icon
            <Image
              src={icon.icons[0] as string}
              alt={icon.name}
              className="w-full h-full object-cover scale-95 hover:scale-110 transition-all duration-100 ease-in-out"
            />
          ) : (
            // Dark theme icon
            <Image
              src={icon.icons[1] as string}
              alt={icon.name}
              className="w-full h-full object-cover scale-95 hover:scale-110 transition-all duration-100 ease-in-out"
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
