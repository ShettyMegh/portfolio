"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div className="py-2 px-3 bg-secondary/50 dark:bg-secondary/50 backdrop-blur-sm rounded-2xl shadow-lg">
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
