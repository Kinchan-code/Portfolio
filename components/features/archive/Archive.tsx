"use client";

import ArchiveTable from "@/components/features/archive/components/ArchiveTable";
import { data, headers } from "@/lib/data/ArchiveData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function Archive() {
  const router = useRouter();

  return (
    <main className="min-h-screen max-w-screen px-6 lg:mx-[8rem] lg:px-12">
      <section className="flex flex-col gap-6 h-screen w-full py-12">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-sm font-body flex items-center gap-2 p-0 hover:bg-transparent"
            onClick={() => router.back()}
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

export default Archive;
