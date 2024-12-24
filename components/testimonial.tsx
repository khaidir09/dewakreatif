import Image, { StaticImageData } from "next/image";

export default function Testimonial({
	testimonial,
	className,
}: {
	testimonial: {
		img: StaticImageData;
		name: string;
		username?: string;
	};
	className?: string;
}) {
	return (
		<article
			className={`relative flex justify-center flex-col rounded-2xl bg-white/70 p-8 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:odd:-rotate-1 md:even:rotate-1 ${className}`}
		>
			<Image
				className="mx-auto mb-3"
				src={testimonial.img}
				alt={testimonial.name}
			/>
			<div className="text-center">
				<div className="font-bold">{testimonial.name}</div>
				<div>
					<a
						className="text-sm font-medium text-gray-500/80 transition hover:text-gray-500"
						href="#0"
					>
						{testimonial.username}
					</a>
				</div>
			</div>
		</article>
	);
}
