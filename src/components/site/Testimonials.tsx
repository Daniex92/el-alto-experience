import { testimonials } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { Spiral } from "./Spiral";

export function Testimonials() {
  return (
    <section className="py-32 lg:py-48 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 150}>
              <blockquote className="space-y-8">
                <p className="font-serif text-2xl lg:text-3xl leading-snug text-foreground italic">
                  “{t.quote}”
                </p>
                <footer className="eyebrow text-primary">— {t.author}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
