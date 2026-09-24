# CLAUDE.md

## Stack
- Next.js with the App Router, TypeScript, plain CSS files. No Tailwind, no CSS-in-JS.
- Supabase for sign-in and the database.
- Hosted on Vercel at https://airworkshop.vercel.app.

## Commands
- npm install — install dependencies
- npm run dev — local dev server at http://localhost:3000
- npm run build — production build; must pass before any pull request
- npm run lint — lint check
- If package.json scripts differ from this list, package.json is right; say so and update this list.

## Never
- Add a dependency without asking first.
- Edit .env, .env.local, or any environment variable, locally or in Vercel.
- Change auth configuration without saying what is changing and why.
- Create new top-level folders.
- Put passwords, API keys, or connection strings in code, commits, or chat.
- Use real personal data. Fake names and fake content only.
- Create a database table without row level security enabled.
- Merge a pull request unless the prompt explicitly says to.
- Work on anything outside the slice marked ACTIVE in roadmap.md.

## Conventions
- One slice per branch and per pull request.
- Before committing, show what changed and explain it in plain language, file by file, then stop and wait.
- Say which of the ACTIVE slice's done-criteria the change should now pass.
- Put new files inside existing folders. If none fits, ask.
- Avoid the TypeScript any type.
- When something ships, breaks, or is ruled out, say what to change in project-state.md.

## Current focus
See roadmap.md. Work only on the slice marked ACTIVE.
