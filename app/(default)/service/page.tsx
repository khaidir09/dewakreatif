export const metadata = {
  title: "Jasa Pembuatan Desain Grafis, Web dan Aplikasi Kostum - Dewa Kreatif",
  description: "Page description",
};

import Hero from "./hero";
import AppList from "@/components/app-list";
import Cta from "@/components/cta-alternative";

export default function Apps() {
  return (
    <>
      <Hero />
      <AppList />
      <Cta
        heading="Kembangkan bisnis Anda bersama Dewa Kreatif"
        buttonText="Konsultasi Sekarang"
        buttonLink="https://wa.me/6281938960028"
      />
    </>
  );
}
