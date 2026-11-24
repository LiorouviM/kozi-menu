import { useEffect, useMemo, useState } from "react"
import { Languages, MapPin, Phone, ShoppingBag } from "lucide-react"
import DishOrbitCarousel from "@/components/ui/dish-orbit-carousel"
import { KOZI, LABELS, MENU, UI, featured, type Lang } from "@/data/menu"
import { cn } from "@/lib/utils"

function readLang(): Lang {
  try {
    const v = localStorage.getItem("kozi-lang")
    if (v === "en" || v === "el") return v
  } catch { /* storage blocked */ }
  return "en"
}

function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative grid size-11 place-items-center overflow-hidden rounded-xl shadow-sm", className)}
      style={{ background: "repeating-linear-gradient(90deg,var(--primary) 0 6px,#fbf6ee 6px 11px)" }}
    >
      <span className="rounded-md bg-primary px-1.5 py-0.5 text-[13px] font-extrabold leading-none tracking-tight text-primary-foreground">
        kozi
      </span>
    </span>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(readLang)
  const t = UI[lang]
  const dishes = useMemo(() => featured(lang), [lang])

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem("kozi-lang", lang) } catch { /* storage blocked */ }
  }, [lang])

  // A real link click (not window.open), so it also works where pop-ups are blocked
  const open = (url: string) => {
    const a = document.createElement("a")
    a.href = url; a.target = "_blank"; a.rel = "noopener"
    a.click()
  }
  const toMenu = () => document.getElementById("menu")?.scrollIntoView()

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <a href="#top" className="flex items-center gap-3">
            <Logo />
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight">Kozi</span>
              <span className="block text-xs text-muted-foreground">{KOZI.tagline[lang]} · {KOZI.place[lang]}</span>
            </span>
          </a>
          <nav className="ml-auto flex items-center gap-1 text-sm">
            <a href="#menu" className="hidden rounded-lg px-3 py-2 font-medium hover:bg-muted sm:block">{t.menuTitle}</a>
            <a href="#visit" className="hidden rounded-lg px-3 py-2 font-medium hover:bg-muted sm:block">{t.findUs}</a>
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "el" : "en")}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 font-medium hover:bg-muted"
            >
              <Languages className="size-4" aria-hidden="true" />
              {t.lang}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="kozi-carousel" aria-label={LABELS[lang].region}>
          <DishOrbitCarousel
            key={lang}
            dishes={dishes}
            height="calc(100svh - 4rem)"
            fontSrc={null}
            round
            loop={false}
            labels={LABELS[lang]}
            onPlay={() => open(KOZI.maps)}
            onOrder={() => open(KOZI.wolt)}
            onMenu={toMenu}
          />
        </section>

        <section id="menu" className="scroll-mt-16 bg-muted/60 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t.menuTitle}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{t.menuIntro}</p>
            <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {MENU.map((s) => (
                <div key={s.en}>
                  <h3 className="border-b-2 border-primary pb-2 text-xl font-bold text-primary">{s[lang]}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {s.items.map(([en, el]) => (
                      <li key={en} className="flex flex-col border-b border-dashed border-border/80 pb-1.5">
                        <span className="font-medium">{lang === "en" ? en : el}</span>
                        {en !== el ? <span className="text-xs text-muted-foreground">{lang === "en" ? el : en}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="scroll-mt-16 bg-primary py-14 text-primary-foreground">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">{t.findUs}</h2>
              <p className="mt-2 opacity-85">{KOZI.address[lang]}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={KOZI.directions} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-xl bg-primary-foreground px-4 py-3 font-semibold text-primary hover:opacity-90">
                <MapPin className="size-4" aria-hidden="true" />{t.directions}
              </a>
              <a href={"tel:" + KOZI.phone.replace(/\s/g, "")} className="flex items-center gap-2 rounded-xl border border-primary-foreground/50 px-4 py-3 font-semibold hover:bg-primary-foreground/10">
                <Phone className="size-4" aria-hidden="true" />{KOZI.phone}
              </a>
              <a href={KOZI.wolt} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-xl border border-primary-foreground/50 px-4 py-3 font-semibold hover:bg-primary-foreground/10">
                <ShoppingBag className="size-4" aria-hidden="true" />{t.order}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground">
        © Kozi · {KOZI.tagline[lang]} · {KOZI.place[lang]} — {t.footer}
      </footer>
    </div>
  )
}
