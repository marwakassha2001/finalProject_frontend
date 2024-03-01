import React from 'react';
import styles from './CookCard.module.css';
import image from "../../Assets/chef3.jpg"
import image2 from "../../Assets/chef5.jpg"
import image3 from "../../Assets/che4.jpg"
import image4  from "../../Assets/chef6.jpg"
import image5  from "../../Assets/chef7.jpg"

const CookCard = () => {
  return (
    <div className={styles.card}>
    <img src={image} alt="Image" />
    <div className={styles.details}>
      <h2>Stevie Blight</h2>
      <p>tripoli</p>
    </div>
    <p id={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>

  );
}

export default CookCard;