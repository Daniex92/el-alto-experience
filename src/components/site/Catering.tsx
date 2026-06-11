import { cateringSection, images } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function Catering() {
  return (
    <section className="py-32 lg:py-48 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6">{cateringSection.eyebrow}</p>
          <h2 className="display-serif text-[clamp(2.25rem,4.5vw,4rem)] mb-10">
            {cateringSection.title}
          </h2>
          <span className="hairline mb-10" />
          <p className="text-lg leading-relaxed text-foreground/85 max-w-md">
            {cateringSection.body}
          </p>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={120}>
          <div className="relative aspect-[16/11] overflow-hidden bg-background">
            <img
              src={images.catering}
              alt="Servicio de catering con canapés artesanales sobre mantel terracota"
              loading="lazy"
              width={1600}
              height={1100}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
