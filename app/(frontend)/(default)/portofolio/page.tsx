export const metadata = {
  title: "Portofolio - Dewa Kreatif",
  description:
    "Portofolio kami yang menampilkan berbagai proyek desain grafis, website, dan aplikasi yang telah kami kerjakan untuk klien dari berbagai industri.",
};

import PortofolioCategories from "@/components/portofolio-categories";
import Hero from "./hero";
import Cta from "@/components/cta-alternative";
import { getPortfolio } from "@/lib/content";

export default async function Portofolios() {
  const items = await getPortfolio();

  return (
    <>
      <Hero />
      <PortofolioCategories items={items} />
      <Cta
        heading="Mulai Proyek Anda Bersama Dewa Kreatif"
        buttonText="Konsultasi Gratis"
        buttonLink="https://wa.me/6281938960028"
      />
    </>
  );
}
