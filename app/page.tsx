import { PlatformSelector } from "@/components/platform/platform-selector";

/** Platform selector homepage — must not redirect. Amazon demo lives at /dashboard via /amazon. */
export default function HomePage() {
  return <PlatformSelector />;
}
