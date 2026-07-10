import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Root() {
  const session = await getSession();
  if (!session.token) redirect("/login");
  redirect("/home");
}
