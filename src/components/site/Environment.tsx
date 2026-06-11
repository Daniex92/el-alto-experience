import { environment, images } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function Environment() {
  return (
    <section id="environment" className="relative bg-secondary grain">
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={images.environment}
          alt="Paisaje de colinas de Ráquira al amanecer"
          loading="lazy"
          width={1800}
          height={1100}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">{environment.eyebrow}</p>
            <h2 className="display-serif text-[clamp(2.25rem,4.5vw,4rem)]">{environment.title}</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <span className="hairline mb-8" />
            <p className="text-lg leading-relaxed text-foreground/85">{environment.body}</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {environment.pillars.map((p, i) => (
            <Reveal key={p.number} delay={i * 80} className="bg-secondary p-8 lg:p-10">
              <div className="eyebrow text-primary/70 mb-6">{p.number}</div>
              <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
