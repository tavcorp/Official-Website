import React from "react";

const QuestionCard = ({ id, question, answer, open, toggle, styles }) => {
  return (
    <div className={`${styles.questionCard} ${open ? styles.activeCard : ""}`}>
      <div className={styles.cardTop} onClick={() => toggle(id)}>
        <h1>{question}</h1>
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </div>

      <div className={styles.answerP}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QuestionCard;