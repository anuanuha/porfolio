import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyImages}>
                <img
                  src={getImageUrl(historyItem.companyimageSrc)}
                  alt="Company Logo"
                  className={styles.companyLogo}
                />
              </div>
              <div className={styles.historyItemDetails}>
                <h3>
                  {historyItem.role}, <a href={historyItem.company_url} target="_blank" rel="noopener noreferrer">{historyItem.organisation}</a>
                </h3>
                <p>  {historyItem.startDate} - {historyItem.endDate === "Present" ? "Currently Working" : historyItem.endDate}</p>
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
                <p>
                  Project_url:{" "}
                  <a href={historyItem.project_url} target="_blank" rel="noopener noreferrer">
                    {historyItem.project_url}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
