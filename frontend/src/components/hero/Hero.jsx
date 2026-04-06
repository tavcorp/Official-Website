import React, { useState } from 'react';
import { stackData } from "../../data/stackData";
import StackCard from '../ui/stackCard'; 
import styles from './hero.module.css';


const Hero = () => {
  // 1. Initialize state with your data
  const [cards, setCards] = useState(stackData);

  // 2. Logic to move the first card to the end of the array
  const handleCardClick = (index) => {
    if (index === 0) {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const firstCard = newCards.shift(); // Remove first
        newCards.push(firstCard);           // Add to end
        return newCards;
      });
    }
  };

  return (
    <div className={styles.Hero}>

      {/* STACK AREA */}
      <div className={styles.stackWrapper}>
        {cards.map((card, index) => {

          let style = {};

          if (index === 0) {
            // Front Card
            style = {
              top: '60px',
              transform: 'scale(1)',
              zIndex: 4,
              opacity: 1,
            };
          } else if (index === 1) {
            // Second Card
            style = {
              top: '30px',
              transform: 'scale(0.95)',
              zIndex: 3,
              opacity: 1,
            };
          } else if (index === 2) {
            // Third Card
            style = {
              top: '0px',
              transform: 'scale(0.90)',
              zIndex: 2,
              opacity: 1,
            };
          } else {
            // Cards way in the back
            style = {
              top: '0px',
              transform: 'scale(0.85)',
              zIndex: 1,
              opacity: 0, // Hide cards deeper than 3
            };
          }

          return (
            <StackCard
              key={`${card.desc}-${index}`}
              {...card}
              style={style}
              onClick={() => handleCardClick(index)}
              className={index === 0 ? styles.topCard : ''}
            />
          );
        })}
      </div>

      <hr className="" />

    </div>
  )
}

export default Hero;