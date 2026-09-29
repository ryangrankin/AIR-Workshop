import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import SignOutButton from "@/app/tasks/SignOutButton";
import TaskItem from "@/app/tasks/TaskItem";
import { addTask } from "@/app/tasks/actions";
import { SKILLS, type Skill } from "@/app/lib/skills";

interface Task {
  id: string;
  text: string;
  skill: Skill;
  done: boolean;
  created_at: string;
}

export default async function TasksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: tasks } = await supabase
    .from("tasks")
    .select("id, text, skill, done, created_at")
    .order("created_at", { ascending: true })
    .returns<Task[]>();

  return (
    <main className="tasks-page">
      <p className="account-email">{user.email}</p>
      <SignOutButton />

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
    </main>
  );
}
