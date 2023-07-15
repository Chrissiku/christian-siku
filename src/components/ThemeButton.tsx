import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <span className="sr-only">Toggle theme</span>
      {currentTheme === "light" ? (
        <MoonIcon className="block h-8 w-8 text-cinder" aria-hidden="true" />
      ) : (
        <SunIcon className="block h-8 w-8 text-yellow-500" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeButton;
