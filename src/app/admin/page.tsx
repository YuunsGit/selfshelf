import { redirect } from "next/navigation";
import { authorize } from "@/lib/auth";

export default async function AdminPanel() {
  const user = await authorize();
  if (!user?.role || user.role.toLowerCase() !== "admin") redirect("/");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold">Admin Panel</h1>
      </div>
    </main>
  );
}
