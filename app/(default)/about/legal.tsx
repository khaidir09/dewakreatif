import Image from "next/image";

import Surat from "@/public/images/legalitas.png";

export default function Legal() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Main content */}
      <div className="mx-auto max-w-3xl pb-12">
        {/* Section header */}
        <h1 className="text-center text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
          Legalitas
        </h1>
      </div>
      <div className="pb-12 md:pb-20">
        {/* Image */}
        <div className="relative">
          <Image className="mx-auto rounded-2xl" src={Surat} alt="Feature 01" />
        </div>
      </div>
    </div>
  );
}
