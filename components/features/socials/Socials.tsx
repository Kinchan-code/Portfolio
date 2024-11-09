import Toggle from "@/components/shared/dark-mode-toggle/Toggle";
import Abbr from "@/components/shared/tooltip/Tooltip";
import { Button } from "@/components/ui/button";
import { socialMedia } from "@/lib/data/SocialMedia";
import { Dot } from "lucide-react";
import React from "react";

function Socials() {
  return (
    <section className="flex flex-row gap-4 items-center">
      {socialMedia.map((social, index) => (
        <Abbr title={social.name} key={index}>
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
      <Toggle />
    </section>
  );
}

export default Socials;
