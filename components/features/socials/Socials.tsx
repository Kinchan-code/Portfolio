import Abbr from "@/components/shared/tooltip/Tooltip";
import { socialMedia } from "@/lib/data/SocialMedia";
import React from "react";

function Socials() {
  return (
    <section className="flex flex-row gap-4">
      {socialMedia.map((social, index) => (
        <div
          key={index}
          onClick={() => {
            if (social.link.startsWith("mailto:")) {
              window.location.href = social.link;
            } else {
              window.open(social.link, "_blank");
            }
          }}
        >
          <Abbr title={social.name}>{social.icon}</Abbr>
        </div>
      ))}
    </section>
  );
}

export default Socials;
