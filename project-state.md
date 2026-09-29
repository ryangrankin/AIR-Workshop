# Project state
Last updated: 2026-09-29

## Works
- The Next.js site (App Router, TypeScript, plain CSS) is live at https://airworkshop.vercel.app, deployed on Vercel.
- A Supabase project exists and is linked to the repo.
- A person can open the live site, click Sign up, and create an account with an email and a password; because email confirmation is off, they land straight on /tasks with their email shown at the top. They can click Sign out, and typing /tasks into the address bar after that shows the login page instead of the tasks page. Typing the right email with a wrong password shows an error message and keeps them on the login page. Once logged in, they can close the tab, open the site again in a new tab, and they are still signed in.
- Signed in, a person can type a study task, pick one of six skills (Reading, Writing, Listening, Speaking, Vocabulary, Grammar) from a menu, and click Add to see it appear in their list labelled with that skill. They can tick a task's checkbox, reload the page, and it stays ticked. Signing in on a different browser shows the same tasks with the same ticks, and a second, separate account sees an empty list with none of the first account's tasks.

## Broken or flaky
- Nothing known to be broken.
- Slices 2 and 3 (tasks, progress) are not started: /tasks currently only shows the signed-in email and a sign-out button. Expected; that is all Slice 1 needs.

## Environment notes
- Stack: Next.js (App Router), TypeScript, plain CSS, Supabase, Vercel.
- Repo: ryangrankin/AIR-Workshop. Project docs live at the top level: roadmap.md, project-state.md, CLAUDE.md.
- Claude Code runs at claude.ai/code with the repo already selected.
- Assumed, not confirmed: Vercel deploys automatically when main changes.
- Confirmed: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are already set in Vercel; Slice 1's code reads them under those exact names and does not set or edit them.
- Confirmed: Supabase email confirmation is off, so sign-up signs a new account straight in without a confirmation email step.

## Next session
- Review the Slice 1 pull request against its done-criteria on the preview link, then merge it if it passes.
- Start Slice 2: tasks tagged with a skill, saved per account.
