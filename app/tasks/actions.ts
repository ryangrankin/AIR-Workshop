"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import { isSkill } from "@/app/lib/skills";

export async function addTask(formData: FormData) {
  const text = formData.get("text");
  const skill = formData.get("skill");
  const listId = formData.get("list_id");

  if (typeof text !== "string" || text.trim() === "") return;
  if (typeof skill !== "string" || !isSkill(skill)) return;
  if (typeof listId !== "string" || listId.trim() === "") return;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("tasks").insert({
    user_id: user.id,
    text: text.trim(),
    skill,
    list_id: listId,
  });

  revalidatePath("/tasks");
}

export async function createList(formData: FormData) {
  const name = formData.get("name");

  if (typeof name !== "string" || name.trim() === "") return;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const { data: list } = await supabase
    .from("lists")
    .insert({ user_id: user.id, name: name.trim() })
    .select("id")
    .single();

  revalidatePath("/tasks");

  if (list) {
    redirect(`/tasks?list=${list.id}`);
  }
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
