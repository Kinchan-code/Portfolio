function About() {
  return (
    <main className='container flex flex-col gap-4'>
      <label
        htmlFor='about'
        className='text-lg font-bold font-body uppercase lg:pl-[1.5rem]'
      >
        About
      </label>
      <p
        id='about'
        className='text-md font-body text-wrap text-justify lg:p-4 p-2 lg:px-6'
      >
        I am a Full Stack Developer who builds end-to-end web applications with
        user-friendly, accessible, and responsive interfaces using React and
        Next.js, while also developing robust backend systems. Focused on
        creating exceptional digital experiences from database to user
        interface. I continuously seek opportunities to learn and contribute to
        innovative web projects.
      </p>
    </main>
  );
}

export default About;
