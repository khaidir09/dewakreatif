"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";

export default function About() {
  const [annual, setAnnual] = useState<boolean>(true);

  return (
    <section className="relative">
      <PageIllustration />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              Plans that match your needs
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-700">
                No matter how many team members you have - our pricing is
                simple, transparent and adapts to the size of your company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
