"use client";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Giftora!</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Find your gift card:"
          />
          <button className={styles.searchButton}>Search →</button>
        </div>
      </div>
    </section>
  );
}
