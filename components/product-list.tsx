import AppCard from "@/components/app-card";

export default function ProductList() {
  const products = [
    {
      name: "Aplikasi Kasir UMKM",
      description:
        "Solusi kasir digital yang mudah digunakan untuk UMKM. Kelola penjualan, stok, dan laporan keuangan dalam satu aplikasi.",
      link: "#0",
    },
    {
      name: "POS Offline",
      description:
        "Aplikasi Point of Sale handal yang dapat beroperasi tanpa koneksi internet. Cocok untuk toko ritel dan usaha di lokasi dengan sinyal terbatas.",
      link: "#0",
    },
    {
      name: "Aplikasi Laundry",
      description:
        "Sistem manajemen laundry lengkap dengan fitur pelacakan pesanan, notifikasi pelanggan, dan pengelolaan kasir khusus bisnis laundry.",
      link: "#0",
    },
  ];

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
                {products.map((product, index) => (
                  <div key={index} className="group">
                    <AppCard app={product}>{product.description}</AppCard>
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
