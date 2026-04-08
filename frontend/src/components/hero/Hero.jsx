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
      <div className={styles.stackWrapper} data-aos="zoom-in" data-aos-delay="300">
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

      {/* ── Client Logos ── */}
      <div className="w-full bg-white relative z-10" data-aos="fade-up">
        <div className="w-[90%] lg:w-[68%] mx-auto pt-16 pb-12 md:pt-24 md:pb-16">
          {/* Use a 3-column grid on mobile so all 6 icons are guaranteed to stay on screen, and flex row on desktop */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap justify-items-center items-center gap-y-8 gap-x-4 sm:gap-12 md:gap-16 lg:justify-between opacity-100 grayscale-0 transition-all duration-300" data-aos="fade-up">
            {/* McDonalds */}
            <img 
              src="/images/national1.png" 
              alt="McDonald's" 
              className="h-8 sm:h-9 md:h-11 object-contain"
            />
            {/* Astruct */}
            <img 
              src="/images/astruct2.jpeg" 
              alt="Astruct" 
              className="h-8 sm:h-9 md:h-11 object-contain mt-2"
            />
            {/* Lacoste */}
            <img 
              src="/images/transity3.png " 
              alt="Lacoste" 
              className="h-9 sm:h-11 md:h-12 object-contain"
            />
            {/* Quiksilver */}
            <img 
              src="/images/quick4.png" 
              alt="Quiksilver" 
              className="h-8 sm:h-9 md:h-11 object-contain"
            />
            {/* Nvidia */}
            <img 
              src="/images/clean5.png" 
              alt="Nvidia" 
              className="h-5 sm:h-6 md:h-8 object-contain"
            />
          </div>
        </div>
      </div>

      <hr className="w-[90%] lg:w-[68%] mx-auto border-gray-200" />

    </div>
  )
}

export default Hero;