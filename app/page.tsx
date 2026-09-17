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
          <h2>This semester</h2>
          <ul>
            <li>SLS 480E</li>
            <li>my AIR project</li>
            <li>bartending</li>
          </ul>
        </section>

        <section className="section">
          <h2>About</h2>
          <p>
            Ryan is a senior at UH Manoa studying computer science, with a
            focus on building practical, well-crafted software. She enjoys
            working across the stack, from designing clean user interfaces to
            reasoning about the systems that power them. Outside of
            coursework, she likes exploring new tools and frameworks that make
            developers more productive.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          Ryan Rankin &middot; {year} &middot; Built with Claude Code
        </p>
      </footer>
    </>
  );
}
