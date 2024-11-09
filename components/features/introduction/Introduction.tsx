import SocialsPage from "@/app/(header)/_socials/page";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

function Introduction() {
  return (
    <article className="flex flex-col gap-2">
      <section className="py-12 lg:py-24 lg:p-6">
        <div className="grid gap-8 xl:grid-cols-2 w-full">
          <div className="flex flex-col justify-center text-justify space-y-4">
            <div className="">
              {/* <ImageIcon src={Me.src} alt="Christian Bangay" size="size-20" /> */}
              <h1 className="text-xl font-bold tracking-tighter sm:text-2xl lg:text-3xl xl:text-5xl/none">
                Christian Bangay
              </h1>
            </div>
            <h2 className="text-lg font-medium text-muted-foreground sm:text-xl">
              Junior Frontend Engineer
            </h2>
            <p className="max-w-[600px] text-muted-foreground">
              I build user-friendly, accessible, and responsive web interfaces
              using React and Next.js, focused on creating exceptional digital
              experiences.
            </p>
            <Button
              aria-label="Open resume in a new tab"
              variant="link"
              onClick={() => {
                window.open("/bangay-resume.pdf", "_blank");
              }}
              className="w-32 flex items-center gap-2"
            >
              <p className="font-list font-semibold">Check my Resume</p>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <SocialsPage />
          </div>
          <div className="hidden xl:flex items-center justify-center">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Terminal className="h-64 w-64 text-primary" />
            </motion.div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Introduction;
