"use client";

import Link from "next/link";
import { Brand } from "@/src/types/catalog";
import styles from "./BrandShowcase.module.scss";

const PLACEHOLDER_LOGO = "/images/brands/placeholder.svg";

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className={styles.card}>
      <div className={styles.hangerTab} aria-hidden />
      <div className={styles.logoWrap}>
        <img
          src={brand.logo}
          alt={brand.title}
          className={styles.logo}
          onError={(e) => {
            const target = e.currentTarget;
            target.src = PLACEHOLDER_LOGO;
            target.onerror = null;
          }}
        />
      </div>
    </div>
  );
}

interface BrandShowcaseProps {
  brands: Brand[];
}

export default function BrandShowcase({ brands }: BrandShowcaseProps) {
  const brandsWithLogos = brands.filter((b) => b.logo.endsWith(".svg"));
  const duplicatedBrands = [...brandsWithLogos, ...brandsWithLogos];

  return (
    <section className={styles.section}>
      <div className={styles.scrollWrap}>
        <div className={styles.scrollTrack}>
          <div className={styles.cards}>
            {duplicatedBrands.map((brand, index) => (
              <BrandCard key={`a-${brand.id}-${index}`} brand={brand} />
            ))}
          </div>
          <div className={styles.cards} aria-hidden>
            {duplicatedBrands.map((brand, index) => (
              <BrandCard key={`b-${brand.id}-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Link href="#products" className={styles.shopAllButton}>
          Shop all cards →
        </Link>
      </div>
    </section>
  );
}
