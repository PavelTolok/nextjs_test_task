"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const quickLinksLeft = [
  { label: "Shop", href: "#" },
  { label: "Deals", href: "#" },
  { label: "Brands", href: "#" },
  { label: "Ways to buy", href: "#" },
  { label: "Giftora Club", href: "#" },
];

const quickLinksRight = [
  { label: "Gift Card Tips", href: "#" },
  { label: "About Giftora", href: "#" },
  { label: "Assistance", href: "#" },
  { label: "Account", href: "#" },
];

const policyLinks = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Gift Card Terms", href: "#" },
  { label: "Return Policy", href: "#" },
];

const socialIcons = [
  { name: "Instagram", src: "/images/media/instagram.svg", href: "#" },
  { name: "LinkedIn", src: "/images/media/linkedin.svg", href: "#" },
  { name: "TikTok", src: "/images/media/tiktok.svg", href: "#" },
  { name: "X", src: "/images/media/x.svg", href: "#" },
];

const COPYRIGHT =
  "© 2026 Giftora | All Rights Reserved | Authorized Reseller of Premium Gift Cards.";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Giftora</span>
        </div>
        <div className={styles.quickLinks}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <div className={styles.quickLinksGrid}>
            <ul className={styles.linkList}>
              {quickLinksLeft.map((item, i) => (
                <li key={i}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <ul className={styles.linkList}>
              {quickLinksRight.map((item, i) => (
                <li key={i}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.policies}>
          <h3 className={styles.columnTitle}>Policies</h3>
          <ul className={styles.linkList}>
            {policyLinks.map((item, i) => (
              <li key={i}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.socialBlock}>
          <h3 className={styles.columnTitle}>Follow us on social media:</h3>
          <div className={styles.socialIcons}>
            {socialIcons.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={styles.socialLink}
                aria-label={item.name}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.copyrightWrap}>
          <p className={styles.copyright}>{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}
