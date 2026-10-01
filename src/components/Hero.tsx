import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock,
  Folder,
  Home,
  MessageSquare,
  Settings,
  Sparkles,
  Star,
  Users,
  Wallet,
} from "lucide-react";

const navLinks = ["Проекты", "Услуги", "Процесс", "Отзывы", "Обо мне"];

const stats = [
  { icon: Folder, value: "30+", label: "Проектов" },
  { icon: Users, value: "12+", label: "Довольных клиентов" },
  { icon: CheckCircle2, value: "95%", label: "Проектов сданы в срок" },
  { icon: Star, value: "4.9/5", label: "Средняя оценка" },
];

const sideNav = [
  { icon: Home, label: "Главная" },
  { icon: BarChart3, label: "Аналитика", active: true },
  { icon: Users, label: "Пользователи" },
  { icon: Wallet, label: "Финансы" },
  { icon: MessageSquare, label: "Сообщения" },
  { icon: Settings, label: "Настройки" },
];

const metrics = [
  { label: "Пользователи", value: "12,540", delta: "↑ 12.5%" },
  { label: "Выручка", value: "₽1,250,000", delta: "↑ 18.2%" },
  { label: "Конверсия", value: "4.21%", delta: "↑ 8.7%" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative h-9 w-9">
        <span className="absolute inset-0 rounded-[38%_62%_55%_45%/50%_45%_55%_50%] bg-gradient-to-br from-portfolio-pink via-portfolio-violet to-portfolio-amber shadow-[0_4px_16px_-4px_color-mix(in_oklab,var(--portfolio-pink)_70%,transparent)]" />
        <span className="absolute left-[38%] top-[26%] h-[38%] w-[38%] rounded-full bg-portfolio-amber/80 blur-[3px]" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-bold text-portfolio-heading">Ольга Вайб</p>
        <p className="text-xs text-portfolio-muted">Vibe Coding Specialist</p>
      </div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-portfolio-deep-2 shadow-[0_40px_120px_-40px_color-mix(in_oklab,var(--portfolio-amber)_45%,transparent)] lg:-rotate-1">
      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-[27%] shrink-0 border-r border-white/10 p-3 sm:block">
          <div className="flex items-center gap-1.5">
            <span className="h-3.5 w-3.5 rounded-md bg-gradient-to-br from-portfolio-pink to-portfolio-amber" />
            <span className="text-[9px] font-bold text-white">NeiroPanel</span>
          </div>
          <nav className="mt-4 space-y-1">
            {sideNav.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[8px] ${
                  active
                    ? "bg-portfolio-violet/20 text-white"
                    : "text-portfolio-inverse-soft"
                }`}
              >
                <Icon className="h-2.5 w-2.5" />
                {label}
              </div>
            ))}
          </nav>
        </aside>
        {/* main */}
        <div className="min-w-0 flex-1 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] font-bold text-white">Аналитика</p>
            <span className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[7px] text-portfolio-inverse-soft">
              Последние 30 дней
              <ChevronDown className="h-2 w-2" />
            </span>
          </div>

          {/* metric cards */}
          <div className="mt-2.5 grid grid-cols-3 gap-1.5">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-1.5"
              >
                <p className="truncate text-[6.5px] text-portfolio-inverse-soft">
                  {m.label}
                </p>
                <p className="mt-0.5 truncate text-[9px] font-bold text-white">
                  {m.value}
                </p>
                <p className="text-[6px] text-emerald-400">{m.delta}</p>
              </div>
            ))}
          </div>

          {/* chart */}
          <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.03] p-2">
            <div className="flex items-center justify-between">
              <p className="text-[8px] font-semibold text-white">Динамика</p>
              <p className="text-[7px] text-portfolio-inverse-soft">‹ ›</p>
            </div>
            <div className="relative mt-1">
              <div className="pointer-events-none absolute left-1 top-0 flex flex-col justify-between text-[5.5px] text-portfolio-inverse-soft" style={{ height: "3.4rem" }}>
                <span>20K</span>
                <span>10K</span>
                <span>0</span>
              </div>
              <svg viewBox="0 0 200 54" className="ml-4 h-[3.6rem] w-[calc(100%-1rem)]">
                <defs>
                  <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--portfolio-pink)" />
                    <stop offset="100%" stopColor="var(--portfolio-violet)" />
                  </linearGradient>
                  <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--portfolio-pink)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--portfolio-pink)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M2 40 C 30 38, 45 26, 70 30 S 105 44, 125 36 S 160 12, 198 18 L 198 54 L 2 54 Z"
                  fill="url(#hero-area)"
                />
                <path
                  d="M2 40 C 30 38, 45 26, 70 30 S 105 44, 125 36 S 160 12, 198 18"
                  fill="none"
                  stroke="url(#hero-line)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="125" cy="36" r="2.4" fill="var(--portfolio-pink)" />
              </svg>
              {/* tooltip */}
              <div className="absolute left-[54%] top-0 rounded-md border border-white/15 bg-portfolio-card px-1.5 py-1 text-center shadow-lg">
                <p className="text-[5.5px] text-portfolio-inverse-soft">17 мая</p>
                <p className="text-[7px] font-bold text-white">12,540</p>
              </div>
            </div>
            <div className="ml-4 flex justify-between text-[5.5px] text-portfolio-inverse-soft">
              <span>1 мая</span>
              <span>8 мая</span>
              <span>15 мая</span>
              <span>22 мая</span>
              <span>29 мая</span>
            </div>
          </div>

          {/* code + assistant */}
          <div className="mt-2 grid grid-cols-[1.35fr_1fr] gap-1.5">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-portfolio-deep p-1.5">
              <div className="flex gap-2 text-[6.5px]">
                <span className="border-b border-portfolio-violet pb-0.5 font-semibold text-white">
                  Build
                </span>
                <span className="text-portfolio-inverse-soft">Код</span>
              </div>
              <pre className="mt-1 font-mono text-[5.5px] leading-[1.7] text-portfolio-inverse-soft">
                <span className="text-portfolio-inverse-soft/60">{"// Генерация лендинга с AI-дизайнером"}</span>
                {"\n"}<span className="text-portfolio-pink">const</span> <span className="text-white">product</span> = <span className="text-portfolio-violet">await</span> vibe.<span className="text-portfolio-amber">generate</span>({"{"}
                {"\n"}  type: <span className="text-emerald-400">"landing"</span>,
                {"\n"}  theme: <span className="text-emerald-400">"neutral"</span>,
                {"\n"}  features: [<span className="text-emerald-400">"ai"</span>, <span className="text-emerald-400">"speed"</span>]
                {"\n"}{'}'})
              </pre>
            </div>
            <div className="rounded-lg border border-white/10 bg-portfolio-deep p-1.5">
              <div className="flex items-center gap-1">
                <Sparkles className="h-2.5 w-2.5 text-portfolio-violet" />
                <span className="text-[7px] font-semibold text-white">AI-ассистент</span>
              </div>
              <p className="mt-1 text-[6px] leading-relaxed text-portfolio-inverse-soft">
                Готово! Дашборд создан. Хочешь добавить график по источникам трафика?
              </p>
              <div className="mt-1.5 flex gap-1 text-portfolio-inverse-soft/60">
                <span className="h-2.5 w-2.5 rounded-full border border-white/20" />
                <span className="h-2.5 w-2.5 rounded-full border border-white/20" />
                <span className="h-2.5 w-2.5 rounded-full border border-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      {/* nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 sm:px-6 md:px-10">
        <Logo />
        <nav className="ml-auto hidden items-center gap-7 text-sm text-portfolio-muted lg:flex">
          {navLinks.map((l) => (
            <a key={l} href="#" className="transition-colors hover:text-portfolio-heading">
              {l}
            </a>
          ))}
        </nav>
      </header>

      {/* content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-6 sm:px-6 md:px-10 md:pb-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-portfolio-violet/40 bg-portfolio-violet/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-portfolio-inverse-soft">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-portfolio-violet to-portfolio-pink" />
            ВАЙБКОДИНГ
            <span className="text-portfolio-inverse-soft/60">×</span>
            AI
            <span className="text-portfolio-inverse-soft/60">×</span>
            ПРОДУКТЫ
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-portfolio-heading sm:text-5xl lg:text-[48px]">
            Создаю AI-продукты
            <br />
            <span className="bg-gradient-to-r from-portfolio-violet via-portfolio-pink to-portfolio-amber bg-clip-text text-transparent">
              через вайбкодинг
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-portfolio-muted">
            Быстро собираю MVP, лендинги и веб-приложения с помощью современных
            AI-инструментов
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-portfolio-amber to-portfolio-pink px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--portfolio-amber)_70%,transparent)] transition-transform hover:scale-[1.02]"
            >
              Посмотреть проекты
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-portfolio-heading transition-colors hover:bg-white/10"
            >
              Связаться
            </a>
          </div>

          {/* stats */}
          <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:grid-cols-4 sm:gap-x-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex min-w-0 items-start gap-2.5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-portfolio-violet" />
                <div className="min-w-0">
                  <p className="text-base font-bold text-portfolio-heading">{value}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-portfolio-muted">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dashboard */}
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--portfolio-amber) 35%, transparent), transparent 75%)",
            }}
          />
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
