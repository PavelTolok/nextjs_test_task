"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 500);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact & Assistance</h2>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <Image
              src="/images/cart/cart.svg"
              alt=""
              width={400}
              height={400}
              className={styles.illustrationImage}
            />
          </div>
          <div className={styles.formWrap}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formHeading}>
                  Issues with order or need assistance?
                </h3>
                <p className={styles.formDescription}>
                  Complete the form, and our team will reach out to you. Expect a
                  response within 24 hours.
                </p>
                <div className={styles.formGroup}>
                  <div
                    className={`${styles.fieldWrap} ${
                      formData.name ? styles.filled : ""
                    }`}
                  >
                    <label htmlFor="name" className={styles.floatingLabel}>
                      Your name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${styles.input} ${
                        errors.name ? styles.inputError : ""
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <span className={styles.error}>{errors.name}</span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <div
                    className={`${styles.fieldWrap} ${
                      formData.email ? styles.filled : ""
                    }`}
                  >
                    <label htmlFor="email" className={styles.floatingLabel}>
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${styles.input} ${
                        errors.email ? styles.inputError : ""
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <div
                    className={`${styles.fieldWrap} ${
                      formData.message ? styles.filled : ""
                    }`}
                  >
                    <label htmlFor="message" className={styles.floatingLabel}>
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={1}
                      className={`${styles.textarea} ${
                        errors.message ? styles.textareaError : ""
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <span className={styles.error}>{errors.message}</span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <button type="submit" className={styles.submitButton}>
                    Submit →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
