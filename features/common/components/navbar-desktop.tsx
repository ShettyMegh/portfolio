"use client";
import Link from "next/link";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusinessIcon,
  HomeIcon,
  PenLineIcon,
  PhoneIcon,
  WandIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, startTransition } from "react";

export function NavbarDesktop() {
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
    <div className="bottom-2 fixed left-[50%] translate-x-[-50%] sm:bottom-auto sm:top-4 flex items-center gap-2 z-1">
      <div className="bg-background rounded-md">
        {mounted && curTheme.resolvedTheme && (
          <Image src={src} alt="Meghanath S Shetty" height={40} width={40} />
        )}
      </div>
      <div className=" w-max py-2 px-4 bg-secondary/50 dark:bg-secondary/50 backdrop-blur-sm rounded-2xl shadow-xs">
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`navigationMenuTriggerStyle() p-0`}
              >
                <Link href="/">
                  <Button size="icon-lg" variant="ghost">
                    <HomeIcon size={25} />
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`navigationMenuTriggerStyle() p-0`}
              >
                <Link href="/projects">
                  {" "}
                  <Button size="icon-lg" variant="ghost">
                    <BriefcaseBusinessIcon />
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`navigationMenuTriggerStyle() p-0`}
              >
                <Link href="/#skills">
                  {" "}
                  <Button size="icon-lg" variant="ghost">
                    <WandIcon />
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`navigationMenuTriggerStyle() p-0`}
              >
                <Link href="/blogs">
                  {" "}
                  <Button size="icon-lg" variant="ghost">
                    <PenLineIcon />
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`navigationMenuTriggerStyle() p-0`}
              >
                <Link href="/contact">
                  {" "}
                  <Button size="icon-lg" variant="ghost">
                    <PhoneIcon />
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <ThemeToggle />
    </div>
  );
}
