import { useEffect, useState, useRef } from "react";
import { hero, images } from "@/lib/site-content";
import { Spiral } from "./Spiral";

export function Hero() {
  const [y, setY] = useState(0);
  const rafRef = useRef<number | null>(null);
  const scrollYRef = useRef(0);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollYRef.current = window.scrollY;
      
      const now = performance.now();
      // Throttle to ~60fps (16ms minimum between updates)
      if (now - lastUpdateRef.current < 16) {
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
        }
        rafRef.current = requestAnimationFrame(() => {
          setY(scrollYRef.current);
          lastUpdateRef.current = performance.now();
          rafRef.current = null;
        });
        return;
      }

      setY(scrollYRef.current);
      lastUpdateRef.current = now;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden bg-secondary">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ 
          transform: `translate3d(0, ${y * 0.25}px, 0)`,
          contain: "layout style paint",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src={images.hero}
          alt="Plato de El Alto sobre paisaje de Ráquira al amanecer"
          width={1920}
          height={1280}
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/85" />
      </div>


      <div className="relative z-10 h-full mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32">
        <div className="max-w-3xl [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
          <p className="eyebrow text-primary mb-6 reveal revealed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{hero.eyebrow}</p>
          <h1 className="display-serif text-[clamp(3.5rem,9vw,9rem)] text-white mb-8">
            {hero.title}
          </h1>
          <span className="hairline mb-8 !bg-white/60" />
          <p className="max-w-xl text-lg lg:text-xl leading-relaxed text-white/90 mb-10">
            {hero.body}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={hero.primaryCta.href}
              className="eyebrow inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-colors shadow-lg"
            >
              {hero.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="eyebrow inline-flex items-center gap-3 text-white border-b border-white/60 hover:border-primary hover:text-primary pb-2 transition-colors px-1"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="eyebrow text-white/80 text-[10px]">Scroll</span>
        <span className="w-px h-12 bg-white/60 animate-pulse" />
      </div>
    </section>
  );
}
