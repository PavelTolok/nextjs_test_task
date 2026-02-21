import { Catalog } from "@/src/types/catalog";
import catalogData from "@/src/data/catalog.json";
import HomePageClient from "./HomePageClient";

const catalog = catalogData as Catalog;

export default function Home() {
  return (
    <HomePageClient
      products={catalog.products}
      brands={catalog.brands}
    />
  );
}
