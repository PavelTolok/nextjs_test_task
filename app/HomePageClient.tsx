"use client";

import { Product, Brand } from "@/src/types/catalog";
import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import BrandShowcase from "@/src/components/BrandShowcase/BrandShowcase";
import Products from "@/src/components/Products/Products";
import Contact from "@/src/components/Contact/Contact";
import Footer from "@/src/components/Footer/Footer";

interface HomePageClientProps {
  products: Product[];
  brands: Brand[];
}

export default function HomePageClient({
  products,
  brands,
}: HomePageClientProps) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandShowcase brands={brands} />
        <Products brands={brands} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
