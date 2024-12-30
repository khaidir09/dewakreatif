import PageIllustration from "@/components/page-illustration";

export default function Hero() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-10 text-center">
            <h1 className="mb-6 text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              Tentang Kami
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700">
                Kami membantu bisnis Anda untuk tumbuh dan berkembang dengan
                layanan desain grafis, website, dan aplikasi yang kami tawarkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
