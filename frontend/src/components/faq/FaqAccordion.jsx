import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import QuestionCard from "../ui/QuestionCard";
import styles from "./FaqAccordion.module.css"; // Import styles here
import { faqs } from "../../data/faqData";

const FaqAccordion = () => {
  const [showSelection, setShowSelection] = useState(null);
  const navigate = useNavigate();

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
                link={item.link}
                linkText={item.linkText}
                open={showSelection === item.id}
                toggle={toggleAnswer}
                styles={styles} // Pass the styles object down
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-12" data-aos="fade-up">
          <button
            onClick={() => navigate("/faqs")}
            className="
        inline-flex items-center justify-center
        border border-[#DF9931] text-[#DF9931]
        rounded-full
        px-4 py-2 sm:px-5 sm:py-2.5
        font-bold text-base sm:text-lg
        hover:bg-[#DF9931] hover:text-[#1B1B1B]
        transition duration-300 w-fit
      "
          >
            See all FAQs
            <IoIosArrowForward className="text-xl ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;