export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <h1>Ryan Rankin</h1>
        <p>a senior at UH Manoa studying computer science.</p>
      </header>

      <main>
        <section className="section">
          <h2>About</h2>
          <p>
            Ryan is a senior at UH Manoa studying computer science, with a
            focus on building practical, well-crafted software. He enjoys
            working across the stack, from designing clean user interfaces to
            reasoning about the systems that power them. Outside of
            coursework, he likes exploring new tools and frameworks that make
            developers more productive.
          </p>
        </section>

        <section className="section">
          <h2>This semester</h2>
          {/*
            Placeholder items — Ryan Rankin should replace these three
            entries with his real, current coursework, project, and
            post-graduation plans.
          */}
          <ul>
            <li>Taking Operating Systems and Software Engineering coursework</li>
            <li>Building a capstone project with a small team</li>
            <li>Preparing for technical interviews and grad school applications</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          Ryan Rankin &middot; {year}
        </p>
      </footer>
    </>
  );
}
