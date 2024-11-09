import Card from "@/components/shared/card/Card";
import { workExperience } from "@/lib/data/CardContents";
import React from "react";

function Experiences() {
  return (
    <main className="container flex flex-col gap-4">
      <label
        htmlFor="work-experience"
        className="text-lg font-bold font-body uppercase lg:pl-[1.5rem]"
      >
        Work Experience
      </label>
      <div id="work-experience" className="flex flex-col gap-6 lg:gap-0">
        {workExperience.map((info, index) => (
          <Card info={info} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Experiences;
