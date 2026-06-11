import { events, images } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function Events() {
  return (
    <section id="events" className="relative">
      <div className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img
          src={images.events}
          alt="Mesa larga al aire libre iluminada al atardecer"
          loading="lazy"
          width={1800}
          height={1100}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
            <Reveal className="max-w-xl text-background">
              <p className="eyebrow text-accent mb-6">{events.eyebrow}</p>
              <h2 className="display-serif text-[clamp(2.5rem,5vw,4.5rem)] text-background mb-8">
                {events.title}
              </h2>
              <p className="text-lg leading-relaxed text-background/85 mb-10">{events.body}</p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 mb-10 text-background/80">
                {events.list.map((e) => (
                  <li key={e} className="flex items-center gap-3 text-sm">
                    <span className="w-4 h-px bg-accent" />
                    {e}
                  </li>
                ))}
              </ul>
              <a
                href={events.cta.href}
                className="eyebrow inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {events.cta.label}
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
