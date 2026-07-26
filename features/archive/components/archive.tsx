"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ArchiveTable } from "@/features/archive/components/archive-table";
import { data, headers } from "@/features/archive/data/archive-data";

export function Archive() {
  const router = useRouter();

  return (
    <main className="min-h-screen max-w-screen px-6 lg:mx-32 lg:px-12">
      <section className="flex flex-col gap-6 h-screen w-full py-12">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-sm font-body flex items-center gap-2 p-0 hover:bg-transparent"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-lg font-body">Christian Bangay</span>
          </Button>
        </div>
        <h1 className="text-4xl font-bold font-heading">All Projects</h1>

        <ArchiveTable data={data} headers={headers} />
      </section>
    </main>
  );
}
