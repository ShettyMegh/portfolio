"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import DecryptedText from "./react-bits/decrypt-text";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const date = new Date();
  const curYear = date.getFullYear();
  const isMobile = useIsMobile();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const btnSize = isMobile ? "lg" : "xl";
  return (
    <div className="flex flex-col items-center w-full sm:items-start bg-secondary/40 py-8 sm:py-16 px-6 sm:px-32 rounded-t-4xl rounded-tr-4xl shadow-2xl">
      <div className="flex w-full items-center justify-between">
        <p className="text-sm">&copy; {curYear}</p>
        <div className="flex gap-2 items-center">
          <p className="text-md uppercase spacing">Back to Top</p>
          <Button
            className="rounded-full"
            aria-label="Scroll to Top"
            size="icon"
            onClick={scrollTop}
          >
            <ArrowUpIcon />
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-xs font-semibold">
          LOOKING FOR A FRONTEND DEVELOPER?
        </p>
        <Link href="tel:+917022189794">
          <DecryptedText
            text="LET'S TALK"
            parentClassName="italic text-5xl sm:text-6xl md:text-8xl lg:text-9xl cursor-target tracking-widest"
          />
        </Link>
      </div>

      <div className="flex mt-8 gap-2 sm:gap-4">
        <Link
          href="https://github.com/ShettyMegh"
          target="_blank"
          tabIndex={-1}
        >
          <Button
            size={btnSize}
            {...(isMobile && {
              className: "py-1 px-3 text-xs font-semibold",
            })}
          >
            Github
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/meghanathshetty/"
          tabIndex={-1}
          target="_blank"
        >
          <Button
            size={btnSize}
            {...(isMobile && {
              className: "py-1 px-3 text-xs font-semibold",
            })}
          >
            LinkedIn
          </Button>
        </Link>
        <Link
          href="mailto:meghanathshetty108@gmail.com"
          target="_blank"
          tabIndex={-1}
        >
          <Button
            size={btnSize}
            {...(isMobile && {
              className: "py-1 px-3 text-xs font-semibold",
            })}
          >
            Email
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
