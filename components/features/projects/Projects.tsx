import Card from "@/components/shared/card/Card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/CardContents";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

function Projects() {
  const router = useRouter();

  return (
    <main className="container flex flex-col gap-4">
      <label
        htmlFor="projects"
        className="text-lg font-bold font-body uppercase lg:pl-[1.5rem]"
      >
        Projects
      </label>
      <div id="projects" className="flex flex-col gap-6 lg:gap-0">
        {projects.map((info, index) => (
          <Card info={{ ...info, image: info.image.src }} key={index} />
        ))}
      </div>
      <div className="flex justify-start lg:pl-[1.5rem]  ">
        <Button
          variant="link"
          className="text-sm font-body flex items-center gap-2 p-0 "
          onClick={() => router.push("/archive")}
        >
          <span className="text-lg font-body font-bold">View All Projects</span>
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </main>
  );
}

export default Projects;
