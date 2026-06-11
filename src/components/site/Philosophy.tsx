import { philosophy, images } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { Spiral } from "./Spiral";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 lg:py-48 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
            <img
              src={images.philosophy}
              alt="Manos sosteniendo hierbas y tubérculos recién cosechados"
              loading="lazy"
              width={1400}
              height={1600}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:pl-10" delay={150}>
          <p className="eyebrow mb-8">{philosophy.eyebrow}</p>
          <h2 className="display-serif text-[clamp(2.5rem,5vw,4.5rem)] mb-10">
            {philosophy.title}
          </h2>
          <span className="hairline mb-10" />
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85 max-w-xl">
            {philosophy.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="editorial-body mt-12 text-primary">— {philosophy.signature}</p>
        </Reveal>
      </div>
    </section>
  );
}
