import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";
import { MenuSection } from "@/components/Menu";
import { Reservation } from "@/components/Reservation";
import { Reviews } from "@/components/Reviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <MenuSection />
      <Reviews />
      <Instagram />
      <Reservation />
      <Contact />
    </>
  );
}
