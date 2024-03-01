import React from 'react';
import styles from './ChefCard.module.css'; // Import CSS module
import image from "../../Assets/chef3.jpg"
import image2 from "../../Assets/chef5.jpg"
import image3 from "../../Assets/che4.jpg"
import image4  from "../../Assets/chef6.jpg"
import image5  from "../../Assets/chef7.jpg"
import icon from "../../Assets/TikTok.svg"
const   ChefCard = () => {
  return (
    <div className={styles.team}>
      <h1>
        Top 5 Cooks 
      </h1>

      <div className={styles.teamBox}>
        <div className={styles.profile}>
          <img src={image3} alt="Chef 1" />

          <div className={styles.info}>
            <h2 className={styles.name}>layla hammoud</h2>
            <p className={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className={styles.teamIcon}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className={styles.profile}>
          <img src={image2}  alt="Chef 1" />

          <div className={styles.info}>
            <h2 className={styles.name}>souhair jammal</h2>
            <p className={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className={styles.teamIcon}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>


        <div className={styles.profile}>
          <img src={image} alt="Chef 1" />

          <div className={styles.info}>
            <h2 className={styles.name}>Marwa kaasha</h2>
            <p className={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className={styles.teamIcon}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className={styles.profile}>
          <img src={image5} alt="Chef 1" />

          <div className={styles.info}>
            <h2 className={styles.name}>yasmine saleh</h2>
            <p className={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className={styles.teamIcon}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <img src={image4} alt="Chef 1" />

          <div className={styles.info}>
            <h2 className={styles.name}>Ahmad Mourad </h2>
            <p className={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ChefCard;
