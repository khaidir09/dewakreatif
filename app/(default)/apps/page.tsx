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
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
