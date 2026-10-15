import path from "path";
import { fileURLToPath } from "url";
import type { CollectionConfig } from "payload";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Gambar", plural: "Gambar" },
  access: {
    read: () => true,
  },
  upload: {
    // File disimpan di folder lokal `media/` (di-gitignore) dan disajikan oleh
    // Payload lewat /api/media/file/<nama-file>. Butuh server dengan disk permanen.
    staticDir: path.resolve(dirname, "../media"),
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      label: "Teks alternatif",
      type: "text",
      required: true,
    },
  ],
};
