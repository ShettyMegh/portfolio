"use client";
import Image from "next/image";
import FuzzyText from "@/features/common/components/react-bits/fuzzy-text";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const NotFoundContent = () => {
  const theme = useTheme();
  const isDark = theme.resolvedTheme === "dark";

  return (
    <div className="relative z-1 min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <Image
        height={300}
        width={300}
        src="/not-found.png"
        alt="Page Not Found"
        priority
      />
      <FuzzyText>404 - Page Not Found</FuzzyText>
      <p className="max-w-md text-muted-foreground">
        The page you are looking for doesn&apos;t exist. Try one of the links
        above to keep exploring.
      </p>
    </div>
  );
};

export default NotFoundContent;
