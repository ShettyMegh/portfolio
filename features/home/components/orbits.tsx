"use client";

import { useContainerSize } from "@/hooks/use-container-size";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import Image from "next/image";
import colors from "tailwindcss/colors";

type OrbitProps = {
  radius: number;
  skills: {
    label: string;
    iconUrl: string;
    key: string;
    isPureBlack: boolean;
  }[];
  duration?: number;
};

type OrbitRingProps = {
  radius: number; // px
  containerSize: number; // px
};

function OrbitRing({ radius, containerSize }: OrbitRingProps) {
  if (!containerSize) return null;

  const VIEWBOX = 100;
  const scale = containerSize / VIEWBOX;

  return (
    <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden>
      <circle
        cx="50"
        cy="50"
        r={radius / scale}
        fill="none"
        stroke={colors.blue[500]}
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function Orbit({ radius, skills, duration = 40 }: OrbitProps) {
  const angleStep = 360 / skills.length;
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
    >
      {skills.map((item, index) => {
        const angle = angleStep * index;

        return (
          <div
            key={item.key}
            className="absolute"
            style={{
              transform: `
                rotate(${angle}deg)
                translate(${radius}px)
                rotate(-${angle}deg)
              `,
            }}
          >
            <motion.div
              className="flex flex-col items-center"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration,
                ease: "linear",
              }}
            >
              <div
                className={`
                    ${isMobile ? "h-10 w-10" : "h-14 w-14"}
                    rounded-full
                bg-foreground
                border border-white/10
                flex items-center justify-center
                shadow-md
                transition
                hover:scale-110
              `}
              >
                <Image
                  src={item.iconUrl}
                  unoptimized
                  alt="Skill"
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className="object-contain"
                  {...(item.isPureBlack && {
                    className: "invert dark:invert-0",
                  })}
                />
              </div>
              <p className="text-center text-[9px] sm:text-xs text-foreground sm:font-semibold">
                {item.label}
              </p>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

const INNER_SKILLS = [
  {
    label: "ReactJs",
    iconUrl: "https://cdn.simpleicons.org/react",
    key: "react",
    isPureBlack: false,
  },
  {
    label: "TypeScript",
    iconUrl: "https://cdn.simpleicons.org/typescript",
    key: "typescript",
    isPureBlack: false,
  },
  {
    label: "JavaScript",
    iconUrl: "https://cdn.simpleicons.org/javascript",
    key: "javascript",
    isPureBlack: false,
  },
  {
    label: "NextJs",
    iconUrl: "https://cdn.simpleicons.org/nextdotjs",
    key: "nextdotjs",
    isPureBlack: true,
  },
  {
    label: "Tailwind CSS",
    iconUrl: "https://cdn.simpleicons.org/tailwindcss",
    key: "tailwindcss",
    isPureBlack: false,
  },
];

const OUTER_SKILLS = [
  {
    label: "HTML5",
    iconUrl: "https://cdn.simpleicons.org/html5",
    key: "html5",
    isPureBlack: false,
  },
  {
    label: "CSS",
    iconUrl: "https://cdn.simpleicons.org/css",
    key: "css",
    isPureBlack: false,
  },
  {
    label: "SASS",
    iconUrl: "https://cdn.simpleicons.org/sass",
    key: "sass",
    isPureBlack: false,
  },
  {
    label: "React Query",
    iconUrl: "https://cdn.simpleicons.org/reactquery",
    key: "reactquery",
    isPureBlack: true,
  },
  {
    label: "React Table",
    iconUrl: "https://cdn.simpleicons.org/tanstack",
    key: "tanstack",
    isPureBlack: true,
  },
  {
    label: "React Hook Form",
    iconUrl: "https://cdn.simpleicons.org/reacthookform",
    key: "reacthookform",
    isPureBlack: false,
  },
  {
    label: "Webpack",
    iconUrl: "https://cdn.simpleicons.org/webpack",
    key: "webpack",
    isPureBlack: false,
  },
  {
    label: "Eslint",
    iconUrl: "https://cdn.simpleicons.org/eslint",
    key: "eslint",
    isPureBlack: false,
  },
  {
    label: "Biome",
    iconUrl: "https://cdn.simpleicons.org/biome",
    key: "biome",
    isPureBlack: false,
  },
  {
    label: "Rspack",
    iconUrl: "https://cdn.simpleicons.org/rspack",
    key: "rspack",
    isPureBlack: false,
  },
];

export default function SkillsOrbit() {
  const { ref, size } = useContainerSize<HTMLDivElement>();
  const isMobile = useIsMobile();
  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[100vw - 200px] sm:max-w-[800px] flex items-center justify-center overflow-hidden"
    >
      {/* Center */}
      <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-foreground  flex items-center justify-center shadow-lg">
        <p className="text-xs sm:text-lg text-background font-semibold">
          Skills
        </p>
      </div>

      {/*
        For Desk - Inner - 150, outer - 240
        For Mob - Inner - 60, 120
        */}

      {/* Inner Orbit */}
      <OrbitRing radius={isMobile ? 70 : 150} containerSize={size} />
      <Orbit radius={isMobile ? 70 : 150} skills={INNER_SKILLS} duration={50} />

      {/* Outer Orbit (ready for future use) */}
      <OrbitRing radius={isMobile ? 138 : 240} containerSize={size} />
      <Orbit
        radius={isMobile ? 138 : 240}
        skills={OUTER_SKILLS}
        duration={30}
      />
    </div>
  );
}
