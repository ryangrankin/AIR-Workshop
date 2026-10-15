"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toggleTask } from "@/app/tasks/actions";
import type { Skill } from "@/app/lib/skills";

interface TaskItemProps {
  id: string;
  text: string;
  skill: Skill;
  done: boolean;
  dueDate: string | null;
}

export default function TaskItem({
  id,
  text,
  skill,
  done,
  dueDate,
}: TaskItemProps) {
  const [checked, setChecked] = useState(done);
  const [, startTransition] = useTransition();
  const router = useRouter();

  const overdue =
    !checked && !!dueDate && dueDate < new Date().toISOString().slice(0, 10);

  function handleChange() {
    const next = !checked;
    setChecked(next);
    startTransition(async () => {
      await toggleTask(id, next);
      router.refresh();
    });
  }

  return (
    <li className={overdue ? "task-item task-item-overdue" : "task-item"}>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={checked ? "task-text task-text-done" : "task-text"}>
          {text}
        </span>
        {dueDate && <span className="task-due">Due {dueDate}</span>}
      </label>
      <span className="skill-tag">{skill}</span>
    </li>
  );
}
