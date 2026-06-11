import { experiences } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-32 lg:py-48 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-2xl mb-20">
          <p className="eyebrow mb-6">La experiencia</p>
          <h2 className="display-serif text-[clamp(2.25rem,4.5vw,4rem)]">
            Tres maneras de habitar la mesa.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {experiences.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 120} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-6">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  width={1000}
                  height={1200}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
              </div>
              <div className="eyebrow text-primary/60 mb-3">0{i + 1}</div>
              <h3 className="font-serif text-3xl mb-4">{exp.title}</h3>
              <p className="text-foreground/75 leading-relaxed">{exp.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
