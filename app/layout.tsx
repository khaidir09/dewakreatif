import "./css/style.css";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Dewa Kreatif - Jasa Desain Grafis, Web dan Aplikasi Kostum",
  description:
    "Dewa Kreatif hadir untuk mendukung perkembangan dan membantu adaptasi para pelaku bisnis / UMKM / Pelayanan Publik agar tidak tertinggal dalam dunia digital yang terus berkembang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Analytics />
          <SpeedInsights />
          {/* Script 1: Load Source */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-Q41K7N482K`}
            strategy="afterInteractive"
          />

          {/* Script 2: Config */}
          <Script id="google-analytics" strategy="afterInteractive">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Q41K7N482K');
      `}
          </Script>
        </div>
      </body>
    </html>
  );
}
