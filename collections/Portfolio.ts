import type { CollectionConfig } from "payload";
import { categoryOptions, orderField, revalidatePaths } from "./shared";

export const Portfolio: CollectionConfig = {
  slug: "portfolio",
  labels: { singular: "Portofolio", plural: "Portofolio" },
  defaultSort: "order",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "client", "category", "showOnHome", "order"],
  },
  access: {
    read: () => true,
  },
  hooks: revalidatePaths(["/", "/portofolio"]),
  fields: [
    {
      name: "title",
      label: "Jenis proyek",
      type: "text",
      required: true,
      admin: { description: "Contoh: Website Sekolah" },
    },
    {
      name: "client",
      label: "Klien",
      type: "text",
      required: true,
    },
    {
      name: "category",
      label: "Kategori",
      type: "select",
      options: categoryOptions,
      required: true,
    },
    {
      name: "image",
      label: "Gambar",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "link",
      label: "Link proyek",
      type: "text",
      admin: { description: "Opsional, URL situs klien." },
    },
    {
      name: "showOnHome",
      label: "Tampilkan di beranda",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar" },
    },
    orderField,
  ],
};
