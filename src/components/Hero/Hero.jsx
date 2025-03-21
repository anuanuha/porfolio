import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anu. H A</h1>
        <p className={styles.description}>
        I am a passionate frontend developer with 1.5 years of experience in building dynamic, responsive, and user-friendly web applications using Reactjs. 
        </p>
        <a href="mailto:anuanuha2001@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
