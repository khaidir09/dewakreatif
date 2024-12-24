import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
	return (
		<section className="relative">
			<PageIllustration />
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				{/* Hero content */}
				<div className="pb-12 pt-32 md:pb-20 md:pt-40">
					{/* Section header */}
					<div className="pb-12 text-center md:pb-16">
						<h1
							className="mb-6 text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
							data-aos="zoom-y-out"
							data-aos-delay={150}
						>
							Digital Bersama, Maju Bersama
						</h1>
						<div className="mx-auto max-w-3xl">
							<p
								className="mb-8 text-lg text-gray-700"
								data-aos="zoom-y-out"
								data-aos-delay={300}
							>
								Dewa Kreatif hadir untuk #MembentukMasaDepanDigitalBersamaAnda{" "}
								<br />
								Tunjukkan eksistensi, kelola secara efisien, mudahkan layanan.
							</p>
							<div className="relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
								<div
									className="relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
									data-aos="zoom-y-out"
									data-aos-delay={450}
								>
									<a
										className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
										href="#0"
									>
										<span className="relative inline-flex items-center">
											Konsultasi Sekarang{" "}
											<span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
												-&gt;
											</span>
										</span>
									</a>
									<a
										className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
										href="#0"
									>
										Lihat Layanan
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* Hero image */}
					<div
						className="mx-auto max-w-3xl"
						data-aos="zoom-y-out"
						data-aos-delay={600}
					>
						<div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
							<div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
								<span className="text-[13px] font-medium text-white">
									dewakreatif.com
								</span>
							</div>
							{/* Icons/Visuals */}
							<div className="mb-8 flex justify-center space-x-4">
								{/* Graphic Design Icon */}
								<div className="flex flex-col items-center">
									<div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="#ffffff"
											className="icon icon-tabler icons-tabler-filled icon-tabler-artboard"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M15 7h-6a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-6a2 2 0 0 0 -2 -2z" />
											<path d="M4 7a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
											<path d="M4 15a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
											<path d="M8 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
											<path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
											<path d="M21 7a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
											<path d="M21 15a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
											<path d="M8 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
											<path d="M16 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
										</svg>
									</div>
									<span className="mt-2 text-sm text-gray-300">
										Desain Grafis
									</span>
								</div>

								{/* Website Icon */}
								<div className="flex flex-col items-center">
									<div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#ffffff"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="icon icon-tabler icons-tabler-outline icon-tabler-world-www"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
											<path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
											<path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
											<path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
											<path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
											<path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
											<path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
											<path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
											<path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
										</svg>
									</div>
									<span className="mt-2 text-sm text-gray-300">
										Website Responsif
									</span>
								</div>

								{/* Application Icon */}
								<div className="flex flex-col items-center">
									<div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#ffffff"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile-star"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M11 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5" />
											<path d="M11 4h2" />
											<path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
										</svg>
									</div>
									<span className="mt-2 text-sm text-gray-300">
										Aplikasi Kustom
									</span>
								</div>
							</div>
							<div className="font-mono text-sm text-gray-500 [&_span]:opacity-0">
								<span className="animate-[code-1_6s_infinite] text-gray-200">
									Desain Grafis
								</span>{" "}
								<span className="animate-[code-2_6s_infinite]">
									untuk menunjukkan eksistensi yang kuat dan menarik perhatian
									pelanggan.
								</span>
								<br />
								<br />
								<span className="animate-[code-3_6s_infinite] text-gray-200">
									Website responsif
								</span>{" "}
								<span className="animate-[code-4_6s_infinite]">
									untuk mengelola bisnis secara efisien dan memperluas jangkauan
									pasar.
								</span>
								<br />
								<br />
								<span className="animate-[code-5_6s_infinite] text-gray-200">
									Aplikasi kustom
								</span>{" "}
								<span className="animate-[code-6_6s_infinite]">
									untuk mempermudah layanan dan meningkatkan produktivitas
									bisnis Anda.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
