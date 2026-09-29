"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/app/lib/supabase/server";
import { isSkill } from "@/app/lib/skills";

export async function addTask(formData: FormData) {
  const text = formData.get("text");
  const skill = formData.get("skill");

  if (typeof text !== "string" || text.trim() === "") return;
  if (typeof skill !== "string" || !isSkill(skill)) return;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("tasks").insert({
    user_id: user.id,
    text: text.trim(),
    skill,
  });

  revalidatePath("/tasks");
}

export async function toggleTask(id: string, done: boolean) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("tasks").update({ done }).eq("id", id);

  revalidatePath("/tasks");
}
