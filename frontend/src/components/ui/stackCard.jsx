import React from 'react';
import styles from './styleStack.module.css';
import { IoIosArrowForward } from "react-icons/io";

// Added props: style, onClick, className
const stackCard = ({ highlights, desc, image, style, onClick, className }) => {
  return (
    <div
      className={`${styles.cardContainer} ${className || ''}`}
      style={style}
      onClick={onClick}
    >
      <div className={styles.highlightWrapper}>
        {highlights.map((text, index) => (
          <span key={index} className={styles.tag}>
            {text}
          </span>
        ))}
      </div>

      <hr className='my-4 border-gray-300/30' /> {/* Made transparent */}

      <div className={styles.main}>
        {/* IMAGE */}
        <div className={styles.image}>
          <img src={image} alt="Stack Image" className={styles.imageStyle} />
        </div>

        {/* DESCRIPTION */}
        <div className={styles.description}>
          <p className={styles.descriptionText}>{desc}</p>
          <button className={styles.learnMoreButton}>
            More About Us <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  )
}

export default stackCard;