import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { id } from "@payloadcms/translations/languages/id";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Portfolio } from "./collections/Portfolio";
import { Products } from "./collections/Products";
import { Services } from "./collections/Services";
import { migrations } from "./migrations";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: dirname },
    meta: { titleSuffix: " - Admin Dewa Kreatif" },
  },
  collections: [Portfolio, Products, Services, Media, Users],
  i18n: {
    supportedLanguages: { id },
    fallbackLanguage: "id",
  },
  secret: process.env.PAYLOAD_SECRET || "",
  // Development: skema disinkronkan otomatis (push). Production: migration di
  // folder `migrations/` dijalankan otomatis saat server start.
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URI || "" },
    prodMigrations: migrations,
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
