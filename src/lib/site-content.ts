/**
 * Single source of truth for site copy and imagery.
 * Edit text here to update the entire site.
 */
import hero from "@/assets/hero.jpg";
import philosophy from "@/assets/philosophy.jpg";
import environment from "@/assets/environment.jpg";
import expSeasonal from "@/assets/exp-seasonal.jpg";
import expCocktails from "@/assets/exp-cocktails.jpg";
import expPairings from "@/assets/exp-pairings.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import events from "@/assets/events.jpg";
import glamping from "@/assets/glamping.jpg";
import catering from "@/assets/catering.jpg";
import logo from "@/assets/logo-el-alto.png";

export const images = {
  hero,
  philosophy,
  environment,
  expSeasonal,
  expCocktails,
  expPairings,
  dish1,
  dish2,
  dish3,
  dish4,
  events,
  glamping,
  catering,
  logo,
};

export const brand = {
  name: "El Alto",
  tagline: "Cocina de Entorno",
};

export const nav = [
  { label: "Filosofía", href: "#philosophy" },
  { label: "Entorno", href: "#environment" },
  { label: "Experiencia", href: "#experience" },
  { label: "Eventos", href: "#events" },
  { label: "Glamping", href: "#glamping" },
  { label: "Reservas", href: "#reservations" },
];

export const hero = {
  eyebrow: "Ráquira · Boyacá · Colombia",
  title: "Cocina de Entorno",
  body:
    "Una gastronomía nacida del territorio. Cada plato es una conversación entre el paisaje, las estaciones y las manos que cultivan, recolectan y cocinan en lo alto de los Andes colombianos.",
  primaryCta: { label: "Reserva tu evento", href: "#reservations" },
  secondaryCta: { label: "Descubre la experiencia", href: "#experience" },
};

export const philosophy = {
  eyebrow: "La filosofía",
  title: "El territorio da forma a cada plato.",
  paragraphs: [
    "Cocinamos lo que la tierra ofrece. Trabajamos con productores cercanos, ingredientes de temporada y técnicas que respetan el ritmo del paisaje.",
    "No imponemos una idea sobre el entorno: lo escuchamos. La mesa se convierte en el lugar donde el campo, la cultura y la mano del cocinero se encuentran.",
  ],
  signature: "Andrés Ortiz · Chef",
};

export const environment = {
  eyebrow: "El entorno",
  title: "Ráquira, en el corazón de los Andes.",
  body:
    "Entre montañas de arcilla, talleres de cerámica y campos de quinua y maíz, Ráquira sostiene una tradición milenaria de oficios. Aquí los artesanos, los agricultores y los cocineros forman una misma cadena.",
  pillars: [
    { number: "01", title: "Paisaje", text: "Altitud, niebla, suelos de barro rojo y luz cambiante." },
    { number: "02", title: "Productores", text: "Familias locales que cultivan tubérculos, granos andinos y hierbas." },
    { number: "03", title: "Artesanía", text: "Cerámica de Ráquira que nace en la mesa como vajilla y memoria." },
    { number: "04", title: "Herencia", text: "Recetas muiscas y campesinas releídas con sensibilidad contemporánea." },
  ],
};

export const experiences = [
  {
    title: "Cocina de Temporada",
    image: expSeasonal,
    text: "Menús que cambian con la cosecha. Un viaje guiado por los ciclos del campo boyacense.",
  },
  {
    title: "Coctelería de Autor",
    image: expCocktails,
    text: "Destilados nativos, hierbas silvestres y frutas de altura en composiciones precisas.",
  },
  {
    title: "Maridajes Curados",
    image: expPairings,
    text: "Vinos, fermentos y kombuchas seleccionados para acompañar cada momento del menú.",
  },
];

export const dishes = [
  { src: dish1, alt: "Tubérculos andinos con flores comestibles", caption: "Tubérculos · Páramo · Maíz" },
  { src: dish2, alt: "Trucha de los Andes ahumada al sarmiento", caption: "Trucha · Sarmiento · Hierbas" },
  { src: dish3, alt: "Postre de frutas nativas con miel y panela", caption: "Frutas nativas · Miel · Panela" },
  { src: dish4, alt: "Cordero de cocción lenta sobre granos andinos", caption: "Cordero · Cebada · Hierbas" },
];

export const events = {
  eyebrow: "Eventos privados",
  title: "Celebraciones que pertenecen al lugar.",
  body:
    "Bodas, encuentros familiares, reuniones corporativas y experiencias íntimas diseñadas alrededor de una mesa larga, bajo el cielo del altiplano.",
  list: ["Bodas", "Celebraciones privadas", "Eventos corporativos", "Encuentros exclusivos"],
  cta: { label: "Planea tu evento", href: "#reservations" },
};

export const glampingSection = {
  eyebrow: "Estancia y mesa",
  title: "Ráquira Glamping × El Alto.",
  body:
    "Dormir entre las montañas y despertar a una cocina que celebra el mismo paisaje. Una alianza pensada para quienes buscan una estadía completa: territorio, descanso y gastronomía en una sola experiencia.",
  bullets: [
    "Tiendas de lujo con vista a las montañas",
    "Desayunos de finca y cenas degustación",
    "Caminatas guiadas por artesanos y agricultores",
  ],
};

export const cateringSection = {
  eyebrow: "Catering",
  title: "Llevamos el entorno a tu mesa.",
  body:
    "Servicios de catering diseñados con la misma sensibilidad editorial del restaurante. Producto local, vajilla artesanal y un equipo discreto.",
};

export const testimonials = [
  {
    quote:
      "Comer en El Alto no es ir a un restaurante. Es entrar a un paisaje y dejar que te cuente, plato por plato, quién lo habita.",
    author: "La Mesa Editorial",
  },
  {
    quote:
      "Una cocina honesta, profundamente colombiana y, al mismo tiempo, universal en su elegancia.",
    author: "Revista Diners",
  },
];

export const location = {
  address: "Vereda El Alto, Ráquira, Boyacá, Colombia",
  hours: [
    { day: "Jueves — Viernes", time: "12:00 — 16:00" },
    { day: "Sábado — Domingo", time: "12:00 — 21:00" },
    { day: "Lunes — Miércoles", time: "Solo eventos privados" },
  ],
  phone: "+57 310 000 0000",
  email: "reservas@elalto.co",
  mapsUrl: "https://www.google.com/maps?q=Ráquira+Boyacá+Colombia&output=embed",
};

export const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/573100000000" },
];
