import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './hero1.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import Counter from '../ui/Counter';

const Hero1 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Hero1}>
      <div className={styles.container}>

        {/* --- TOP SECTION (Headline + Description) --- */}
        <div className={styles.topSection} data-aos="fade-up">
          <div className={styles.left} data-aos="fade-right" data-aos-delay="100">
            <span>Crafting,</span>
            <span>Brands and</span>
            <span 
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 600
              }}
              className="font-caveat"
            >
              Experiences
            </span>
          </div>

          <div className={styles.right} data-aos="fade-left" data-aos-delay="200">
            <p>Based in Africa, we are a premium multidisciplinary studio, combining design, development, marketing, and consultancy to help brands grow across industries and creative sectors.</p>
            <button type="button" onClick={() => navigate('/studio')}>
              Learn more <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* --- BOTTOM SECTION (Icons + Stats) --- */}
        <div className={styles.bottomSection} data-aos="fade-up" data-aos-delay="200">

          <div className={styles.socials} data-aos="fade-left" data-aos-delay="300">
            <a
              // href="https://www.linkedin.com/company/tavcorp/about/"
              href="https://www.linkedin.com/company/tavcorp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className={styles.linkedin}>
                <FiLinkedin color="#DF9931" strokeWidth="3" />
              </span>
            </a>

            <a
              href="https://x.com/tavcorp_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
            >
              <span className={styles.Twitter}>
                <FiTwitter color="#DF9931" strokeWidth="3" />
              </span>
            </a>

            <a
              href="https://www.instagram.com/tavcorp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className={styles.Instagram}>
                <IoLogoInstagram color="#DF9931" strokeWidth="5" />
              </span>
            </a>
          </div>

        <div className={styles.stats} data-aos="fade-up" data-aos-delay="400">
          <div className={styles.statItem} data-aos="fade-up" data-aos-delay="400">
            <span className={styles.statNumber}><Counter end={98} suffix="%" /></span>
            <p>CLIENTS SATISFIED AND REPEATING</p>
          </div>

          <div className={styles.statItem} data-aos="fade-up" data-aos-delay="500">
            <span className={styles.statNumber}><Counter end={106} suffix="+" /></span>
            <p>PROJECTS COMPLETED IN 11 COUNTRIES</p>
          </div>
        </div>

      </div>

    </div>
    </div >
  )
}

export default Hero1