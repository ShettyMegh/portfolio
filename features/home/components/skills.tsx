"use client";
import SkillsOrbit from "./orbits";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-fit w-full pt-12 sm:pt-16 letter-sap tracking-widest"
    >
      {/* <h1 className="text-5xl sm:text-6xl text-center italic">SKILLS</h1> */}
      <div className="flex flex-1 w-full min-h-full bg-background items-center justify-center">
        <SkillsOrbit />
      </div>
    </div>
  );
};

export default Skills;
