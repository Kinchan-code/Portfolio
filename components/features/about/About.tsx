function About() {
  return (
    <main className="container flex flex-col gap-4">
      <label
        htmlFor="about"
        className="text-lg font-bold font-body uppercase lg:pl-[1.5rem]"
      >
        About
      </label>
      <p
        id="about"
        className="text-md font-body text-wrap text-justify lg:p-4 p-2 lg:px-6"
      >
        I am a Frontend Engineer, I build user-friendly, accessible, and
        responsive web interfaces using React and Next.js, focused on creating
        exceptional digital experiences. Recently graduated with a Computer
        Science degree from Pamantasan ng Lungsod ng Maynila and continuously
        seeking oppurtunities to learn and contribute to innovative web
        projects.
      </p>
    </main>
  );
}

export default About;
