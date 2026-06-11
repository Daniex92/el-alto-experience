import { glampingSection, images } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { Spiral } from "./Spiral";

export function Glamping() {
  return (
    <section id="glamping" className="py-32 lg:py-48 bg-background relative overflow-hidden">
      <Spiral className="absolute -top-24 -left-24 w-[420px] h-[420px] text-secondary" strokeWidth={0.8} />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <p className="eyebrow mb-6">{glampingSection.eyebrow}</p>
          <h2 className="display-serif text-[clamp(2.25rem,4.5vw,4rem)] mb-10">
            {glampingSection.title}
          </h2>
          <span className="hairline mb-10" />
          <p className="text-lg leading-relaxed text-foreground/85 mb-10 max-w-xl">
            {glampingSection.body}
          </p>
          <ul className="space-y-4">
            {glampingSection.bullets.map((b) => (
              <li key={b} className="flex items-start gap-4 text-foreground/85">
                <span className="mt-3 w-6 h-px bg-primary shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={120}>
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
            <img
              src={images.glamping}
              alt="Tienda de glamping iluminada al atardecer en las colinas de Ráquira"
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
