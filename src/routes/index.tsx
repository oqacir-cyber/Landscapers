import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Awaiting" },
      { name: "description", content: "A minimal starter page, awaiting what comes next." },
      { property: "og:title", content: "Awaiting" },
      { property: "og:description", content: "A minimal starter page, awaiting what comes next." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <h1 className="text-4xl font-light tracking-[0.3em] text-foreground uppercase">Awaiting</h1>
    </main>
  );
}
