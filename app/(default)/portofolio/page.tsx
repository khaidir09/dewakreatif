export const metadata = {
  title: "Portofolio - Dewa Kreatif",
  description:
    "Portofolio kami yang menampilkan berbagai proyek desain grafis, website, dan aplikasi yang telah kami kerjakan untuk klien dari berbagai industri.",
};

import PortofolioCategories from "@/components/portofolio-categories";
import Hero from "./hero";
import Cta from "@/components/cta-alternative";

export default function Portofolios() {
  return (
    <>
      <Hero />
      <PortofolioCategories />
      <Cta
        heading="Mulai Proyek Anda Bersama Dewa Kreatif"
        buttonText="Konsultasi Gratis"
        buttonLink="https://wa.me/6281938960028"
      />
    </>
  );
}
