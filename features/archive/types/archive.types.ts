export interface ArchiveLink {
  name: string;
  path: string;
}

export interface ArchiveTechnology {
  name: string;
}

export interface ArchiveTableRow {
  year: string;
  project: string;
  madeAt: string;
  technologies?: ArchiveTechnology[];
  links?: ArchiveLink[];
}

export interface ArchiveTableProps {
  caption?: string;
  headers: string[];
  data: ArchiveTableRow[];
}
