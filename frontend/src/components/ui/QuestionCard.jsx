import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = ({ id, question, answer, link, linkText, open, toggle, styles }) => {
  return (
    <div className={`${styles.questionCard} ${open ? styles.activeCard : ""}`}>
      <div className={styles.cardTop} onClick={() => toggle(id)}>
        <h1>{question}</h1>
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </div>

      <div className={styles.answerP}>
        <p>{answer}</p>
        {link && linkText && (
          <Link to={link} className={styles.exploreLink}>
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;