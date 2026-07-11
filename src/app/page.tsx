import { getSession } from "@/lib/session";
import { LandingPage } from "@/components/marketing/LandingPage";

export default async function Root() {
  const session = await getSession();
  return <LandingPage authed={!!session.token} />;
}
