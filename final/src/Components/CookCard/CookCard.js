import React from 'react';
import styles from './CookCard.module.css';
import image from "../../Assets/chef3.jpg"
import image2 from "../../Assets/chef5.jpg"
import image3 from "../../Assets/che4.jpg"
import image4  from "../../Assets/chef6.jpg"
import image5  from "../../Assets/chef7.jpg"
import { Link } from 'react-router-dom';

const CookCard = ({ id, firstName, lastName, image, city }) => {
  console.log(id)
  return (
    <Link
    style={{
      textDecoration: "none",
      color: "inherit",
      transition: "background-color 0.5s, opacity 0.3s",
      display: "flex",
      flexDirection: "column",
    }}
    to={`/profile/${id}`}
    >
    <div className={styles.card}>
      <img src={image} alt="Image" />
      <div className={styles.details}>
        <h2>{`${firstName} ${lastName}`}</h2>
        <p>{city}</p>
        <div className={styles.view}> View more  </div>
      </div>
    </div>
    </Link>
  );
}

export default CookCard;