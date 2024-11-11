import React, { PropsWithChildren, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Modal from "../modal/Modal";
import { StaticImageData } from "next/image";

type Links = { name: string; path: string }[];

type Technologies = { name: string }[];

type Info = {
  date?: string;
  images?: StaticImageData[];
  title?: string;
  path?: string;
  company?: string;
  description?: string;
  links?: Links;
  technologies?: Technologies;
};

type CardProps = PropsWithChildren<{
  info: Info;
}>;

function Card({ info }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalWithImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    if (info.images) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % (info.images?.length ?? 1)
      );
    }
  };

  return (
    <main className="flex gap-6 lg:p-4 p-2 lg:px-6 lg:flex-row flex-col w-full rounded-lg hover:bg-primary/5 cursor-pointer">
      <section className="w-full lg:w-1/4">
        {info.date && (
          <p className="font-list font-bold text-xs text-muted-foreground uppercase pt-1">
            {info.date}
          </p>
        )}
      </section>
      <section className="w-full lg:w-3/4 flex flex-col gap-2">
        <div
          className="font-bold text-md flex items-center gap-2 cursor-pointer hover:underline hover:text-blue-600 dark:hover:text-blue-400"
          onClick={() => {
            if (info.path) {
              window.open(info.path, "_blank");
            }
          }}
        >
          <span className="flex items-center gap-2">
            {info.title || ""} {info.company && "•"} {info.company || ""}
          </span>
        </div>
        <p className="text-muted-foreground font-semibold text-sm text-justify">
          {info.description || ""}
        </p>
        {info.links && (
          <div className="flex gap-2 flex-wrap">
            {info.links?.map((link) => (
              <Button
                variant="link"
                className="font-bold text-sm flex justify-start"
                onClick={() => {
                  info.links?.forEach((link) =>
                    window.open(link.path, "_blank")
                  );
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
        )}
        {info.images && (
          <div className="flex overflow-x-auto gap-2 cursor-gr">
            {info.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={info.title || ""}
                height={150}
                width={150}
                className="rounded-md object-cover size-auto cursor-pointer"
                onClick={() => openModalWithImage(index)}
              />
            ))}
          </div>
        )}
        {isOpen && (
          <Modal
            trigger={null}
            title={info.title || ""}
            open={isOpen}
            setOpen={setIsOpen}
          >
            <div
              className="flex justify-center items-center relative"
              onClick={handleNext}
            >
              <Image
                src={
                  info.images?.[currentImageIndex] ||
                  "/path/to/fallback/image.jpg"
                }
                alt={info.title || ""}
                height={1000}
                width={1000}
                className="rounded-md size-auto object-cover"
              />
            </div>
          </Modal>
        )}
        {info.technologies && (
          <div className="flex gap-2 flex-wrap">
            {info.technologies?.map((tech) => (
              <Badge
                variant="outline"
                className=" w-fit bg-blue-200/40 p-2 rounded-full cursor-pointer dark:bg-blue-600/20"
                key={tech.name}
              >
                <p className="text-md font-semibold text-blue-600 font-body dark:text-blue-400">
                  {tech.name}
                </p>
              </Badge>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Card;
