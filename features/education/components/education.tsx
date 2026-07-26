import { Card } from "@/components/shared";
import { education } from "@/lib/data/card-contents";

export function Education() {
  return (
    <main className="container flex flex-col gap-4">
      <label
        htmlFor="education"
        className="text-lg font-bold font-body uppercase lg:pl-6"
      >
        Education
      </label>
      <div id="education" className="flex flex-col gap-6 lg:gap-0">
        {education.map((info) => (
          <Card info={info} key={info.title || ""} />
        ))}
      </div>
    </main>
  );
}
