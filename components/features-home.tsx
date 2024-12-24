import Image from "next/image";
import FeatureImg01 from "@/public/images/features-02-overlay-01.png";
import FeatureImg02 from "@/public/images/features-02-overlay-02.png";
import FeatureImg03 from "@/public/images/features-02-overlay-03.png";

export default function FeaturesHome() {
	return (
		<section className="relative">
			<div
				className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
				aria-hidden="true"
			>
				<div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
			</div>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Section header */}
					<div className="mx-auto max-w-3xl pb-24 text-center md:pb-28">
						<h2 className="mb-4 text-3xl font-bold md:text-4xl">
							Identify value much faster
						</h2>
						<p className="text-lg text-gray-700">
							Use powerful yet familiar tools to create your ultimate website
							design. Import your files everywhere, including Figma.
						</p>
					</div>
					{/* Illustration */}
					<div
						className="group relative mx-auto mb-32 flex w-full max-w-[500px] justify-center md:mb-36"
						data-aos="zoom-y-out"
					>
						<div className="absolute bottom-0 -z-10" aria-hidden="true">
							<div className="h-80 w-80 rounded-full bg-blue-500 opacity-70 blur-[160px] will-change-[filter]" />
						</div>
						<div className="aspect-video w-full -rotate-1 rounded-2xl bg-gray-900 px-5 py-3 shadow-xl transition duration-300 group-hover:-rotate-0">
							<div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
								<span className="text-[13px] font-medium text-white">
									AI Project
								</span>
							</div>
							<div className="font-mono text-sm text-gray-500 blur-sm will-change-[filter] transition duration-300 group-hover:blur-none [&_span]:opacity-0">
								<span className="animate-[code-1_10s_infinite] text-gray-200">
									npm login
								</span>{" "}
								<span className="animate-[code-2_10s_infinite]">
									--registry=https://npm.pkg.github.com
								</span>
								<br />
								<span className="animate-[code-3_10s_infinite]">
									--scope=@phanatic
								</span>{" "}
								<span className="animate-[code-4_10s_infinite]">
									Successfully logged-in.
								</span>
								<br />
								<br />
								<span className="animate-[code-5_10s_infinite] text-gray-200">
									npm publish
								</span>
								<br />
								<span className="animate-[code-6_10s_infinite]">
									Package published.
								</span>
							</div>
						</div>
						<div className="absolute top-16">
							<div className="pointer-events-none translate-y-2 transition delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-0">
								<Image
									className="-rotate-1"
									src={FeatureImg03}
									width={500}
									height={91}
									alt="Overlay 03"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
