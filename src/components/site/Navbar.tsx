import { useEffect, useState } from "react";
import { nav, brand, images } from "@/lib/site-content";
import { Spiral } from "./Spiral";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-background/40 backdrop-blur-sm py-6"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Spiral className="w-8 h-8 text-primary transition-transform duration-700 group-hover:rotate-45" />
          <div className="leading-none">
            <div className="font-serif text-xl tracking-wide text-primary">{brand.name}</div>
            <div className="eyebrow text-[10px] mt-1 text-muted-foreground">{brand.tagline}</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="eyebrow text-foreground/70 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservations"
          className="hidden lg:inline-flex eyebrow text-primary border-b border-primary/40 hover:border-primary pb-1 transition-all"
        >
          Reservar
        </a>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden relative z-[60] flex flex-col items-center justify-center gap-1.5 w-11 h-11 rounded-full border transition-colors ${
            scrolled || open
              ? "bg-background/90 border-border text-foreground"
              : "bg-black/40 backdrop-blur-sm border-white/30 text-white"
          }`}
        >
          <span
            className={`block w-5 h-[2px] bg-current rounded transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block w-5 h-[2px] bg-current rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-5 h-[2px] bg-current rounded transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-background transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-start gap-6 p-10">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-foreground hover:text-primary"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={() => setOpen(false)}
            className="eyebrow text-primary border-b border-primary pb-1 mt-4"
          >
            Reservar
          </a>
        </nav>
        <img src={images.logo} alt="" className="hidden" />
      </div>
    </header>
  );
}
