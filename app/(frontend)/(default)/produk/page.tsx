export const metadata = {
  title: "Produk - Dewa Kreatif",
  description: "Daftar produk aplikasi dan website siap pakai dari Dewa Kreatif untuk menunjang bisnis Anda.",
};

import Hero from "./hero";
import ProductList from "@/components/product-list";
import Cta from "@/components/cta-alternative";

export default function Produk() {
  return (
    <>
      <Hero />
      <ProductList />
      <Cta
        heading="Kembangkan bisnis Anda bersama Dewa Kreatif"
        buttonText="Konsultasi Sekarang"
        buttonLink="https://wa.me/6281938960028"
      />
    </>
  );
}
