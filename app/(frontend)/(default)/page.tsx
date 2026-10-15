export const metadata = {
  title: "Jasa Desain Grafis, Web dan Aplikasi Kostum | Dewa Kreatif",
  description:
    "Kami hadir untuk mendukung perkembangan dan membantu adaptasi para pelaku bisnis / UMKM / Pelayanan Publik agar tidak tertinggal dalam dunia digital yang terus berkembang",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <TestimonialsCarousel />
      <Cta />
    </>
  );
}
