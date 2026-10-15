import type { CollectionConfig } from "payload";
import { orderField, revalidatePaths } from "./shared";

export const Products: CollectionConfig = {
  slug: "products",
  labels: { singular: "Produk", plural: "Produk" },
  defaultSort: "order",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "order"],
  },
  access: {
    read: () => true,
  },
  hooks: revalidatePaths(["/produk"]),
  fields: [
    {
      name: "name",
      label: "Nama produk",
      type: "text",
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
