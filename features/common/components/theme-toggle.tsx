"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div className="py-1 px-2 sm:py-2 sm:px-4 bg-secondary/50 dark:bg-secondary/50 backdrop-blur-sm rounded-2xl shadow-md">
      <Button
        size="icon-lg"
        variant="ghost"
        className="cursor-target"
        onClick={() => {
          if (resolvedTheme === "light") {
            setTheme("dark");
            return;
          }
          setTheme("light");
        }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default ThemeToggle;
