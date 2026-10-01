import { Code2, FlaskConical, Rocket, Zap } from "lucide-react";

const steps = [
  {
    icon: Zap,
    number: "1",
    title: "Погружаюсь в задачу",
    description: "Изучаю идею, аудиторию и цель. Задаю правильные вопросы.",
    accent: "var(--portfolio-blue)",
  },
  {
    icon: Code2,
    number: "2",
    title: "Создаю с ИИ",
    description: "Использую AI и лучшие инструменты для быстрой разработки.",
    accent: "var(--portfolio-pink)",
  },
  {
    icon: FlaskConical,
    number: "3",
    title: "Тестирую и улучшаю",
    description: "Проверяю, собираю фидбек и довожу продукт до идеала.",
    accent: "var(--portfolio-violet)",
  },
  {
    icon: Rocket,
    number: "4",
    title: "Запускаю и масштабирую",
    description: "Запускаю проект и помогаю масштабировать то, что работает.",
    accent: "var(--portfolio-amber)",
  },
];

const lineGradient =
  "linear-gradient(90deg, var(--portfolio-blue), var(--portfolio-violet), var(--portfolio-pink), var(--portfolio-amber))";

function StepIcon({ icon: Icon, accent }: { icon: typeof Zap; accent: string }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center">
      <Icon className="h-9 w-9" strokeWidth={2} style={{ color: accent }} />
    </span>
  );
}

function StepCard({ icon, title, description, accent }: (typeof steps)[number]) {
  return (
    <div className="flex min-w-0 flex-1 flex-col rounded-2xl border border-portfolio-border bg-portfolio-card p-5">
      <div className="flex items-center gap-3">
        <StepIcon icon={icon} accent={accent} />
        <h3 className="text-lg font-bold text-portfolio-heading">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-portfolio-muted">{description}</p>
    </div>
  );
}

export function HowIWork() {
  return (
    <section className="portfolio-glow">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-portfolio-heading sm:text-3xl">
          <span className="h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-portfolio-violet to-portfolio-pink" />
          Как я работаю
        </h2>

        {/* mobile: vertical timeline */}
        <div className="relative mt-10 lg:hidden">
          <div
            aria-hidden
            className="absolute bottom-6 left-6 top-0 w-1 rounded-full"
            style={{ background: lineGradient }}
          />
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <span
                  className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 bg-portfolio-deep-2 text-lg font-bold"
                  style={{ borderColor: step.accent, color: step.accent }}
                >
                  {step.number}
                </span>
                <StepCard {...step} />
              </div>
            ))}
          </div>
        </div>

        {/* desktop: horizontal timeline */}
        <div className="relative mt-12 hidden lg:block">
          <div
            aria-hidden
            className="absolute right-0 top-[27px] left-0 h-1 rounded-full"
            style={{ background: lineGradient }}
          />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="min-w-0">
                <div className="flex justify-center">
                  <span
                    className="relative z-10 grid h-14 w-14 place-items-center rounded-full border-2 bg-portfolio-deep-2 text-xl font-bold"
                    style={{ borderColor: step.accent, color: step.accent }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="mt-6">
                  <StepCard {...step} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
