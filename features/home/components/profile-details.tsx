"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import colors from "tailwindcss/colors";

declare global {
  interface Window {
    LeaderLine?: LeaderLineConstructor;
  }
}

type LeaderLineInstance = {
  remove: () => void;
  position?: () => void;
};
type LeaderLineConstructor = new (
  start: Element,
  end: Element,
  options?: Record<string, unknown>
) => LeaderLineInstance;

const ProfileDetails = () => {
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLParagraphElement | null>(null);
  const destRef = useRef<HTMLParagraphElement | null>(null);
  const mailRef = useRef<HTMLParagraphElement | null>(null);
  const expRef = useRef<HTMLParagraphElement | null>(null);
  const cityRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    let line1: LeaderLineInstance | null = null;
    let line2: LeaderLineInstance | null = null;
    let line3: LeaderLineInstance | null = null;
    let line4: LeaderLineInstance | null = null;
    let line5: LeaderLineInstance | null = null;
    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 50; // retry for ~5s

    const positionLines = () => {
      line1?.position?.();
      line2?.position?.();
      line3?.position?.();
      line4?.position?.();
      line5?.position?.();
    };

    const attachLines = () => {
      if (cancelled || attempts >= maxAttempts) return;
      attempts += 1;

      const LeaderLineCtor: LeaderLineConstructor | undefined =
        window?.LeaderLine;
      if (
        !LeaderLineCtor ||
        !avatarRef.current ||
        !nameRef.current ||
        !destRef.current ||
        !expRef.current ||
        !cityRef.current ||
        !mailRef.current
      ) {
        setTimeout(attachLines, 100);
        return;
      }

      line1 = new LeaderLineCtor(avatarRef.current, nameRef.current, {
        color: colors.blue[500],
        size: 2,
        path: "grid",
        dash: { animation: true },
        startPlug: "disc",
        endPlug: "arrow3",
      });

      line2 = new LeaderLineCtor(avatarRef.current, destRef.current, {
        color: colors.blue[500],
        size: 2,
        path: "grid",
        dash: { animation: true },
        startPlug: "disc",
        endPlug: "arrow3",
      });

      line3 = new LeaderLineCtor(avatarRef.current, expRef.current, {
        color: colors.blue[500],
        size: 2,
        path: "grid",
        dash: { animation: true },
        startPlug: "disc",
        endPlug: "arrow3",
      });

      line4 = new LeaderLineCtor(avatarRef.current, cityRef.current, {
        color: colors.blue[500],
        size: 2,
        path: "grid",
        dash: { animation: true },
        startPlug: "disc",
        endPlug: "arrow3",
      });

      line5 = new LeaderLineCtor(avatarRef.current, mailRef.current, {
        color: colors.blue[500],
        size: 2,
        path: "grid",
        dash: { animation: true },
        startPlug: "disc",
        endPlug: "arrow3",
      });
      window.addEventListener("resize", positionLines);
      window.addEventListener("scroll", positionLines, true);
    };

    attachLines();

    return () => {
      cancelled = true;
      window.removeEventListener("resize", positionLines);
      window.removeEventListener("scroll", positionLines, true);
      line1?.remove?.();
      line2?.remove?.();
      line3?.remove?.();
      line4?.remove?.();
      line5?.remove?.();
    };
  }, []);
  return (
    <div className="relative flex items-center flex-col sm:flex-row gap-5 sm:gap-40">
      <div
        ref={avatarRef}
        className="flex shrink-0 gap-4 h-45 w-45 sm:h-30 sm:w-30 overflow-hidden rounded-sm sm:rounded-full relative border-4 border-blue-500"
      >
        <Image
          src="/profile.png"
          width={115}
          height={115}
          alt="Meghanath S Shetty"
          className="object-cover object-top h-45 w-45 sm:w-30 sm:h-30"
        />
      </div>
      <div className="text-sm sm:text-sm flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
        <p ref={nameRef} className="pl-1 font-semibold">
          🧔🏻‍♂️ Meghanath S Shetty
        </p>
        <p ref={destRef} className="pl-1 font-medium">
          💼 Senior Frontend Dev
        </p>
        <a href="mailto:meghanathshetty108@gmail.com">
          <p ref={mailRef} className="pl-1 font-medium underline opacity-80">
            📧 meghanathshetty108
          </p>
        </a>
        <p ref={expRef} className="pl-1 opacity-80">
          🕒 2.5 years
        </p>
        <p ref={cityRef} className="pl-1 opacity-80">
          🏢 SurveySparrow (Chennai)
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
