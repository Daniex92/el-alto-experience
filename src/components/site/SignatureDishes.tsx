import { useState } from "react";
import { dishes } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function SignatureDishes() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-32 lg:py-48 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-2xl mb-20">
          <p className="eyebrow mb-6">Platos firma</p>
          <h2 className="display-serif text-[clamp(2.25rem,4.5vw,4rem)]">
            Una memoria del paisaje, plato a plato.
          </h2>
        </Reveal>

        {/* Asymmetric editorial gallery */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <Reveal className="col-span-12 md:col-span-7">
            <DishTile dish={dishes[0]} index={0} onOpen={setActive} aspect="aspect-[4/5]" />
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5 md:mt-24" delay={120}>
            <DishTile dish={dishes[1]} index={1} onOpen={setActive} aspect="aspect-[4/3]" />
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5 md:ml-[8%]" delay={80}>
            <DishTile dish={dishes[2]} index={2} onOpen={setActive} aspect="aspect-[4/5]" />
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7 md:mt-16" delay={160}>
            <DishTile dish={dishes[3]} index={3} onOpen={setActive} aspect="aspect-[5/4]" />
          </Reveal>
        </div>
      </div>

      {active !== null && (
        <Lightbox
          dish={dishes[active]}
          onClose={() => setActive(null)}
          onPrev={() => setActive((i) => (i === null ? null : (i + dishes.length - 1) % dishes.length))}
          onNext={() => setActive((i) => (i === null ? null : (i + 1) % dishes.length))}
        />
      )}
    </section>
  );
}

function DishTile({
  dish,
  index,
  onOpen,
  aspect,
}: {
  dish: (typeof dishes)[number];
  index: number;
  onOpen: (i: number) => void;
  aspect: string;
}) {
  return (
    <button
      onClick={() => onOpen(index)}
      className="group block w-full text-left"
      aria-label={`Abrir ${dish.alt}`}
    >
      <div className={`relative overflow-hidden bg-background ${aspect}`}>
        <img
          src={dish.src}
          alt={dish.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex items-baseline justify-between mt-4">
        <p className="eyebrow text-foreground/70">{dish.caption}</p>
        <span className="eyebrow text-primary/60">0{index + 1}</span>
      </div>
    </button>
  );
}

function Lightbox({
  dish,
  onClose,
  onPrev,
  onNext,
}: {
  dish: (typeof dishes)[number];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6 lg:p-16"
      onClick={onClose}
    >
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute top-6 right-6 eyebrow text-background hover:text-accent"
      >
        Cerrar ✕
      </button>
      <button
        aria-label="Anterior"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 eyebrow text-background hover:text-accent text-2xl"
      >
        ←
      </button>
      <button
        aria-label="Siguiente"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 eyebrow text-background hover:text-accent text-2xl"
      >
        →
      </button>
      <figure
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-4"
      >
        <img src={dish.src} alt={dish.alt} className="max-h-[75vh] w-auto object-contain" />
        <figcaption className="eyebrow text-background/80">{dish.caption}</figcaption>
      </figure>
    </div>
  );
}
