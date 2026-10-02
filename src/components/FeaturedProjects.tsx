import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "StudyFlow",
    description:
      "AI-платформа для персонализированного обучения с аналитикой и трекингом прогресса.",
    tags: ["Next.js", "Tailwind", "Supabase", "OpenAI"],
    accent: "blue",
    preview: <StudyFlowPreview />,
  },
  {
    name: "НейроАналитик",
    description:
      "AI-сервис для анализа данных и генерации инсайтов на естественном языке.",
    tags: ["Python", "FastAPI", "PostgreSQL", "OpenAI"],
    accent: "violet",
    preview: <NeuroAnalystPreview />,
  },
  {
    name: "LaunchPro",
    description:
      "Лендинг для продукта с фокусом на конверсию и современный дизайн.",
    tags: ["Next.js", "Framer Motion", "GSAP", "Vercel"],
    accent: "amber",
    preview: <LaunchProPreview />,
  },
];

function StudyFlowPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-portfolio-deep">
      <div
        className="pointer-events-none absolute -left-8 -top-8 h-32 w-40 rounded-full opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--portfolio-violet) 60%, transparent), transparent)",
        }}
      />
      {/* mini top bar */}
      <div className="relative flex items-center gap-2 px-3 pt-2.5">
        <span className="rounded-md border border-portfolio-violet/50 bg-portfolio-violet/15 px-1.5 py-0.5 text-[7px] font-semibold text-white">
          SaaS
        </span>
        <span className="text-[8px] font-bold text-white">StudyFlow</span>
        <span className="ml-auto flex gap-2 text-[6px] text-portfolio-inverse-soft">
          <span>Главная</span>
          <span>Возможности</span>
          <span>Цены</span>
          <span>О нас</span>
        </span>
        <span className="rounded-md bg-gradient-to-r from-portfolio-violet to-portfolio-pink px-1.5 py-0.5 text-[6px] font-semibold text-white">
          Войти
        </span>
      </div>
      <div className="relative flex items-start gap-3 px-3 pt-2.5">
        <div className="flex-1">
          <p className="text-[11px] font-bold leading-tight text-white">
            Умное обучение
            <br />
            для каждого
          </p>
          <p className="mt-1 text-[6px] leading-snug text-portfolio-inverse-soft">
            Персонализированные курсы с AI-адаптацией
            <br />
            под ваш прогресс
          </p>
          <span className="mt-2 inline-block rounded-md bg-gradient-to-r from-portfolio-violet to-portfolio-pink px-2 py-1 text-[6px] font-semibold text-white">
            Начать обучение
          </span>
          <p className="mt-1.5 text-[6px] font-medium text-portfolio-inverse-soft">
            Подробнее →
          </p>
        </div>
        {/* progress card */}
        <div className="w-[46%] shrink-0 rounded-lg border border-white/10 bg-portfolio-card-2 p-2">
          <div className="flex items-center gap-1">
            <span className="text-[6px] font-semibold text-white">
              Ваш прогресс
            </span>
            <span className="ml-auto h-1 w-1 rounded-full bg-portfolio-violet/60" />
          </div>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="grid h-3.5 w-3.5 place-items-center rounded-md bg-portfolio-violet/15 text-[6px]">
              ▤
            </span>
            <span className="text-[5px] text-portfolio-inverse-soft">Успеваемость</span>
          </div>
          <p className="mt-0.5 text-[13px] font-bold text-white">76%</p>
          <svg viewBox="0 0 100 28" className="mt-0.5 h-6 w-full">
            <defs>
              <linearGradient id="studyflow-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--portfolio-violet)" />
                <stop offset="100%" stopColor="var(--portfolio-pink)" />
              </linearGradient>
            </defs>
            <path
              d="M2 24 C 20 22, 30 18, 42 16 S 70 10, 84 8 L 98 4"
              fill="none"
              stroke="url(#studyflow-line)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="mt-1 flex justify-between">
            {[
              ["128", "Уроков"],
              ["24.5", "Часов"],
              ["28", "Сертифик."],
            ].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="text-[7px] font-bold text-white">{v}</p>
                <p className="text-[4.5px] text-portfolio-inverse-soft">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NeuroAnalystPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-portfolio-deep">
      {/* particle wave */}
      <div
        className="pointer-events-none absolute -right-6 top-2 h-36 w-56 rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--portfolio-violet) 55%, transparent), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-8 right-10 h-28 w-52 rounded-full opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--portfolio-pink) 55%, transparent), transparent)",
        }}
      />
      <svg viewBox="0 0 200 90" className="pointer-events-none absolute inset-0 h-full w-full">
        {[
          { y: 30, o: 0.5 },
          { y: 42, o: 0.75 },
          { y: 54, o: 0.45 },
        ].map(({ y, o }, i) => (
          <path
            key={i}
            d={`M-5 ${y + 18} C 40 ${y - 6}, 90 ${y + 26}, 130 ${y} S 185 ${y - 10}, 210 ${y + 6}`}
            fill="none"
            stroke="var(--portfolio-violet)"
            strokeOpacity={o}
            strokeWidth="3"
            strokeLinecap="round"
            style={{ filter: "blur(1.2px)" }}
          />
        ))}
      </svg>
      {/* mini top bar */}
      <div className="relative flex items-center gap-2 px-3 pt-2.5">
        <span className="rounded-md border border-portfolio-violet/50 bg-portfolio-violet/15 px-1.5 py-0.5 text-[7px] font-semibold text-white">
          AI-Приложение
        </span>
        <span className="ml-auto flex gap-2 text-[6px] text-portfolio-inverse-soft">
          <span>Обзор</span>
          <span>Дашборд</span>
          <span>Данные</span>
          <span>Инсайты</span>
          <span>Настройки</span>
        </span>
      </div>
      <div className="relative px-3 pt-2.5">
        <p className="text-[11px] font-bold leading-tight text-white">
          Аналитика данных
          <br />
          на автопилоте
        </p>
        <p className="mt-1 text-[6px] leading-snug text-portfolio-inverse-soft">
          Превращаем сырые данные
          <br />в понятные инсайты
        </p>
        <span className="mt-2 inline-block rounded-md bg-gradient-to-r from-portfolio-violet to-portfolio-pink px-2 py-1 text-[6px] font-semibold text-white">
          Открыть дашборд
        </span>
      </div>
    </div>
  );
}

function LaunchProPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-portfolio-deep-2">
      <div
        className="pointer-events-none absolute -left-10 -top-10 h-32 w-40 rounded-full opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--portfolio-amber) 60%, transparent), transparent)",
        }}
      />
      {/* mini top bar */}
      <div className="relative flex items-center gap-1.5 px-3 pt-2.5">
        <span className="rounded-md border border-portfolio-amber/60 bg-portfolio-amber/15 px-1.5 py-0.5 text-[7px] font-semibold text-white">
          Лендинг
        </span>
        <span className="text-[7px] font-bold text-white">LaunchPro</span>
        <span className="ml-auto flex gap-2 text-[6px] text-portfolio-inverse-soft">
          <span>Возможности</span>
          <span>Преимущества</span>
          <span>Тарифы</span>
        </span>
        <span className="rounded-md bg-gradient-to-r from-portfolio-violet to-portfolio-pink px-1.5 py-0.5 text-[6px] font-semibold text-white">
          Начать бесплатно
        </span>
      </div>
      <div className="relative flex items-start gap-3 px-3 pt-2.5">
        <div className="flex-1">
          <p className="text-[11px] font-bold leading-tight text-white">
            Запусти свой
            <br />
            продукт быстрее
          </p>
          <p className="mt-1 text-[6px] leading-snug text-portfolio-inverse-soft">
            Современный лендинг с высоким
            <br />
            уровнем конверсии и продуманной структурой.
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="inline-block rounded-md bg-gradient-to-r from-portfolio-violet to-portfolio-pink px-2 py-1 text-[6px] font-semibold text-white">
              Запустить сейчас
            </span>
            <span className="text-[6px] font-medium text-portfolio-inverse-soft">
              Смотреть демо →
            </span>
          </div>
        </div>
        {/* dashboard mock */}
        <div className="w-[46%] shrink-0 rounded-lg border border-white/10 bg-portfolio-card-2 p-1.5">
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="text-[5px] text-portfolio-inverse-soft">Дашборд</span>
          </div>
          <p className="mt-1 text-[6px] font-semibold text-white">
            Добро пожаловать!
          </p>
          <div className="mt-1 flex justify-between rounded-md bg-white/5 px-1 py-0.5">
            {[
              ["12.5K", "1280"],
              ["320", "1030"],
              ["+4.21%", "Реестры"],
            ].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="text-[6px] font-bold text-white">{v}</p>
                <p className="text-[4.5px] text-portfolio-inverse-soft">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-2 gap-1">
            <div className="h-6 rounded-md bg-gradient-to-br from-portfolio-violet/70 to-portfolio-pink/50" />
            <div className="h-6 rounded-md bg-gradient-to-br from-portfolio-violet/60 to-portfolio-amber/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="portfolio-glow px-4 py-10 sm:px-6 md:px-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="flex min-w-0 items-center gap-2.5 text-xl font-bold text-portfolio-heading sm:text-2xl md:text-[28px]">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-portfolio-violet to-portfolio-pink" />
            Избранные проекты
          </h2>
          <a
            href="#"
            className="group flex shrink-0 items-center gap-1.5 text-sm text-portfolio-muted transition-colors hover:text-portfolio-heading"
          >
            Смотреть все проекты
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* cards */}
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className={`project-card project-card-${p.accent} flex flex-col rounded-3xl p-3`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                {p.preview}
              </div>
              <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
                <h3 className="text-xl font-bold text-portfolio-heading">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-portfolio-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-portfolio-border bg-portfolio-tag px-3 py-1.5 text-xs text-portfolio-tag-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
