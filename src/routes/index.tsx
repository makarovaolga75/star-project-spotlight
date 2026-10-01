import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { WhatIDo } from "@/components/WhatIDo";
import { HowIWork } from "@/components/HowIWork";
import { CtaSection } from "@/components/CtaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Алекс Нейро — создаю AI-продукты через вайбкодинг" },
      {
        name: "description",
        content:
          "Портфолио специалиста по вайбкодингу: быстро собираю MVP, лендинги и веб-приложения с помощью современных AI-инструментов.",
      },
      {
        property: "og:title",
        content: "Алекс Нейро — создаю AI-продукты через вайбкодинг",
      },
      {
        property: "og:description",
        content:
          "Портфолио специалиста по вайбкодингу: быстро собираю MVP, лендинги и веб-приложения с помощью современных AI-инструментов.",
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
      <Hero />
      <WhatIDo />
      <HowIWork />
      <FeaturedProjects />
    </main>
  );
}
