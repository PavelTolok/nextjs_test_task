"use client";

import Image from "next/image";
import { Brand } from "@/src/types/catalog";
import styles from "./Products.module.scss";

const PRODUCT_BRAND_NAMES = ["Apple", "Amazon", "DAZN", "PlayStation"];

interface ProductsProps {
  brands: Brand[];
}

export default function Products({ brands }: ProductsProps) {
  const allowed = new Set(PRODUCT_BRAND_NAMES);
  const brandsWithLogos = brands.filter(
    (b) => b.logo.endsWith(".svg") && allowed.has(b.title)
  );
  const ordered = PRODUCT_BRAND_NAMES.map((name) =>
    brandsWithLogos.find((b) => b.title === name)
  ).filter(Boolean) as Brand[];

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Products</h2>
        <p className={styles.subtitle}>
          Explore top discounts on most wanted brand offers!
        </p>
        <div className={styles.grid}>
          {ordered.map((brand) => (
            <article key={brand.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{brand.title}</h3>
              <div className={styles.giftCard}>
                <div className={styles.hangerTab} aria-hidden />
                <div className={styles.logoWrap}>
                  <Image
                    src={brand.logo}
                    alt=""
                    width={120}
                    height={120}
                    className={styles.logo}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
