import PageIllustration from "@/components/page-illustration";

export default function Hero() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-10 pt-32 md:pt-40">
          {/* Section header */}
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Produk Kami
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-700">
                Temukan solusi digital siap pakai yang telah kami kembangkan untuk mendukung efisiensi dan pertumbuhan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
