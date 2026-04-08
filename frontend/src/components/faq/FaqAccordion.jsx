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
      <div className={styles.faqsWrapper} data-aos="fade-up">
        <h1 className={styles.faqHeaderText} data-aos="zoom-in">
          <span>Ask us</span> <span 
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 600,
              marginLeft: "0.5rem"
            }}
            className="text-[#DF9931]"
          >
            Anything
          </span>
        </h1>

        <div className={styles.faqList} data-aos="fade-up">
          {faqs.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 50}>
              <QuestionCard
                id={item.id}
                question={item.question}
                answer={item.answer}
                open={showSelection === item.id}
                toggle={toggleAnswer}
                styles={styles} // Pass the styles object down
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;