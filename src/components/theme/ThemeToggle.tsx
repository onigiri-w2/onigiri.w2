"use client";

import type { FC } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = ({ className = "" }) => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`h-full aspect-square rounded-md cursor-pointer flex justify-center items-center ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === "dark" ? (
        <Sun size={20} strokeWidth={1.5} className="text-primary" />
      ) : (
        <Moon size={20} strokeWidth={1.5} className="text-primary" />
      )}
    </button>
  );
};
