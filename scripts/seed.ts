// Mengisi database dengan konten yang sebelumnya di-hard-code di komponen.
// Jalankan: npm run seed. Koleksi yang sudah berisi data dilewati, jadi aman
// dijalankan ulang.
import path from "path";
import { fileURLToPath } from "url";
import { getPayload, type CollectionSlug } from "payload";
import config from "../payload.config";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(dirname, "../public/images");
const context = { disableRevalidate: true };

const portfolio = [
  { file: "web-01.jpg", title: "Website Sekolah", client: "SMK Negeri 1 Amuntai", category: "website", showOnHome: false },
  { file: "web-02.jpg", title: "Website Manajemen Toko Servis", client: "CV Maju Jaya Bahagia (SarabaBisa)", category: "website", link: "https://saraba-bisa.com/", showOnHome: true },
  { file: "web-03.jpg", title: "Website SPMB Sekolah", client: "SMK Negeri 1 Amuntai", category: "website", link: "https://ppdb.smkn1amuntai.sch.id/", showOnHome: true },
  { file: "web-04.jpg", title: "Portal Berita Online", client: "Tirai Kota", category: "website", link: "https://tiraikota.com/", showOnHome: true },
  { file: "web-05.jpg", title: "Website Profil Lembaga", client: "KONI HSU", category: "website", showOnHome: false },
  { file: "web-06.jpg", title: "Website Pemerintahan", client: "Setda Kabupaten HSU", category: "website", link: "https://sepeda-hsu.com/", showOnHome: true },
  { file: "web-07.jpg", title: "Website Manajemen Tailor Shop", client: "Mustami Rezki Tailor Shop", category: "website", link: "https://mustamirezki.biz.id/", showOnHome: true },
  { file: "app-01.jpg", title: "Sistem Informasi Terpadu", client: "KEMENAG HSU", category: "aplikasi", showOnHome: true },
  { file: "portofolio1.jpg", title: "Brosur", client: "SMK Negeri 1 Amuntai", category: "desain-grafis", link: "https://www.instagram.com/p/CaRnHk9PxIP/", showOnHome: true },
] as const;

const products = [
  { name: "Aplikasi Kasir UMKM", description: "Solusi kasir digital yang mudah digunakan untuk UMKM. Kelola penjualan, stok, dan laporan keuangan dalam satu aplikasi." },
  { name: "POS Offline", description: "Aplikasi Point of Sale handal yang dapat beroperasi tanpa koneksi internet. Cocok untuk toko ritel dan usaha di lokasi dengan sinyal terbatas." },
  { name: "Aplikasi Laundry", description: "Sistem manajemen laundry lengkap dengan fitur pelacakan pesanan, notifikasi pelanggan, dan pengelolaan kasir khusus bisnis laundry." },
];

const services = [
  { category: "website", name: "Personal Branding", description: "Tampilkan identitas unik Anda dengan website personal branding yang profesional. Cocok untuk portofolio, blog, atau profil pribadi." },
  { category: "website", name: "Company Profile", description: "Perkenalkan perusahaan Anda dengan website company profile yang elegan. Menyajikan informasi bisnis secara lengkap dan menarik." },
  { category: "website", name: "Landing Page", description: "Optimalkan konversi dengan landing page yang menarik dan fokus. Ideal untuk kampanye produk, layanan, atau event tertentu." },
  { category: "website", name: "Toko Online", description: "Bangun toko online yang responsif dan mudah dikelola. Dukung penjualan produk Anda dengan fitur lengkap dan aman." },
  { category: "website", name: "Layanan Jasa", description: "Promosikan layanan jasa Anda dengan website yang informatif dan profesional. Berikan kemudahan bagi klien untuk menghubungi Anda." },
  { category: "website", name: "Pendidikan", description: "Sediakan platform edukasi online dengan website yang interaktif. Mendukung pembelajaran daring dan manajemen konten pendidikan." },
  { category: "aplikasi", name: "Sistem Kasir", description: "Kelola transaksi dengan mudah menggunakan aplikasi kasir modern. Mendukung pembayaran cepat, manajemen stok, dan laporan penjualan." },
  { category: "aplikasi", name: "Pesan Antar", description: "Tingkatkan layanan pesan antar dengan aplikasi custom yang terintegrasi. Memudahkan pelanggan memesan dan melacak pengiriman." },
  { category: "aplikasi", name: "HR Management System", description: "Otomatiskan manajemen SDM dengan aplikasi HR yang efisien. Mulai dari absensi, payroll, hingga evaluasi kinerja karyawan." },
  { category: "desain-grafis", name: "Logo", description: "Ciptakan logo unik dan mudah diingat yang mencerminkan identitas bisnis Anda. Cocok untuk brand baru atau rebranding." },
  { category: "desain-grafis", name: "Brand Identity", description: "Bangun identitas visual yang konsisten untuk perusahaan Anda. Mulai dari kartu nama, kop surat, hingga panduan branding." },
  { category: "desain-grafis", name: "Brosur", description: "Desain brosur menarik yang efektif menyampaikan informasi produk atau layanan. Cocok untuk promosi cetak maupun digital." },
  { category: "desain-grafis", name: "Kemasan Produk", description: "Tingkatkan daya tarik produk dengan desain kemasan yang kreatif, menarik perhatian dan membangun kepercayaan pelanggan." },
  { category: "desain-grafis", name: "Ilustrasi", description: "Sajikan konten visual yang unik dan kreatif dengan ilustrasi custom. Cocok untuk media cetak, digital, atau proyek khusus." },
  { category: "desain-grafis", name: "Media Sosial", description: "Optimalkan media sosial Anda dengan desain konten yang konsisten dan eye-catching. Tingkatkan engagement dan brand awareness." },
  { category: "desain-grafis", name: "Merchandise", description: "Desain merchandise eksklusif untuk memperkuat branding bisnis Anda. Mulai dari kaos, mug, hingga aksesoris custom." },
] as const;

const payload = await getPayload({ config });

async function isEmpty(collection: CollectionSlug) {
  const { totalDocs } = await payload.count({ collection });
  if (totalDocs > 0) payload.logger.info(`Lewati "${collection}": sudah berisi ${totalDocs} data.`);
  return totalDocs === 0;
}

if (await isEmpty("portfolio")) {
  for (const [index, item] of portfolio.entries()) {
    const image = await payload.create({
      collection: "media",
      data: { alt: `${item.title} - ${item.client}` },
      filePath: path.join(imagesDir, item.file),
      context,
    });
    await payload.create({
      collection: "portfolio",
      data: {
        title: item.title,
        client: item.client,
        category: item.category,
        image: image.id,
        link: "link" in item ? item.link : undefined,
        showOnHome: item.showOnHome,
        order: index,
      },
      context,
    });
  }
  payload.logger.info(`Portofolio: ${portfolio.length} data ditambahkan.`);
}

if (await isEmpty("products")) {
  for (const [index, item] of products.entries()) {
    await payload.create({ collection: "products", data: { ...item, order: index }, context });
  }
  payload.logger.info(`Produk: ${products.length} data ditambahkan.`);
}

if (await isEmpty("services")) {
  for (const [index, item] of services.entries()) {
    await payload.create({ collection: "services", data: { ...item, order: index }, context });
  }
  payload.logger.info(`Layanan: ${services.length} data ditambahkan.`);
}

process.exit(0);
