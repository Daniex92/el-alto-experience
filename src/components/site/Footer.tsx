import { brand, nav, social, location } from "@/lib/site-content";
import { Spiral } from "./Spiral";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-background/15">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <Spiral className="w-12 h-12 text-accent" />
              <div>
                <div className="font-serif text-3xl tracking-wide">{brand.name}</div>
                <div className="eyebrow text-background/60 mt-1">{brand.tagline}</div>
              </div>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed">
              Una gastronomía nacida del territorio. Ráquira, Boyacá — Colombia.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-background/50 mb-5">Navegación</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-background/80 hover:text-accent transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-background/50 mb-5">Contacto</p>
            <ul className="space-y-3 text-background/80">
              <li>{location.phone}</li>
              <li className="break-all">{location.email}</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-background/50 mb-5">Síguenos</p>
            <ul className="space-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-background/80 hover:text-accent transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-xs text-background/50">
          <p>© {new Date().getFullYear()} {brand.name} · {brand.tagline}. Todos los derechos reservados.</p>
          <p className="eyebrow">Hecho en Ráquira, Boyacá</p>
        </div>
      </div>
    </footer>
  );
}
