// Hanya untuk server component: membaca data lewat Payload Local API.
import { getPayload } from "payload";
import config from "@payload-config";
import type { Media, Portfolio } from "@/payload-types";
import type { Category } from "@/collections/shared";

export const WHATSAPP_URL = "https://wa.me/6281938960028";

export type PortfolioItem = {
  id: number;
  title: string;
  client: string;
  category: Category;
  link?: string | null;
  image: { url: string; width: number; height: number; alt: string };
};

function toPortfolioItem(doc: Portfolio): PortfolioItem {
  const image = doc.image as Media;
  return {
    id: doc.id,
    title: doc.title,
    client: doc.client,
    category: doc.category,
    link: doc.link,
    image: {
      url: image.url ?? "",
      width: image.width ?? 800,
      height: image.height ?? 600,
      alt: image.alt,
    },
  };
}

export async function getPortfolio({ homeOnly = false } = {}) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "portfolio",
    where: homeOnly ? { showOnHome: { equals: true } } : undefined,
    sort: "order",
    depth: 1,
    pagination: false,
  });
  return docs.map(toPortfolioItem);
}

export async function getProducts() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "products",
    sort: "order",
    pagination: false,
  });
  return docs;
}

export async function getServices() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "services",
    sort: "order",
    pagination: false,
  });
  return docs;
}
