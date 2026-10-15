import AppCard from "@/components/app-card";
import { getProducts, WHATSAPP_URL } from "@/lib/content";

export default async function ProductList() {
  const products = await getProducts();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="space-y-10">
            <section>
              <div className="mb-5">
                <h2 className="truncate text-xl font-bold">Produk Unggulan</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {products.map((product) => (
                  <div key={product.id} className="group">
                    <AppCard
                      app={{ name: product.name, link: product.link || WHATSAPP_URL }}
                    >
                      {product.description}
                    </AppCard>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
