import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";

type Links = { name: string; path: string }[];

type Technologies = { name: string }[];

type TableData = {
  year: string;
  project: string;
  madeAt: string;
  technologies?: Technologies;
  links?: Links;
};

interface ArchiveTableProps {
  caption?: string;
  headers: string[];
  data: TableData[];
}

function ArchiveTable({ data, caption, headers }: ArchiveTableProps) {
  return (
    <Table>
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className={cn(
                "font-body",
                index === 2 && "hidden md:table-cell",
                index === 3 && "hidden md:table-cell",
                index === 4 && "hidden sm:table-cell"
              )}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="font-body">
        {data.map((data, index) => (
          <TableRow key={index}>
            <TableCell className="text-muted-foreground font-body font-semibold">
              {data.year}
            </TableCell>
            <TableCell className="font-bold font-body">
              {data.project}
            </TableCell>
            <TableCell className="hidden md:table-cell font-body font-medium">
              {data.madeAt}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <div className="flex gap-2 flex-wrap">
                {data.technologies?.map((tech) => (
                  <Badge
                    variant="outline"
                    className="w-fit bg-blue-200/40 p-2 rounded-full cursor-pointer dark:bg-blue-600/20"
                    key={tech.name}
                  >
                    <p className="text-md font-semibold text-blue-600 font-body dark:text-blue-400">
                      {tech.name}
                    </p>
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <div className="flex gap-2 flex-wrap">
                {data.links?.map((link) => (
                  <Button
                    variant="link"
                    className="font-bold text-sm flex justify-start"
                    onClick={() => {
                      window.open(link.path, "_blank");
                    }}
                    key={link.name}
                  >
                    <div className="flex gap-4 items-center">
                      <Link className="size-4" />
                      <p className="text-xs font-bold">{link.name}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ArchiveTable;
