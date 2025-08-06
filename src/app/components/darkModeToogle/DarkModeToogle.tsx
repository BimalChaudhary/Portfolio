"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export const DarkModeToogle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle dark mode"
    >
      {/* Light mode icon (Sun) */}
      <FaSun className="h-5 w-5 transition-all duration-300 ease-in-out scale-100 dark:scale-0" />

      {/* Dark mode icon (Moon) */}
      <FaMoon className="h-5 w-5 absolute transition-all duration-300 ease-in-out scale-0 dark:scale-100" />
    </Button>
  );
};
