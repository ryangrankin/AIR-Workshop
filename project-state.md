# Project state
Last updated: 2026-09-23

## Works
- The Next.js site (App Router, TypeScript, plain CSS) is live at https://airworkshop.vercel.app, deployed on Vercel.
- A Supabase project exists and is linked to the repo.

## Broken or flaky
- Nothing known to be broken.
- The site does not use Supabase yet: no sign-in, no tables, no saved data. Expected; Slice 1 starts this.

## Environment notes
- Stack: Next.js (App Router), TypeScript, plain CSS, Supabase, Vercel.
- Repo: ryangrankin/AIR-Workshop. Project docs live at the top level: roadmap.md, project-state.md, CLAUDE.md.
- Claude Code runs at claude.ai/code with the repo already selected.
- Assumed, not confirmed: Vercel deploys automatically when main changes.
- Unconfirmed: whether the Supabase project URL and public key are already set as environment variables in Vercel and in .env.local.
- Unconfirmed: whether Supabase email confirmation is on, and how many emails per hour the built-in sender allows.

## Next session
- Start Slice 1: sign up and log in.
- Expect Claude Code to ask to add the Supabase client packages; that is the one new dependency Slice 1 needs.
- Answer the two unconfirmed items in Environment notes before building sign-up.
