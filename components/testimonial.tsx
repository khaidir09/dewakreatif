import Image from "next/image";
import type { PortfolioItem } from "@/lib/content";

export default function Testimonial({
  testimonial,
  className,
}: {
  testimonial: PortfolioItem;
  className?: string;
}) {
  const caption = (
    <>
      <div className="font-bold">{testimonial.title}</div>
      <div className="text-sm font-medium text-gray-500/80 transition hover:text-gray-500">
        {testimonial.client}
      </div>
    </>
  );

  return (
    <article
      className={`relative flex justify-center flex-col rounded-2xl bg-white/70 p-8 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:odd:-rotate-1 md:even:rotate-1 ${className}`}
    >
      <Image
        className="mx-auto mb-3 rounded-xl border border-gray-200 shadow-sm"
        src={testimonial.image.url}
        width={testimonial.image.width}
        height={testimonial.image.height}
        alt={testimonial.image.alt}
      />
      <div className="text-center">
        {testimonial.link ? (
          <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
            {caption}
          </a>
        ) : (
          caption
        )}
      </div>
    </article>
  );
}
