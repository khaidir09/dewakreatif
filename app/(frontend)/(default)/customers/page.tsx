export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

import Hero from "./hero";
import Cta from "@/components/cta-alternative";

export default function Customers() {
  return (
    <>
      <Hero />

      <Cta
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
