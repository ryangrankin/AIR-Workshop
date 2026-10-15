import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import SignOutButton from "@/app/tasks/SignOutButton";
import TaskItem from "@/app/tasks/TaskItem";
import { addTask, createList } from "@/app/tasks/actions";
import { SKILLS, type Skill } from "@/app/lib/skills";

interface Task {
  id: string;
  text: string;
  skill: Skill;
  done: boolean;
  created_at: string;
}

interface List {
  id: string;
  name: string;
}

interface TasksPageProps {
  searchParams: Promise<{ list?: string }>;
}

export default async function TasksPage({ searchParams }: TasksPageProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { list: listParam } = await searchParams;

  const { data: lists } = await supabase
    .from("lists")
    .select("id, name")
    .order("created_at", { ascending: true })
    .returns<List[]>();

  const allLists = lists ?? [];
  const currentListId = listParam ?? allLists[0]?.id;

  const { data: tasks } = currentListId
    ? await supabase
        .from("tasks")
        .select("id, text, skill, done, created_at")
        .eq("list_id", currentListId)
        .order("created_at", { ascending: true })
        .returns<Task[]>()
    : { data: [] };

  return (
    <main className="tasks-page">
      <p className="account-email">{user.email}</p>
      <SignOutButton />

      <nav className="list-menu">
        {allLists.map((list) => (
          <Link
            key={list.id}
            href={`/tasks?list=${list.id}`}
            className={
              list.id === currentListId ? "list-link list-link-active" : "list-link"
            }
          >
            {list.name}
          </Link>
        ))}

        <details className="new-list">
          <summary>New list</summary>
          <form action={createList}>
            <input type="text" name="name" placeholder="List name" required />
            <button type="submit">Save</button>
          </form>
        </details>
      </nav>

      {currentListId ? (
        <>
          <form className="add-task-form" action={addTask}>
            <input
              type="text"
              name="text"
              placeholder="What are you studying?"
              required
            />
            <select name="skill" defaultValue={SKILLS[0]} required>
              {SKILLS.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <select name="list_id" defaultValue={currentListId} required>
              {allLists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.name}
                </option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>

          <ul className="task-list">
            {(tasks ?? []).map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                text={task.text}
                skill={task.skill}
                done={task.done}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>Create a list above to start adding tasks.</p>
      )}
    </main>
  );
}
