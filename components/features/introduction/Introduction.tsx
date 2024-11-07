import { Button } from "@/components/ui/button";

function Introduction() {
  return (
    <article className="flex flex-col gap-2">
      <h1 className="text-5xl font-bold font-body">Christian Bangay</h1>
      <h3 className="text-2xl font-semibold font-body">
        Junior Front-End Engineer.
      </h3>
      <p className="text-md font-body text-wrap w-2/3 text-justify text-muted-foreground">
        I build user-friendly, accessible, and responsive web interfaces using
        and React and Next.
      </p>
      <Button
        aria-label="Open resume in a new tab"
        variant="link"
        onClick={() => {
          window.open("/bangay-resume.pdf", "_blank");
        }}
        className="w-32"
      >
        <p className="font-list font-semibold">Check my Resume</p>
      </Button>
    </article>
  );
}

export default Introduction;
