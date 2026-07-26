"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/card-contents";

export function Projects() {
  const router = useRouter();

  return (
    <main className="container flex flex-col gap-4">
      <label
        htmlFor="projects"
        className="text-lg font-bold font-body uppercase lg:pl-6"
      >
        Projects
      </label>
      <div id="projects" className="flex flex-col gap-6 lg:gap-0">
        {projects.map((info) => (
          <Card info={{ ...info, images: info.images }} key={info.title || ""} />
        ))}
      </div>
      <div className="flex justify-start lg:pl-6  ">
        <Button
          variant="link"
          className="text-sm font-body flex items-center gap-2 p-0 "
          onClick={() => router.push("/archive")}
        >
          <span className="text-lg font-body font-bold">View All Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </main>
  );
}
