import React, { useState } from "react";
import QuestionCard from "../ui/QuestionCard";
import styles from "./FaqAccordion.module.css"; // Import styles here
import { faqs } from "../../data/faqData";

const FaqAccordion = () => {
  const [showSelection, setShowSelection] = useState(null);

  const toggleAnswer = (id) => {
    setShowSelection((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.faqsContainer}>
      <div className={styles.faqsWrapper}>
        <h1 className={styles.faqHeaderText}>
          Ask us <span className="font-caveat text-yellow-400">
            Anything
          </span>
        </h1>

        <div className={styles.faqList}>
          {faqs.map((item) => (
            <QuestionCard
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              open={showSelection === item.id}
              toggle={toggleAnswer}
              styles={styles} // Pass the styles object down
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;