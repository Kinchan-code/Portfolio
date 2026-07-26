import { Card } from "@/components/shared";
import { workExperience } from "@/lib/data/card-contents";

export function Experiences() {
  return (
    <main className="container flex flex-col gap-4">
      <label
        htmlFor="work-experience"
        className="text-lg font-bold font-body uppercase lg:pl-6"
      >
        Work Experience
      </label>
      <div id="work-experience" className="flex flex-col gap-6 lg:gap-0">
        {workExperience.map((info) => (
          <Card
            info={info}
            key={`${info.company}-${info.title}-${info.date}`}
          />
        ))}
      </div>
    </main>
  );
}
