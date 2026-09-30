import { createFileRoute } from "@tanstack/react-router";
import { FeaturedProjects } from "@/components/FeaturedProjects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Избранные проекты — Портфолио вайбкодера" },
      {
        name: "description",
        content:
          "Избранные проекты специалиста по вайбкодингу: StudyFlow, НейроАналитик, LaunchPro.",
      },
      { property: "og:title", content: "Избранные проекты — Портфолио вайбкодера" },
      {
        property: "og:description",
        content:
          "Избранные проекты специалиста по вайбкодингу: StudyFlow, НейроАналитик, LaunchPro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-portfolio-bg">
      <FeaturedProjects />
    </main>
  );
}
