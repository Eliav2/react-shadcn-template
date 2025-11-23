import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

const featureHighlights = [
  {
    title: "Type-safe routing",
    description: "TanStack Router keeps navigation declarative and fully typed.",
  },
  {
    title: "Shadcn UI ready",
    description: "Composable primitives wired to Tailwind tokens out of the box.",
  },
  {
    title: "Developer tooling",
    description: "Vite, ESLint, and pnpm provide fast feedback while you build.",
  },
  {
    title: "Design tokens",
    description: "Theme-friendly colors headline your dark/light mode story.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-8">
      <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">Interactive demo</p>
            <h1 className="text-2xl font-semibold leading-tight">Counter playground</h1>
            <p className="text-sm text-muted-foreground">
              Use this simple state demo to verify hot reloads and component styles.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold tabular-nums">{count}</span>
            <Button variant="default" onClick={() => setCount((value) => value + 1)}>
              Increment
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">What&apos;s inside</h2>
          <p className="text-sm text-muted-foreground">
            A quick overview of the building blocks already configured for you.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featureHighlights.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border bg-background p-4 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Next steps</h2>
        <ul className="list-disc space-y-2 text-sm text-muted-foreground pl-5">
          <li>Start editing components in `src/components` to match your brand.</li>
          <li>Wire up API calls or mock data and surface them here on the home page.</li>
          <li>
            Visit the{" "}
            <Link to="/about" className="underline">
              About page
            </Link>{" "}
            to understand how content is structured.
          </li>
        </ul>
      </section>
    </div>
  );
}
