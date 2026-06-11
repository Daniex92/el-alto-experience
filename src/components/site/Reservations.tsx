import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Nombre requerido").max(80),
  email: z.string().trim().email("Correo inválido").max(120),
  phone: z.string().trim().min(6, "Teléfono requerido").max(30),
  date: z.string().min(1, "Fecha requerida"),
  guests: z.coerce.number().int().min(1, "Mínimo 1").max(300),
  eventType: z.string().min(1, "Selecciona un tipo"),
  message: z.string().trim().max(800).optional().default(""),
});

const eventTypes = [
  "Cena en el restaurante",
  "Boda",
  "Celebración privada",
  "Evento corporativo",
  "Catering externo",
];

export function Reservations() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }
    setErrors({});
    // Simulate submission. Wire to backend / email service when available.
    setTimeout(() => {
      setStatus("ok");
      e.currentTarget?.reset?.();
    }, 700);
  }

  return (
    <section id="reservations" className="py-32 lg:py-48 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6">Reservas</p>
          <h2 className="display-serif text-[clamp(2.25rem,4.5vw,4rem)] mb-10">
            Una mesa que se prepara con tiempo.
          </h2>
          <span className="hairline mb-10" />
          <p className="text-lg leading-relaxed text-foreground/85 max-w-md">
            Cuéntanos sobre tu visita o tu evento. Nuestro equipo responderá personalmente en menos de 24 horas para construir contigo la experiencia.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
            <Field label="Nombre" name="name" error={errors.name} />
            <Field label="Correo" name="email" type="email" error={errors.email} />
            <Field label="Teléfono" name="phone" type="tel" error={errors.phone} />
            <Field label="Fecha" name="date" type="date" error={errors.date} />
            <Field label="Invitados" name="guests" type="number" min={1} max={300} defaultValue={2} error={errors.guests} />
            <div className="flex flex-col">
              <label className="eyebrow text-foreground/70 mb-3" htmlFor="eventType">
                Tipo de evento
              </label>
              <select
                id="eventType"
                name="eventType"
                defaultValue=""
                className="bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors font-sans"
              >
                <option value="" disabled>
                  Selecciona —
                </option>
                {eventTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {errors.eventType && <p className="text-xs text-destructive mt-2">{errors.eventType}</p>}
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <label className="eyebrow text-foreground/70 mb-3" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={800}
                className="bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors resize-none"
              />
            </div>

            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-6 pt-4">
              <p className="text-xs text-muted-foreground max-w-sm">
                Al enviar aceptas que te contactemos para confirmar disponibilidad y detalles.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="eyebrow inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "Enviar solicitud"}
                <span aria-hidden>→</span>
              </button>
            </div>

            {status === "ok" && (
              <p className="sm:col-span-2 eyebrow text-primary">
                Gracias. Hemos recibido tu solicitud — te escribiremos pronto.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col">
      <label className="eyebrow text-foreground/70 mb-3" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        {...rest}
        className="bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors font-sans"
      />
      {error && <p className="text-xs text-destructive mt-2">{error}</p>}
    </div>
  );
}
