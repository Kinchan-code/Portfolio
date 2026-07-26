export function About() {
  return (
    <main className="container flex flex-col gap-4">
      <label
        htmlFor="about"
        className="text-lg font-bold font-body uppercase lg:pl-6"
      >
        About
      </label>
      <p
        id="about"
        className="text-md font-body text-wrap text-justify lg:p-4 p-2 lg:px-6"
      >
        I am a Frontend Software Engineer who builds accessible, responsive web
        applications with React and Next.js. I also work across the stack when
        needed, APIs, databases, and deployment — to deliver solid end-to-end
        product experiences. I continuously seek opportunities to learn and
        contribute to innovative web projects.
      </p>
    </main>
  );
}
