import React from "react";
import Card from "./card";

const ProjectsContent = () => {
  return (
    <div className="mt-16 w-full relative z-1">
      <h1 className="text-4xl text-center">Projects</h1>
      <div className="flex gap-4 mt-8 flex-wrap mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProjectsContent;
