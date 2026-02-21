"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Shop", href: "#products" },
    { label: "Brands", href: "#" },
    { label: "Deals", href: "#" },
    { label: "Giftora Club", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">Giftora</Link>
          </div>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
            <ul className={styles.menu}>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.actions}>
            <button
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className={styles.cartButton} aria-label="Cart">
              <span className={styles.buttonText}>Cart</span>
              <Image
                src="/images/icons/cart.svg"
                alt=""
                width={20}
                height={20}
                className={styles.cartIcon}
              />
            </button>
            <button
              className={styles.accountButton}
              aria-label="Your Account"
            >
              <span className={styles.buttonText}>Your Account</span>
              <Image
                src="/images/icons/user.svg"
                alt=""
                width={20}
                height={20}
                className={styles.accountIcon}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
