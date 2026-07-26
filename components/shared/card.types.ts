import type { StaticImageData } from "next/image";

export interface CardLink {
  name: string;
  path: string;
}

export interface CardTechnology {
  name: string;
}

export interface CardInfo {
  date?: string;
  images?: StaticImageData[];
  title?: string;
  path?: string;
  company?: string;
  description?: string;
  links?: CardLink[];
  technologies?: CardTechnology[];
}

export interface CardProps {
  info: CardInfo;
}
