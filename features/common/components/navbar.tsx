"use client";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusinessIcon,
  // PenLineIcon,
  PhoneIcon,
  WandIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, startTransition } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatedThemeToggler } from "@/components/ui/animate-theme";

const NAV_ITEMS = [
  {
    label: "Projects",
    path: "/#projects",
    icon: BriefcaseBusinessIcon,
  },
  {
    label: "Skills",
    path: "/#skills",
    icon: WandIcon,
  },
  // {
  //   label: "Blogs",
  //   path: "/blogs",
  //   icon: PenLineIcon,
  // },
  {
    label: "Contact",
    path: "tel:+917022189794",
    icon: PhoneIcon,
  },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const curTheme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const getThemeImage = () => {
    const mode = curTheme.resolvedTheme ?? curTheme.theme ?? "light";
    switch (mode) {
      case "light":
        return "/ms-bg-black.png"; // Path to light theme image
      case "dark":
        return "/ms-bg-white.png"; // Path to dark theme image
      default:
        return "/ms-bg-black.png"; // Fallback or system theme
    }
  };

  const src = getThemeImage();

  return (
    <div className="fixed left-[50%] translate-x-[-50%] top-4 flex items-center gap-2 z-2 w-full justify-center">
      <div className="flex py-1 px-2 sm:py-2 sm:px-4 bg-secondary/50 dark:bg-secondary/50 backdrop-blur-sm rounded-2xl shadow-md">
        <Link href="/" className="inline-flex">
          <Button
            size="icon-lg"
            className="rounded-full"
            variant="ghost"
            tabIndex={-1}
          >
            {mounted && curTheme.resolvedTheme && (
              <Image
                src={src}
                alt="Meghanath S Shetty"
                height={40}
                width={40}
                className="w-9 h-9 sm:w-10 sm:h-10"
              />
            )}
          </Button>
        </Link>
      </div>
      <div className="w-max py-1 px-2 sm:py-2 sm:px-4 bg-secondary/50 dark:bg-secondary/50 backdrop-blur-sm rounded-2xl shadow-md">
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList className="flex-wrap gap-3">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <NavigationMenuItem key={item.path}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <NavigationMenuLink asChild className="rounded-full p-0">
                        <Link href={item.path}>
                          <Button
                            size="icon-lg"
                            className="rounded-full"
                            variant="ghost"
                            tabIndex={-1}
                          >
                            <Icon className="h-6! w-6!" />
                          </Button>
                        </Link>
                      </NavigationMenuLink>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs!">{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="py-1 px-2 sm:py-2 sm:px-4 bg-secondary/50 dark:bg-secondary/50 backdrop-blur-sm rounded-2xl shadow-md">
        <AnimatedThemeToggler />
      </div>
    </div>
  );
}
