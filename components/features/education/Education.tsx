import Card from "@/components/shared/card/Card";
import { education } from "@/lib/data/CardContents";

function Education() {
  return (
    <main className="container flex flex-col gap-4">
      <label
        htmlFor="education"
        className="text-lg font-bold font-body uppercase lg:pl-[1.5rem]"
      >
        Education
      </label>
      <div id="education" className="flex flex-col gap-6 lg:gap-0">
        {education.map((info, index) => (
          <Card info={info} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Education;
