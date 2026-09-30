import { Bot, Palette, Puzzle, Rocket } from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "MVP за неделю",
    description:
      "Быстро собираю и запускаю MVP, чтобы вы проверили гипотезу и получили первых пользователей.",
    badge: "Скорость × Качество",
    badgeGradient: "from-portfolio-pink via-portfolio-violet to-portfolio-amber",
    accent: "var(--portfolio-pink)",
  },
  {
    icon: Bot,
    title: "AI-автоматизация",
    description: "Автоматизирую рутину и бизнес-процессы с помощью AI-агентов и интеграций.",
    badge: "Экономия времени",
    badgeGradient: "from-portfolio-blue to-portfolio-violet",
    accent: "var(--portfolio-violet)",
  },
  {
    icon: Palette,
    title: "UI/UX с вайбкодингом",
    description: "Создаю современные интерфейсы, которые не только красивы, но и конвертируют.",
    badge: "Дизайн × Конверсия",
    badgeGradient: "from-portfolio-violet to-portfolio-amber",
    accent: "var(--portfolio-pink)",
  },
  {
    icon: Puzzle,
    title: "Интеграции",
    description: "Подключаю платёжные системы, CRM, API и любые внешние сервисы.",
    badge: "Гибкость × Масштабируемость",
    badgeGradient: "from-portfolio-pink to-portfolio-amber",
    accent: "var(--portfolio-amber)",
  },
];

export function WhatIDo() {
  return (
    <section className="portfolio-glow">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-portfolio-heading sm:text-3xl">
          <span className="h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-portfolio-violet to-portfolio-pink" />
          Что я делаю
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description, badge, badgeGradient }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-portfolio-border bg-portfolio-card p-5"
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`h-10 w-10 shrink-0 bg-gradient-to-br from-portfolio-violet via-portfolio-pink to-portfolio-amber bg-clip-text text-transparent`}
                  strokeWidth={1.8}
                />
                <h3 className="text-lg font-bold text-portfolio-heading">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-portfolio-muted">
                {description}
              </p>
              <div className="mt-auto pt-5">
                <span
                  className={`inline-flex rounded-full border border-portfolio-border bg-portfolio-tag px-3.5 py-1.5 text-sm font-semibold bg-gradient-to-r ${badgeGradient} bg-clip-text text-transparent`}
                >
                  {badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
