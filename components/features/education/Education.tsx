import Card from "@/components/shared/card/Card";
import { education } from "@/lib/data/CardContents";

function Education() {
  return (
    <>
      <label
        htmlFor="projects"
        className="text-lg font-bold font-body uppercase pl-[1.5rem]"
      >
        Education
      </label>
      <div id="projects">
        {education.map((info, index) => (
          <Card info={info} key={index} />
        ))}
      </div>
    </>
  );
}

export default Education;
