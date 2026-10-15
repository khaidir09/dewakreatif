import type { CollectionConfig } from "payload";
import { categoryOptions, orderField, revalidatePaths } from "./shared";

export const Services: CollectionConfig = {
  slug: "services",
  labels: { singular: "Layanan", plural: "Layanan" },
  defaultSort: "order",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "order"],
  },
  access: {
    read: () => true,
  },
  hooks: revalidatePaths(["/service"]),
  fields: [
    {
      name: "name",
      label: "Nama layanan",
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
      name: "description",
      label: "Deskripsi",
      type: "textarea",
      required: true,
    },
    {
      name: "link",
      label: "Link",
      type: "text",
      admin: { description: "Opsional. Kosongkan untuk mengarah ke WhatsApp." },
    },
    orderField,
  ],
};
