import Card from "@/components/shared/card/Card";
import { projects } from "@/lib/data/CardContents";
import React from "react";

function Projects() {
  return (
    <>
      <label
        htmlFor="projects"
        className="text-lg font-bold font-body uppercase pl-[1.5rem]"
      >
        Projects
      </label>
      <div id="projects">
        {projects.map((info, index) => (
          <Card info={{ ...info, image: info.image.src }} key={index} />
        ))}
      </div>
    </>
  );
}

export default Projects;
