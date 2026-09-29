# Roadmap

## What this is
A study task list for people learning a language. Each task is tagged with the skill it trains, and the site shows how much of the list is done and which skill you have been avoiding.

## What Done means
A stranger opens https://airworkshop.vercel.app, creates an account with an email and password, adds study tasks that are each tagged with one of six skills (Reading, Writing, Listening, Speaking, Vocabulary, Grammar), and checks tasks off as they finish them. The page shows what percentage of their tasks are done and names the skill with the fewest completed tasks. When they sign out and sign back in, from any browser, their tasks and check marks are exactly as they left them, and no other account can see them. Nothing beyond that is part of Done.

## Slices
1. Sign up and log in | done-criteria: (1) On the live site, a visitor clicks Sign up, enters a new email and a password, clicks the link in the confirmation email, and lands on /tasks with their email address shown at the top. (2) They click Sign out, then type /tasks into the address bar, and see the login page instead. (3) They enter the right email with a wrong password, see an error message, and stay on the login page. (4) They log in correctly, close the tab, open the site in a new tab, and are still signed in. | status: DONE
2. Tasks tagged with a skill, saved per account | done-criteria: (1) Signed in, a person types "Shadow a 5-minute podcast", picks Listening from the skill menu, clicks Add, and sees the task in the list labelled Listening. (2) They tick the task's checkbox, reload the page, and it is still ticked. (3) They sign out, sign in on a different browser, and see the same tasks with the same ticks. (4) A second test account signs in and sees an empty list, with none of the first account's tasks. | status: ACTIVE
3. Progress and the avoided skill | done-criteria: (1) An account with 4 tasks, 1 of them ticked, sees "25% done" at the top of /tasks. (2) Ticking a second task changes it to 50% without reloading the page. (3) With ticked tasks only in Reading and Writing, the page lists all six skills with their done counts and shows "Most avoided: Listening" (rule: fewest completed tasks, zero counts, ties go to the skill listed first in the order Reading, Writing, Listening, Speaking, Vocabulary, Grammar). (4) A brand-new account with no tasks sees 0% and no error. | status: pending

## Backlog
- Edit a task's text
- Delete tasks
- Due dates
- "Most avoided" measured over a time window, such as the last 7 days
- Completion percentage per skill
- Custom skills beyond the six
- More than one language per account
- Streaks, charts, history
- Password reset
- Google or other social sign-in
- Reminders or notifications
- Reordering tasks
- Sharing a list with someone else
- Dark mode
