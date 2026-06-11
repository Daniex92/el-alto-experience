import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { z } from "zod";
const heroImg = "/el-alto-experience/assets/hero-CVhzX3EK.jpg";
const philosophyImg = "/el-alto-experience/assets/philosophy-DuiWX8z-.jpg";
const environmentImg = "/el-alto-experience/assets/environment-C55T3vN5.jpg";
const expSeasonal = "/el-alto-experience/assets/exp-seasonal-BwTfR-iu.jpg";
const expCocktails = "/el-alto-experience/assets/exp-cocktails-D6u6704p.jpg";
const expPairings = "/el-alto-experience/assets/exp-pairings-DT4jTd2q.jpg";
const dish1 = "/el-alto-experience/assets/dish-1-CUHqr2ku.jpg";
const dish2 = "/el-alto-experience/assets/dish-2-1kbvCH3E.jpg";
const dish3 = "/el-alto-experience/assets/dish-3-CJOs6Nkx.jpg";
const dish4 = "/el-alto-experience/assets/dish-4-DmP62Ggp.jpg";
const eventsImg = "/el-alto-experience/assets/events-Z99yxHge.jpg";
const glampingImg = "/el-alto-experience/assets/glamping-CZMobJ0E.jpg";
const cateringImg = "/el-alto-experience/assets/catering-5nLNcMyd.jpg";
const logo = "/el-alto-experience/assets/logo-el-alto-_Ah0i-s-.png";
const images = {
  hero: heroImg,
  philosophy: philosophyImg,
  environment: environmentImg,
  events: eventsImg,
  glamping: glampingImg,
  catering: cateringImg,
  logo
};
const brand = {
  name: "El Alto",
  tagline: "Cocina de Entorno"
};
const nav = [
  { label: "Filosofía", href: "#philosophy" },
  { label: "Entorno", href: "#environment" },
  { label: "Experiencia", href: "#experience" },
  { label: "Eventos", href: "#events" },
  { label: "Glamping", href: "#glamping" },
  { label: "Reservas", href: "#reservations" }
];
const hero = {
  eyebrow: "Ráquira · Boyacá · Colombia",
  title: "Cocina de Entorno",
  body: "Una gastronomía nacida del territorio. Cada plato es una conversación entre el paisaje, las estaciones y las manos que cultivan, recolectan y cocinan en lo alto de los Andes colombianos.",
  primaryCta: { label: "Reserva tu evento", href: "#reservations" },
  secondaryCta: { label: "Descubre la experiencia", href: "#experience" }
};
const philosophy = {
  eyebrow: "La filosofía",
  title: "El territorio da forma a cada plato.",
  paragraphs: [
    "Cocinamos lo que la tierra ofrece. Trabajamos con productores cercanos, ingredientes de temporada y técnicas que respetan el ritmo del paisaje.",
    "No imponemos una idea sobre el entorno: lo escuchamos. La mesa se convierte en el lugar donde el campo, la cultura y la mano del cocinero se encuentran."
  ],
  signature: "Andrés Ortiz · Chef"
};
const environment = {
  eyebrow: "El entorno",
  title: "Ráquira, en el corazón de los Andes.",
  body: "Entre montañas de arcilla, talleres de cerámica y campos de quinua y maíz, Ráquira sostiene una tradición milenaria de oficios. Aquí los artesanos, los agricultores y los cocineros forman una misma cadena.",
  pillars: [
    { number: "01", title: "Paisaje", text: "Altitud, niebla, suelos de barro rojo y luz cambiante." },
    { number: "02", title: "Productores", text: "Familias locales que cultivan tubérculos, granos andinos y hierbas." },
    { number: "03", title: "Artesanía", text: "Cerámica de Ráquira que nace en la mesa como vajilla y memoria." },
    { number: "04", title: "Herencia", text: "Recetas muiscas y campesinas releídas con sensibilidad contemporánea." }
  ]
};
const experiences = [
  {
    title: "Cocina de Temporada",
    image: expSeasonal,
    text: "Menús que cambian con la cosecha. Un viaje guiado por los ciclos del campo boyacense."
  },
  {
    title: "Coctelería de Autor",
    image: expCocktails,
    text: "Destilados nativos, hierbas silvestres y frutas de altura en composiciones precisas."
  },
  {
    title: "Maridajes Curados",
    image: expPairings,
    text: "Vinos, fermentos y kombuchas seleccionados para acompañar cada momento del menú."
  }
];
const dishes = [
  { src: dish1, alt: "Tubérculos andinos con flores comestibles", caption: "Tubérculos · Páramo · Maíz" },
  { src: dish2, alt: "Trucha de los Andes ahumada al sarmiento", caption: "Trucha · Sarmiento · Hierbas" },
  { src: dish3, alt: "Postre de frutas nativas con miel y panela", caption: "Frutas nativas · Miel · Panela" },
  { src: dish4, alt: "Cordero de cocción lenta sobre granos andinos", caption: "Cordero · Cebada · Hierbas" }
];
const events = {
  eyebrow: "Eventos privados",
  title: "Celebraciones que pertenecen al lugar.",
  body: "Bodas, encuentros familiares, reuniones corporativas y experiencias íntimas diseñadas alrededor de una mesa larga, bajo el cielo del altiplano.",
  list: ["Bodas", "Celebraciones privadas", "Eventos corporativos", "Encuentros exclusivos"],
  cta: { label: "Planea tu evento", href: "#reservations" }
};
const glampingSection = {
  eyebrow: "Estancia y mesa",
  title: "Ráquira Glamping × El Alto.",
  body: "Dormir entre las montañas y despertar a una cocina que celebra el mismo paisaje. Una alianza pensada para quienes buscan una estadía completa: territorio, descanso y gastronomía en una sola experiencia.",
  bullets: [
    "Tiendas de lujo con vista a las montañas",
    "Desayunos de finca y cenas degustación",
    "Caminatas guiadas por artesanos y agricultores"
  ]
};
const cateringSection = {
  eyebrow: "Catering",
  title: "Llevamos el entorno a tu mesa.",
  body: "Servicios de catering diseñados con la misma sensibilidad editorial del restaurante. Producto local, vajilla artesanal y un equipo discreto."
};
const testimonials = [
  {
    quote: "Comer en El Alto no es ir a un restaurante. Es entrar a un paisaje y dejar que te cuente, plato por plato, quién lo habita.",
    author: "La Mesa Editorial"
  },
  {
    quote: "Una cocina honesta, profundamente colombiana y, al mismo tiempo, universal en su elegancia.",
    author: "Revista Diners"
  }
];
const location = {
  address: "Vereda El Alto, Ráquira, Boyacá, Colombia",
  hours: [
    { day: "Jueves — Viernes", time: "12:00 — 16:00" },
    { day: "Sábado — Domingo", time: "12:00 — 21:00" },
    { day: "Lunes — Miércoles", time: "Solo eventos privados" }
  ],
  phone: "+57 310 000 0000",
  email: "reservas@elalto.co",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.670378332792!2d-73.62684280709408!3d5.543105579477089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e41d33c2f026395%3A0x42fc1f431fd5d330!2sEl%20Alto%20Cocina%20de%20Entorno!5e0!3m2!1ses-419!2sco!4v1781193737900!5m2!1ses-419!2sco"
};
const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/573100000000" }
];
const logoMark = "/el-alto-experience/assets/logo-alto-svg-D8_jzrt2.svg";
function Spiral({
  className,
  ...rest
}) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logoMark,
      alt: "",
      "aria-hidden": "true",
      className,
      ...rest
    }
  );
}
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/60 py-3" : "bg-background/40 backdrop-blur-sm py-6"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsx(Spiral, { className: "w-8 h-8 text-primary transition-transform duration-700 group-hover:rotate-45" }),
            /* @__PURE__ */ jsxs("div", { className: "leading-none", children: [
              /* @__PURE__ */ jsx("div", { className: "font-serif text-xl tracking-wide text-primary", children: brand.name }),
              /* @__PURE__ */ jsx("div", { className: "eyebrow text-[10px] mt-1 text-muted-foreground", children: brand.tagline })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-10", children: nav.map((n) => /* @__PURE__ */ jsx(
            "a",
            {
              href: n.href,
              className: "eyebrow text-foreground/70 hover:text-primary transition-colors",
              children: n.label
            },
            n.href
          )) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#reservations",
              className: "hidden lg:inline-flex eyebrow text-primary border-b border-primary/40 hover:border-primary pb-1 transition-all",
              children: "Reservar"
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              "aria-label": "Abrir menú",
              onClick: () => setOpen((v) => !v),
              className: "lg:hidden flex flex-col gap-1.5 p-2",
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `w-6 h-px bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: `w-6 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}` }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `w-6 h-px bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `lg:hidden fixed inset-0 top-[60px] bg-background transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
            children: [
              /* @__PURE__ */ jsxs("nav", { className: "flex flex-col items-start gap-6 p-10", children: [
                nav.map((n) => /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: n.href,
                    onClick: () => setOpen(false),
                    className: "font-serif text-3xl text-foreground hover:text-primary",
                    children: n.label
                  },
                  n.href
                )),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#reservations",
                    onClick: () => setOpen(false),
                    className: "eyebrow text-primary border-b border-primary pb-1 mt-4",
                    children: "Reservar"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("img", { src: images.logo, alt: "", className: "hidden" })
            ]
          }
        )
      ]
    }
  );
}
function Hero() {
  const [y, setY] = useState(0);
  const rafRef = useRef(null);
  const scrollYRef = useRef(0);
  const lastUpdateRef = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      scrollYRef.current = window.scrollY;
      const now = performance.now();
      if (now - lastUpdateRef.current < 16) {
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
        }
        rafRef.current = requestAnimationFrame(() => {
          setY(scrollYRef.current);
          lastUpdateRef.current = performance.now();
          rafRef.current = null;
        });
        return;
      }
      setY(scrollYRef.current);
      lastUpdateRef.current = now;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative h-screen min-h-[680px] w-full overflow-hidden bg-secondary", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "absolute inset-0 will-change-transform",
        style: {
          transform: `translate3d(0, ${y * 0.25}px, 0)`,
          contain: "layout style paint",
          backfaceVisibility: "hidden"
        },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: images.hero,
              alt: "Plato de El Alto sobre paisaje de Ráquira al amanecer",
              width: 1920,
              height: 1280,
              className: "w-full h-[120%] object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/85" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow text-primary mb-6 reveal revealed", children: hero.eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "display-serif text-[clamp(3.5rem,9vw,9rem)] text-foreground mb-8", children: hero.title }),
      /* @__PURE__ */ jsx("span", { className: "hairline mb-8" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl text-lg lg:text-xl leading-relaxed text-foreground/85 mb-10", children: hero.body }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: hero.primaryCta.href,
            className: "eyebrow inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-colors",
            children: [
              hero.primaryCta.label,
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: hero.secondaryCta.href,
            className: "eyebrow inline-flex items-center gap-3 text-foreground border-b border-foreground/40 hover:border-primary hover:text-primary pb-2 transition-colors px-1",
            children: hero.secondaryCta.label
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow text-foreground/60 text-[10px]", children: "Scroll" }),
      /* @__PURE__ */ jsx("span", { className: "w-px h-12 bg-foreground/40 animate-pulse" })
    ] })
  ] });
}
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("revealed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("revealed"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const Comp = Tag;
  return /* @__PURE__ */ jsx(Comp, { ref, className: `reveal ${className}`, children });
}
function Philosophy() {
  return /* @__PURE__ */ jsx("section", { id: "philosophy", className: "relative py-32 lg:py-48 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-6 relative", children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: images.philosophy,
        alt: "Manos sosteniendo hierbas y tubérculos recién cosechados",
        loading: "lazy",
        width: 1400,
        height: 1600,
        className: "w-full h-full object-cover"
      }
    ) }) }),
    /* @__PURE__ */ jsxs(Reveal, { className: "lg:col-span-6 lg:pl-10", delay: 150, children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-8", children: philosophy.eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "display-serif text-[clamp(2.5rem,5vw,4.5rem)] mb-10", children: philosophy.title }),
      /* @__PURE__ */ jsx("span", { className: "hairline mb-10" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6 text-lg leading-relaxed text-foreground/85 max-w-xl", children: philosophy.paragraphs.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i)) }),
      /* @__PURE__ */ jsxs("p", { className: "editorial-body mt-12 text-primary", children: [
        "— ",
        philosophy.signature
      ] })
    ] })
  ] }) });
}
function Environment() {
  return /* @__PURE__ */ jsxs("section", { id: "environment", className: "relative bg-secondary grain", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[60vh] min-h-[420px] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: images.environment,
          alt: "Paisaje de colinas de Ráquira al amanecer",
          loading: "lazy",
          width: 1800,
          height: 1100,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12 py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 mb-20", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow mb-6", children: environment.eyebrow }),
          /* @__PURE__ */ jsx("h2", { className: "display-serif text-[clamp(2.25rem,4.5vw,4rem)]", children: environment.title })
        ] }),
        /* @__PURE__ */ jsxs(Reveal, { className: "lg:col-span-6 lg:col-start-7", delay: 120, children: [
          /* @__PURE__ */ jsx("span", { className: "hairline mb-8" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-foreground/85", children: environment.body })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border", children: environment.pillars.map((p, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 80, className: "bg-secondary p-8 lg:p-10", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-primary/70 mb-6", children: p.number }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl mb-3", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/70 leading-relaxed", children: p.text })
      ] }, p.number)) })
    ] })
  ] });
}
function Experience() {
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "py-32 lg:py-48 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl mb-20", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-6", children: "La experiencia" }),
      /* @__PURE__ */ jsx("h2", { className: "display-serif text-[clamp(2.25rem,4.5vw,4rem)]", children: "Tres maneras de habitar la mesa." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 lg:gap-12", children: experiences.map((exp, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 120, className: "group cursor-pointer", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden bg-secondary mb-6", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: exp.image,
            alt: exp.title,
            loading: "lazy",
            width: 1e3,
            height: 1200,
            className: "w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "eyebrow text-primary/60 mb-3", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl mb-4", children: exp.title }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground/75 leading-relaxed", children: exp.text })
    ] }, exp.title)) })
  ] }) });
}
function SignatureDishes() {
  const [active, setActive] = useState(null);
  return /* @__PURE__ */ jsxs("section", { className: "py-32 lg:py-48 bg-secondary", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl mb-20", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow mb-6", children: "Platos firma" }),
        /* @__PURE__ */ jsx("h2", { className: "display-serif text-[clamp(2.25rem,4.5vw,4rem)]", children: "Una memoria del paisaje, plato a plato." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-6 lg:gap-10", children: [
        /* @__PURE__ */ jsx(Reveal, { className: "col-span-12 md:col-span-7", children: /* @__PURE__ */ jsx(DishTile, { dish: dishes[0], index: 0, onOpen: setActive, aspect: "aspect-[4/5]" }) }),
        /* @__PURE__ */ jsx(Reveal, { className: "col-span-12 md:col-span-5 md:mt-24", delay: 120, children: /* @__PURE__ */ jsx(DishTile, { dish: dishes[1], index: 1, onOpen: setActive, aspect: "aspect-[4/3]" }) }),
        /* @__PURE__ */ jsx(Reveal, { className: "col-span-12 md:col-span-5 md:ml-[8%]", delay: 80, children: /* @__PURE__ */ jsx(DishTile, { dish: dishes[2], index: 2, onOpen: setActive, aspect: "aspect-[4/5]" }) }),
        /* @__PURE__ */ jsx(Reveal, { className: "col-span-12 md:col-span-7 md:mt-16", delay: 160, children: /* @__PURE__ */ jsx(DishTile, { dish: dishes[3], index: 3, onOpen: setActive, aspect: "aspect-[5/4]" }) })
      ] })
    ] }),
    active !== null && /* @__PURE__ */ jsx(
      Lightbox,
      {
        dish: dishes[active],
        onClose: () => setActive(null),
        onPrev: () => setActive((i) => i === null ? null : (i + dishes.length - 1) % dishes.length),
        onNext: () => setActive((i) => i === null ? null : (i + 1) % dishes.length)
      }
    )
  ] });
}
function DishTile({
  dish,
  index,
  onOpen,
  aspect
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => onOpen(index),
      className: "group block w-full text-left",
      "aria-label": `Abrir ${dish.alt}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: `relative overflow-hidden bg-background ${aspect}`, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: dish.src,
            alt: dish.alt,
            loading: "lazy",
            className: "w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between mt-4", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow text-foreground/70", children: dish.caption }),
          /* @__PURE__ */ jsxs("span", { className: "eyebrow text-primary/60", children: [
            "0",
            index + 1
          ] })
        ] })
      ]
    }
  );
}
function Lightbox({
  dish,
  onClose,
  onPrev,
  onNext
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      className: "fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6 lg:p-16",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Cerrar",
            onClick: onClose,
            className: "absolute top-6 right-6 eyebrow text-background hover:text-accent",
            children: "Cerrar ✕"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Anterior",
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            className: "absolute left-6 top-1/2 -translate-y-1/2 eyebrow text-background hover:text-accent text-2xl",
            children: "←"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Siguiente",
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            className: "absolute right-6 top-1/2 -translate-y-1/2 eyebrow text-background hover:text-accent text-2xl",
            children: "→"
          }
        ),
        /* @__PURE__ */ jsxs(
          "figure",
          {
            onClick: (e) => e.stopPropagation(),
            className: "max-w-5xl max-h-[85vh] flex flex-col items-center gap-4",
            children: [
              /* @__PURE__ */ jsx("img", { src: dish.src, alt: dish.alt, className: "max-h-[75vh] w-auto object-contain" }),
              /* @__PURE__ */ jsx("figcaption", { className: "eyebrow text-background/80", children: dish.caption })
            ]
          }
        )
      ]
    }
  );
}
function Events() {
  return /* @__PURE__ */ jsx("section", { id: "events", className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[80vh] min-h-[560px] overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: images.events,
        alt: "Mesa larga al aire libre iluminada al atardecer",
        loading: "lazy",
        width: 1800,
        height: 1100,
        className: "w-full h-full object-cover"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12 w-full", children: /* @__PURE__ */ jsxs(Reveal, { className: "max-w-xl text-background", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow text-accent mb-6", children: events.eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "display-serif text-[clamp(2.5rem,5vw,4.5rem)] text-background mb-8", children: events.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-background/85 mb-10", children: events.body }),
      /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-2 gap-x-8 gap-y-3 mb-10 text-background/80", children: events.list.map((e) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "w-4 h-px bg-accent" }),
        e
      ] }, e)) }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: events.cta.href,
          className: "eyebrow inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors",
          children: [
            events.cta.label,
            /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
          ]
        }
      )
    ] }) }) })
  ] }) });
}
function Glamping() {
  return /* @__PURE__ */ jsxs("section", { id: "glamping", className: "py-32 lg:py-48 bg-background relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(Spiral, { className: "absolute -top-24 -left-24 w-[420px] h-[420px] text-secondary", strokeWidth: 0.8 }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "lg:col-span-6 order-2 lg:order-1", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow mb-6", children: glampingSection.eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "display-serif text-[clamp(2.25rem,4.5vw,4rem)] mb-10", children: glampingSection.title }),
        /* @__PURE__ */ jsx("span", { className: "hairline mb-10" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-foreground/85 mb-10 max-w-xl", children: glampingSection.body }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: glampingSection.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4 text-foreground/85", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-3 w-6 h-px bg-primary shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: b })
        ] }, b)) })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-6 order-1 lg:order-2", delay: 120, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: images.glamping,
          alt: "Tienda de glamping iluminada al atardecer en las colinas de Ráquira",
          loading: "lazy",
          width: 1600,
          height: 1200,
          className: "w-full h-full object-cover"
        }
      ) }) })
    ] })
  ] });
}
function Catering() {
  return /* @__PURE__ */ jsx("section", { className: "py-32 lg:py-48 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-6", children: cateringSection.eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "display-serif text-[clamp(2.25rem,4.5vw,4rem)] mb-10", children: cateringSection.title }),
      /* @__PURE__ */ jsx("span", { className: "hairline mb-10" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-foreground/85 max-w-md", children: cateringSection.body })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-7", delay: 120, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[16/11] overflow-hidden bg-background", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: images.catering,
        alt: "Servicio de catering con canapés artesanales sobre mantel terracota",
        loading: "lazy",
        width: 1600,
        height: 1100,
        className: "w-full h-full object-cover"
      }
    ) }) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "py-32 lg:py-48 bg-background relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-6 lg:px-12 relative", children: /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-24", children: testimonials.map((t, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 150, children: /* @__PURE__ */ jsxs("blockquote", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("p", { className: "font-serif text-2xl lg:text-3xl leading-snug text-foreground italic", children: [
      "“",
      t.quote,
      "”"
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "eyebrow text-primary", children: [
      "— ",
      t.author
    ] })
  ] }) }, i)) }) }) });
}
const schema = z.object({
  name: z.string().trim().min(2, "Nombre requerido").max(80),
  email: z.string().trim().email("Correo inválido").max(120),
  phone: z.string().trim().min(6, "Teléfono requerido").max(30),
  date: z.string().min(1, "Fecha requerida"),
  guests: z.coerce.number().int().min(1, "Mínimo 1").max(300),
  eventType: z.string().min(1, "Selecciona un tipo"),
  message: z.string().trim().max(800).optional().default("")
});
const eventTypes = [
  "Cena en el restaurante",
  "Boda",
  "Celebración privada",
  "Evento corporativo",
  "Catering externo"
];
function Reservations() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const fieldErrors = {};
      parsed.error.issues.forEach((i) => {
        fieldErrors[i.path[0]] = i.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }
    setErrors({});
    setTimeout(() => {
      setStatus("ok");
      e.currentTarget?.reset?.();
    }, 700);
  }
  return /* @__PURE__ */ jsx("section", { id: "reservations", className: "py-32 lg:py-48 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-6", children: "Reservas" }),
      /* @__PURE__ */ jsx("h2", { className: "display-serif text-[clamp(2.25rem,4.5vw,4rem)] mb-10", children: "Una mesa que se prepara con tiempo." }),
      /* @__PURE__ */ jsx("span", { className: "hairline mb-10" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-foreground/85 max-w-md", children: "Cuéntanos sobre tu visita o tu evento. Nuestro equipo responderá personalmente en menos de 24 horas para construir contigo la experiencia." })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-7", delay: 120, children: /* @__PURE__ */ jsxs("form", { onSubmit, noValidate: true, className: "grid sm:grid-cols-2 gap-x-8 gap-y-8", children: [
      /* @__PURE__ */ jsx(Field, { label: "Nombre", name: "name", error: errors.name }),
      /* @__PURE__ */ jsx(Field, { label: "Correo", name: "email", type: "email", error: errors.email }),
      /* @__PURE__ */ jsx(Field, { label: "Teléfono", name: "phone", type: "tel", error: errors.phone }),
      /* @__PURE__ */ jsx(Field, { label: "Fecha", name: "date", type: "date", error: errors.date }),
      /* @__PURE__ */ jsx(Field, { label: "Invitados", name: "guests", type: "number", min: 1, max: 300, defaultValue: 2, error: errors.guests }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("label", { className: "eyebrow text-foreground/70 mb-3", htmlFor: "eventType", children: "Tipo de evento" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "eventType",
            name: "eventType",
            defaultValue: "",
            className: "bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors font-sans",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Selecciona —" }),
              eventTypes.map((t) => /* @__PURE__ */ jsx("option", { children: t }, t))
            ]
          }
        ),
        errors.eventType && /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive mt-2", children: errors.eventType })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 flex flex-col", children: [
        /* @__PURE__ */ jsx("label", { className: "eyebrow text-foreground/70 mb-3", htmlFor: "message", children: "Mensaje" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            rows: 4,
            maxLength: 800,
            className: "bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 flex flex-wrap items-center justify-between gap-6 pt-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground max-w-sm", children: "Al enviar aceptas que te contactemos para confirmar disponibilidad y detalles." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            disabled: status === "sending",
            className: "eyebrow inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-colors disabled:opacity-60",
            children: [
              status === "sending" ? "Enviando…" : "Enviar solicitud",
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
            ]
          }
        )
      ] }),
      status === "ok" && /* @__PURE__ */ jsx("p", { className: "sm:col-span-2 eyebrow text-primary", children: "Gracias. Hemos recibido tu solicitud — te escribiremos pronto." })
    ] }) })
  ] }) });
}
function Field({
  label,
  name,
  type = "text",
  error,
  ...rest
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx("label", { className: "eyebrow text-foreground/70 mb-3", htmlFor: name, children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: name,
        name,
        type,
        ...rest,
        className: "bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors font-sans"
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive mt-2", children: error })
  ] });
}
function Location() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12 py-32 lg:py-48 grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-6", children: "Cómo llegar" }),
      /* @__PURE__ */ jsx("h2", { className: "display-serif text-[clamp(2.25rem,4.5vw,4rem)] mb-10", children: "Un viaje hacia el altiplano." }),
      /* @__PURE__ */ jsx("span", { className: "hairline mb-10" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 text-foreground/85", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow text-foreground/60 mb-2", children: "Dirección" }),
          /* @__PURE__ */ jsx("p", { className: "font-serif text-xl leading-snug", children: location.address })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow text-foreground/60 mb-3", children: "Horarios" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: location.hours.map((h) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between gap-6 text-base border-b border-border/60 pb-2", children: [
            /* @__PURE__ */ jsx("span", { children: h.day }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/70", children: h.time })
          ] }, h.day)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow text-foreground/60 mb-2", children: "Teléfono" }),
            /* @__PURE__ */ jsx("a", { href: `tel:${location.phone}`, className: "hover:text-primary transition-colors", children: location.phone })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow text-foreground/60 mb-2", children: "Correo" }),
            /* @__PURE__ */ jsx("a", { href: `mailto:${location.email}`, className: "hover:text-primary transition-colors", children: location.email })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-7", delay: 120, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-secondary border border-border", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        title: "Mapa de Ráquira",
        src: location.mapsUrl,
        loading: "lazy",
        className: "w-full h-full grayscale-[40%] contrast-[1.05]",
        style: { border: 0 }
      }
    ) }) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-foreground text-background pt-24 pb-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 pb-16 border-b border-background/15", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx(Spiral, { className: "w-12 h-12 text-accent" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-serif text-3xl tracking-wide", children: brand.name }),
            /* @__PURE__ */ jsx("div", { className: "eyebrow text-background/60 mt-1", children: brand.tagline })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-background/70 max-w-md leading-relaxed", children: "Una gastronomía nacida del territorio. Ráquira, Boyacá — Colombia." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-background/50 mb-5", children: "Navegación" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: nav.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: n.href, className: "text-background/80 hover:text-accent transition-colors", children: n.label }) }, n.href)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-background/50 mb-5", children: "Contacto" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-background/80", children: [
          /* @__PURE__ */ jsx("li", { children: location.phone }),
          /* @__PURE__ */ jsx("li", { className: "break-all", children: location.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-background/50 mb-5", children: "Síguenos" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: social.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: s.href, target: "_blank", rel: "noreferrer", className: "text-background/80 hover:text-accent transition-colors", children: s.label }) }, s.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-xs text-background/50", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        brand.name,
        " · ",
        brand.tagline,
        ". Todos los derechos reservados."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Hecho en Ráquira, Boyacá" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Philosophy, {}),
    /* @__PURE__ */ jsx(Environment, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(SignatureDishes, {}),
    /* @__PURE__ */ jsx(Events, {}),
    /* @__PURE__ */ jsx(Glamping, {}),
    /* @__PURE__ */ jsx(Catering, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(Reservations, {}),
    /* @__PURE__ */ jsx(Location, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
