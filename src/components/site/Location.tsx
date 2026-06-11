import { location } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-32 lg:py-48 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6">Cómo llegar</p>
          <h2 className="display-serif text-[clamp(2.25rem,4.5vw,4rem)] mb-10">
            Un viaje hacia el altiplano.
          </h2>
          <span className="hairline mb-10" />

          <div className="space-y-8 text-foreground/85">
            <div>
              <p className="eyebrow text-foreground/60 mb-2">Dirección</p>
              <p className="font-serif text-xl leading-snug">{location.address}</p>
            </div>
            <div>
              <p className="eyebrow text-foreground/60 mb-3">Horarios</p>
              <ul className="space-y-2">
                {location.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6 text-base border-b border-border/60 pb-2">
                    <span>{h.day}</span>
                    <span className="text-foreground/70">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="eyebrow text-foreground/60 mb-2">Teléfono</p>
                <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                  {location.phone}
                </a>
              </div>
              <div>
                <p className="eyebrow text-foreground/60 mb-2">Correo</p>
                <a href={`mailto:${location.email}`} className="hover:text-primary transition-colors">
                  {location.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-secondary border border-border">
            <iframe
              title="Mapa de Ráquira"
              src={location.mapsUrl}
              loading="lazy"
              className="w-full h-full grayscale-[40%] contrast-[1.05]"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
