import { Mail, Send } from "lucide-react";

export function CtaSection() {
  return (
    <section className="portfolio-glow">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-3 text-2xl font-bold text-portfolio-heading sm:text-3xl">
            <span className="h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-portfolio-violet to-portfolio-pink" />
            Готовы начать проект?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-portfolio-muted sm:text-base">
            Напишите мне, и мы обсудим вашу задачу
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="https://t.me/username"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-portfolio-violet to-portfolio-pink px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--portfolio-violet)_70%,transparent)] transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Написать в Telegram
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-portfolio-heading transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Написать на Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
