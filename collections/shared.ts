import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, Field } from "payload";
import { revalidatePath } from "next/cache";

// Kategori dipakai bersama oleh Portofolio dan Layanan.
export const categoryOptions = [
  { label: "Website", value: "website" },
  { label: "Aplikasi", value: "aplikasi" },
  { label: "Desain Grafis", value: "desain-grafis" },
];

export type Category = "website" | "aplikasi" | "desain-grafis";

export const orderField: Field = {
  name: "order",
  label: "Urutan",
  type: "number",
  defaultValue: 0,
  admin: {
    position: "sidebar",
    description: "Angka lebih kecil tampil lebih dulu.",
  },
};

// Halaman publik dirender statis; hook ini memperbarui halaman terkait setiap
// kali data diubah dari admin. Seed script mengirim `disableRevalidate` karena
// berjalan di luar server Next.js.
export function revalidatePaths(paths: string[]): {
  afterChange: CollectionAfterChangeHook[];
  afterDelete: CollectionAfterDeleteHook[];
} {
  const revalidate = (context: Record<string, unknown>) => {
    if (context.disableRevalidate) return;
    paths.forEach((p) => revalidatePath(p));
  };

  return {
    afterChange: [({ doc, context }) => (revalidate(context), doc)],
    afterDelete: [({ doc, context }) => (revalidate(context), doc)],
  };
}
