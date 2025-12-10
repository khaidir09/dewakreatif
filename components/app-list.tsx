import AppCard from "@/components/app-card";

export default function AppList() {
  const apps01 = [
    {
      name: "Personal Branding",
      description:
        "Tampilkan identitas unik Anda dengan website personal branding yang profesional. Cocok untuk portofolio, blog, atau profil pribadi.",
      link: "#0",
    },
    {
      name: "Company Profile",
      description:
        "Perkenalkan perusahaan Anda dengan website company profile yang elegan. Menyajikan informasi bisnis secara lengkap dan menarik.",
      link: "#0",
    },
    {
      name: "Landing Page",
      description:
        "Optimalkan konversi dengan landing page yang menarik dan fokus. Ideal untuk kampanye produk, layanan, atau event tertentu.",
      link: "#0",
    },
    {
      name: "Toko Online",
      description:
        "Bangun toko online yang responsif dan mudah dikelola. Dukung penjualan produk Anda dengan fitur lengkap dan aman.",
      link: "#0",
    },
    {
      name: "Layanan Jasa",
      description:
        "Promosikan layanan jasa Anda dengan website yang informatif dan profesional. Berikan kemudahan bagi klien untuk menghubungi Anda.",
      link: "#0",
    },
    {
      name: "Pendidikan",
      description:
        "Sediakan platform edukasi online dengan website yang interaktif. Mendukung pembelajaran daring dan manajemen konten pendidikan.",
      link: "#0",
    },
  ];

  const apps02 = [
    {
      name: "Logo",
      description:
        "Ciptakan logo unik dan mudah diingat yang mencerminkan identitas bisnis Anda. Cocok untuk brand baru atau rebranding.",
      link: "#0",
    },
    {
      name: "Brand Identity",
      description:
        "Bangun identitas visual yang konsisten untuk perusahaan Anda. Mulai dari kartu nama, kop surat, hingga panduan branding.",
      link: "#0",
    },
    {
      name: "Brosur",
      description:
        "Desain brosur menarik yang efektif menyampaikan informasi produk atau layanan. Cocok untuk promosi cetak maupun digital.",
      link: "#0",
    },
    {
      name: "Kemasan Produk",
      description:
        "Tingkatkan daya tarik produk dengan desain kemasan yang kreatif, menarik perhatian dan membangun kepercayaan pelanggan.",
      link: "#0",
    },
    {
      name: "Ilustrasi",
      description:
        "Sajikan konten visual yang unik dan kreatif dengan ilustrasi custom. Cocok untuk media cetak, digital, atau proyek khusus.",
      link: "#0",
    },
    {
      name: "Media Sosial",
      description:
        "Optimalkan media sosial Anda dengan desain konten yang konsisten dan eye-catching. Tingkatkan engagement dan brand awareness.",
      link: "#0",
    },
    {
      name: "Merchandise",
      description:
        "Desain merchandise eksklusif untuk memperkuat branding bisnis Anda. Mulai dari kaos, mug, hingga aksesoris custom.",
      link: "#0",
    },
  ];

  const apps03 = [
    {
      name: "Sistem Kasir",
      description:
        "Kelola transaksi dengan mudah menggunakan aplikasi kasir modern. Mendukung pembayaran cepat, manajemen stok, dan laporan penjualan.",
      link: "#0",
    },
    {
      name: "Pesan Antar",
      description:
        "Tingkatkan layanan pesan antar dengan aplikasi custom yang terintegrasi. Memudahkan pelanggan memesan dan melacak pengiriman.",
      link: "#0",
    },
    {
      name: "HR Management System",
      description:
        "Otomatiskan manajemen SDM dengan aplikasi HR yang efisien. Mulai dari absensi, payroll, hingga evaluasi kinerja karyawan.",
      link: "#0",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Categories */}
          <div className="space-y-10">
            {/* Section #1 */}
            <section>
              <div className="mb-5">
                <h2 className="truncate text-xl font-bold">Website</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {apps01.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>

            {/* Section #2 */}
            <section>
              <div className="mb-5">
                <h2 className="truncate text-xl font-bold">Aplikasi</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {apps03.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>

            {/* Section #3 */}
            <section>
              <div className="mb-5">
                <h2 className="truncate text-xl font-bold">Desain Grafis</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {apps02.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
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
