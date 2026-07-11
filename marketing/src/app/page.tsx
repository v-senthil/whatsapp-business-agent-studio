import { LandingPage } from "@/components/marketing/LandingPage";

// The GitHub Pages build never has a signed-in visitor. CTAs from the landing
// link out to the live app (configured via NEXT_PUBLIC_APP_URL) rather than
// same-origin routes that do not exist here.
export default function Page() {
  return <LandingPage authed={false} />;
}
