"use client";

import { useRef, useState, Fragment } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Highlighter, { HighlighterItem } from "./highlighter";

import FeatureImg01 from "@/public/images/feature-image-01.png";
import FeatureImg02 from "@/public/images/feature-image-02.png";
import FeatureImg03 from "@/public/images/feature-image-03.png";

export default function BusinessCategories() {
	const tabsRef = useRef<HTMLDivElement>(null);
	const [selectedTab, setSelectedTab] = useState<number>(0);

	return (
		<section>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div>
					{/* Section header */}
					<div className="mx-auto max-w-3xl pb-16 text-center">
						<h2 className="mb-4 text-3xl font-bold md:text-4xl">
							Layanan Solusi Digital Kami
						</h2>
						<p className="text-lg text-gray-700">
							Dewa Kreatif menyediakan layanan profesional untuk membantu bisnis
							berkembang dan layanan publik lebih efisien. Pilih solusi yang
							tepat untuk Anda dan lihat bisnis semakin maju dengan
							digitalisasi.
						</p>
					</div>
					<div className="max-w-6xl mx-auto px-4 sm:px-6">
						{/* Highlighted boxes */}
						<div className="relative pb-12 md:pb-20">
							{/* Grid */}
							<div className="grid md:grid-cols-12 gap-6 group">
								{/* Box #1 */}
								<div className="md:col-span-12" data-aos="fade-down">
									<div className="relative h-full bg-white rounded-2xl z-20 overflow-hidden">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between">
											{/* Text */}
											<div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
												<div className="mb-5">
													<div>
														<h3 className="inline-flex text-xl font-bold pb-1">
															Desain Grafis
														</h3>
														<p>
															Kami membantu Anda menciptakan identitas visual
															yang menarik dan profesional untuk bisnis Anda.
														</p>
													</div>
												</div>
												<div>
													<a
														className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
														href="#0"
													>
														<span className="relative inline-flex items-center">
															Lihat Detail{" "}
															<span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
																-&gt;
															</span>
														</span>
													</a>
												</div>
											</div>
											{/* Image */}
											<div className="relative w-full h-64 md:h-auto overflow-hidden">
												<Image
													className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0{md}transla{}-x-0"
													src={FeatureImg01}
													width="504"
													height="400"
													alt="Feature 01"
												/>
											</div>
										</div>
									</div>
								</div>
								{/* Box #2 */}
								<div className="md:col-span-7" data-aos="fade-down">
									<div className="relative h-full bg-white rounded-2xl z-20 overflow-hidden">
										<div className="flex flex-col">
											{/* Text */}
											<div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
												<div>
													<h3 className="inline-flex text-xl font-bold pb-1">
														Website
													</h3>
													<p>
														Bangun website responsif dan fungsional yang
														mendukung perkembangan bisnis Anda di era digital.
													</p>
												</div>
											</div>
											{/* Image */}
											<div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
												<Image
													className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
													src={FeatureImg02}
													width={536}
													height={230}
													alt="Feature 02"
												/>
											</div>
										</div>
									</div>
								</div>
								{/* Box #3 */}
								<div className="md:col-span-5" data-aos="fade-down">
									<div className="relative h-full bg-white rounded-2xl z-20 overflow-hidden">
										<div className="flex flex-col">
											{/* Text */}
											<div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
												<div>
													<h3 className="inline-flex text-xl font-bold pb-1">
														Aplikasi
													</h3>
													<p>
														Solusi aplikasi custom yang disesuaikan dengan
														kebutuhan bisnis Anda.
													</p>
												</div>
											</div>
											{/* Image */}
											<div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8 mb-6">
												<Image
													className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
													src={FeatureImg03}
													alt="Feature 03"
													width={230}
													height={230}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
