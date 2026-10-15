import PageIllustration from "@/components/page-illustration";

export default function Hero() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pt-32 md:pt-40">
          {/* Section header */}
          <div className="text-center">
            <h1 className="mb-6 text-center text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              Portofolio Kami
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700">
                Berikut adalah beberapa hasil karya dan proyek yang telah kami
                selesaikan untuk klien kami. Kami bangga dapat berbagi
                portofolio kami yang mencerminkan kualitas, kreativitas, dan
                dedikasi kami dalam setiap proyek yang kami tangani.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
