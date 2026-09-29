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
}

export default function TaskItem({ id, text, skill, done }: TaskItemProps) {
  const [checked, setChecked] = useState(done);
  const [, startTransition] = useTransition();
  const router = useRouter();

  function handleChange() {
    const next = !checked;
    setChecked(next);
    startTransition(async () => {
      await toggleTask(id, next);
      router.refresh();
    });
  }

  return (
    <li className="task-item">
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={checked ? "task-text task-text-done" : "task-text"}>
          {text}
        </span>
      </label>
      <span className="skill-tag">{skill}</span>
    </li>
  );
}
