"use client";

import { useRef, useState, Fragment } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Portofolio01 from "@/public/images/portofolio1.jpg";
import Portofolio02 from "@/public/images/portofolio2.jpg";
import Portofolio03 from "@/public/images/portofolio3.jpg";
import Portofolio04 from "@/public/images/portofolio4.jpg";
import Portofolio05 from "@/public/images/portofolio5.jpg";
import Portofolio06 from "@/public/images/portofolio6.jpg";
import Portofolio07 from "@/public/images/portofolio7.jpg";

const portfolioItems = {
  0: [
    {
      image: Portofolio01,
      category: "Portal Berita",
      client: "Tirai Kota",
    },
    {
      image: Portofolio02,
      category: "E-Commerce",
      client: "Toko Maju Jaya",
    },
    {
      image: Portofolio03,
      category: "Company Profile",
      client: "PT. Sinar Mas",
    },
  ],
  1: [
    {
      image: Portofolio04,
      category: "Ojek Online",
      client: "GoCepat",
    },
    {
      image: Portofolio05,
      category: "Fintech",
      client: "DompetKu",
    },
  ],
  2: [
    {
      image: Portofolio06,
      category: "Logo Design",
      client: "Cafe Bunga",
    },
    {
      image: Portofolio07,
      category: "Social Media Kit",
      client: "Brand Baru",
    },
  ],
};

export default function PortofolioCategories() {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
            {/* Buttons */}
            <div className="flex justify-center">
              <TabList className="relative mb-8 inline-flex flex-wrap justify-center rounded-xl bg-white p-2 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] max-[480px]:max-w-[180px] min-[480px]:mb-12">
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${
                      selectedTab === 0
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 0 ? "text-gray-400" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                    </svg>
                    <span>Website</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${
                      selectedTab === 1
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 1 ? "text-gray-400" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Zm.132 7.204A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
                    </svg>
                    <span>Aplikasi Mobile</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${
                      selectedTab === 2
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 2 ? "text-gray-400" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M3 2a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0V2Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0V2Z" />
                    </svg>
                    <span>Desain Grafis</span>
                  </button>
                </Tab>
              </TabList>
            </div>

            {/* Tab panels */}
            <TabPanels className="relative flex flex-col items-center justify-center">
              <div className="relative flex flex-col w-full" ref={tabsRef}>
                {[0, 1, 2].map((tabIndex) => (
                  <TabPanel as={Fragment} static={true} key={tabIndex}>
                    <Transition
                      as="div"
                      show={selectedTab === tabIndex}
                      className={`w-full h-full transform transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300`}
                      unmount={false}
                      appear={true}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {portfolioItems[tabIndex as keyof typeof portfolioItems].map(
                          (item, index) => (
                            <article
                              key={index}
                              className={`relative flex justify-center flex-col rounded-2xl bg-white/70 p-8 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:odd:-rotate-1 md:even:rotate-1`}
                            >
                              <Image
                                className="mx-auto mb-3"
                                src={item.image}
                                alt={item.client}
                              />
                              <div className="text-center">
                                <div className="font-bold">{item.category}</div>
                                <div className="text-sm font-medium text-gray-500/80 transition hover:text-gray-500">
                                  {item.client}
                                </div>
                              </div>
                            </article>
                          )
                        )}
                      </div>
                    </Transition>
                  </TabPanel>
                ))}
              </div>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
