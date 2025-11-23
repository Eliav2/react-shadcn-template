import { createFileRoute } from "@tanstack/react-router";

const pillars = [
  {
    title: "Opinionated defaults",
    description: "A curated stack (React, Vite, Tailwind, shadcn/ui) so you can ship UI immediately.",
  },
  {
    title: "Composable layout system",
    description: "Ready-to-use sidebar and page scaffolding that adapts to mobile out of the box.",
  },
  {
    title: "Productivity tooling",
    description: "ESLint, TypeScript, and pnpm are already configured for strict, fast feedback loops.",
  },
];

const checklist = [
  "Customize tokens in `tailwind.config` and `src/index.css`.",
  "Drop new routes into `src/routes` and TanStack Router wires them up automatically.",
  "Use shadcn/ui primitives (cards, sheets, inputs) for consistent styling.",
];

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-8">
      <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">About this starter</p>
        <h1 className="text-2xl font-semibold leading-tight">Why this template exists</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This kit demonstrates how to pair TanStack Router with shadcn/ui so you have a modern, accessible baseline the
          moment you scaffold a project.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Guiding pillars</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-lg border bg-background p-4 shadow-sm">
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Implementation checklist</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
