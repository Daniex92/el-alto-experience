import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Philosophy } from "@/components/site/Philosophy";
import { Environment } from "@/components/site/Environment";
import { Experience } from "@/components/site/Experience";
import { SignatureDishes } from "@/components/site/SignatureDishes";
import { Events } from "@/components/site/Events";
import { Glamping } from "@/components/site/Glamping";
import { Catering } from "@/components/site/Catering";
import { Testimonials } from "@/components/site/Testimonials";
import { Reservations } from "@/components/site/Reservations";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Alto · Cocina de Entorno — Ráquira, Boyacá" },
      {
        name: "description",
        content:
          "El Alto es una experiencia gastronómica nacida del territorio de Ráquira: cocina de temporada, eventos privados y glamping en los Andes colombianos.",
      },
      { property: "og:title", content: "El Alto · Cocina de Entorno" },
      {
        property: "og:description",
        content:
          "Gastronomía inspirada en el paisaje, las estaciones y la cultura de Ráquira, Boyacá.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Philosophy />
      <Environment />
      <Experience />
      <SignatureDishes />
      <Events />
      <Glamping />
      <Catering />
      <Testimonials />
      <Reservations />
      <Location />
      <Footer />
    </main>
  );
}
