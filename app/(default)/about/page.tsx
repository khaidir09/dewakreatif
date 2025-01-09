export const metadata = {
  title: "Tentang Kami - Dewa Kreatif",
  description: "Page description",
};

import Hero from "./hero";
import AboutDetail from "./about-detail";
import Legal from "./legal";

export default function About() {
  return (
    <>
      <Hero />
      <AboutDetail />
      <Legal />
    </>
  );
}
