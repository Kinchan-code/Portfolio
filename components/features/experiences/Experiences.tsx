import Card from "@/components/shared/card/Card";
import { workExperience } from "@/lib/data/CardContents";
import React from "react";

function Experiences() {
  return (
    <>
      <label
        htmlFor="work-experience"
        className="text-lg font-bold font-body uppercase pl-[1.5rem]"
      >
        Work Experience
      </label>
      <div id="work-experience">
        {workExperience.map((info, index) => (
          <Card info={info} key={index} />
        ))}
      </div>
    </>
  );
}

export default Experiences;
