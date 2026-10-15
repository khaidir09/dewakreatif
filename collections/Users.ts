import type { CollectionConfig } from "payload";

// Hanya satu admin: akun pertama dibuat lewat layar "create first user" di /admin
// (Payload mengabaikan access control untuk pendaftaran pertama). Setelah itu
// pembuatan dan penghapusan akun ditutup.
export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Admin", plural: "Admin" },
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => false,
    delete: () => false,
  },
  fields: [],
};
