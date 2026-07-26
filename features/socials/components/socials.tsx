"use client";

import { Dot } from "lucide-react";

import { Abbr, DarkModeToggle } from "@/components/shared";
import { Button } from "@/components/ui";
import { socialMedia } from "@/features/socials/data/social-media";

export function Socials() {
  return (
    <section className="flex flex-row gap-4 items-center">
      {socialMedia.map((social) => (
        <Abbr title={social.name} key={social.name}>
          <Button
            variant="outline"
            size="icon"
            suppressHydrationWarning
            onClick={() => {
              if (social.link.startsWith("mailto:")) {
                window.location.href = social.link;
              } else {
                window.open(social.link, "_blank");
              }
            }}
          >
            {social.icon}
          </Button>
        </Abbr>
      ))}
      <Dot />
      <DarkModeToggle />
    </section>
  );
}
