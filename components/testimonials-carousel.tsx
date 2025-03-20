import Testimonial from "@/components/testimonial";
import TestimonialImg01 from "@/public/images/portofolio1.jpg";
import TestimonialImg02 from "@/public/images/portofolio2.jpg";
import TestimonialImg03 from "@/public/images/portofolio3.jpg";
import TestimonialImg04 from "@/public/images/portofolio4.jpg";
import TestimonialImg05 from "@/public/images/portofolio5.jpg";
import TestimonialImg06 from "@/public/images/portofolio6.jpg";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: TestimonialImg06,
      name: "Website Portal Berita",
      username: "Tirai Kota",
      link: "https://tiraikota.com/",
    },
    {
      img: TestimonialImg05,
      name: "Website PPDB Sekolah",
      username: "SMK Negeri 1 Amuntai",
      link: "https://ppdb.smkn1amuntai.sch.id/",
    },
    {
      img: TestimonialImg04,
      name: "Website Manajamen Toko Servis",
      username: "CV. Maju Jaya Bahagia",
      link: "https://saraba-bisa.com/",
    },
    {
      img: TestimonialImg03,
      name: "Aplikasi Android",
      username: "KEMENAG HSU",
      link: "#",
    },
    {
      img: TestimonialImg02,
      name: "Website Sekolah",
      username: "SMK Negeri 1 Amuntai",
      link: "https://smkn1amuntai.sch.id/",
    },
    {
      img: TestimonialImg01,
      name: "Brosur PPDB",
      username: "SMK Negeri 1 Amuntai",
      link: "https://www.instagram.com/p/CaRnHk9PxIP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Portofolio Kami</h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] justify-center group-hover:[animation-play-state:paused] [&>*]:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                ></Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] justify-center group-hover:[animation-play-state:paused] [&>*]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                ></Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
