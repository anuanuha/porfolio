import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              "I am Anu H A, a BE graduate from Acharya Institute of Technology, Bangalore, and A native of Arasikere Taluk, Hassan District, Karnataka. I have 1.5 years of experience as a Frontend Developer, specializing in building 
              responsive and dynamic web applications using React.js. With a strong focus on performance, usability, and modern UI development, I aim to create efficient and user-friendly web solutions. Additionally, I have completed a
               Full Stack Development course from JSpider, enhancing my expertise in frontend technology"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
