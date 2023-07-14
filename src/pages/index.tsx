import { useTheme } from "next-themes";
import ThemeButton from "@/components/ThemeButton";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <h1>Hello</h1>
      {theme === "light" ? (
        <h2
          className={` text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}
        >
          LIGHT MODE
        </h2>
      ) : (
        <h2
          className={` text-4xl sm:text-6xl md:text-9xl text-center text-white `}
        >
          DARK MODE
        </h2>
      )}
      <ThemeButton />
    </>
  );
}
