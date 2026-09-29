import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import SignOutButton from "@/app/tasks/SignOutButton";

export default async function TasksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="auth">
      <p className="account-email">{user.email}</p>
      <SignOutButton />
    </main>
  );
}
