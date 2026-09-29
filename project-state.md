# Project state
Last updated: 2026-09-29

## Works
- The Next.js site (App Router, TypeScript, plain CSS) is live at https://airworkshop.vercel.app, deployed on Vercel.
- A Supabase project exists and is linked to the repo.
- Slice 1 (sign up and log in) is built on branch claude/slice-1-signup-login and open as a pull request, titled "Slice 1: sign up and log in". Not merged yet — check its done-criteria on the PR's preview link before merging.

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
