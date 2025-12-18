import React from "react";
import Card from "./card";
import Image from "next/image";
import Particles from "@/features/common/components/react-bits/particles";

const ProjectsContent = () => {
  return (
    <div id="projects" className="pt-18 w-full relative z-1">
      <h1 className="text-4xl text-center">Projects</h1>
      <div className="flex flex-col md:flex-row  gap-[12px] mt-8 md:flex-wrap mx-auto ">
        <Card
          title="UrbanGruha"
          desc="A Commercial Construction Website."
          imgUrl="/projects/urbangruha.png"
          href="https://urbangruha.com"
          pills="NextJs, Shadcn, Tailwind CSS, Framer Motion"
        />

        <div className="sm:max-w-[246px] pb-3 w-full rounded-2xl overflow-hidden hover:scale-[1.01] dark:bg-blue-950/40  bg-gray-100  drop-shadow-lg relative">
          <Particles
            className="absolute! [&>canvas]:h-full"
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
          <div className="w-full flex flex-col justify-end items-center relative">
            <Image
              height={100}
              width={100}
              src="/projects/coming-soon.png"
              alt="Coming Soon"
              className="h-full! w-full!"
            />
            {/* <div className="px-2 self-start">
              <h2 className="text-md mt-4">In Progress</h2>
              <p
                className="text-muted-foreground text-xs pt-1 text-wrap text-ellipsis line-clamp-3"
                title="asd"
              >
                In the lab right now 🛠️
              </p>
            </div> */}
            <div className="absolute w-full rotate-45 top-[16px] right-[-88px] shadow-sm">
              <h3 className="text-sm mt-4 bg-foreground/80 text-background text-center">
                In Progress
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
