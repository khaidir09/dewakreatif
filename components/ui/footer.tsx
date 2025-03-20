import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import Whatsapp from "@/public/images/Whatsaapp.svg";
import Instagram from "@/public/images/Instagram.svg";
import Facebook from "@/public/images/Facebook.svg";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-6">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              Jl. Negara Dipa RT.8 No.6 Kel. Sungai Malang Kec. Amuntai Tengah
              Kab. Hulu Sungai Utara Prov. Kalimantan Selatan (71418)
            </div>
            <div className="text-sm text-gray-600">
              &copy; 2024 Dewa Kreatif - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-medium">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/service"
                >
                  Desain Grafis
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/service"
                >
                  Website
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/service"
                >
                  Aplikasi
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-medium">Informasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Ketentuan Layanan
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-medium">Media Sosial</h3>
            <ul className="flex gap-3">
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="https://wa.me/6281938960028"
                  aria-label="Whatsapp"
                >
                  <Image src={Whatsapp} alt="Whatsapp" className="h-w-5 w-5" />
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="https://www.instagram.com/dewakreatif"
                  aria-label="Instagram"
                >
                  <Image
                    src={Instagram}
                    alt="Instagram"
                    className="h-w-5 w-5"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full -z-10" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Dewa'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Dewa'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px] will-change-[filter]"></div>
        </div>
      </div>
    </footer>
  );
}
