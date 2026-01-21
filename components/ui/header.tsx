import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  href="/"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Beranda
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/service"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Layanan
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/produk"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Produk
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/about"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/portofolio"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Portofolio
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="https://wa.me/6281938960028"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
