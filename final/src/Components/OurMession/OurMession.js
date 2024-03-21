import React from 'react'
import styles from './OurMession.module.css'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

export default function OurMession() {
  return (
    <div className={styles.missinSection}>
    <header className={styles.text}>
      <h1 className={styles.titlemession}>Our Services</h1>
    </header>
    <div className={styles.container}>
      <div className={styles.card}>
       <HourglassEmptyIcon/>
        <i className={`fas fa-poll-h ${styles.color}`} style={{fontSize: '70px'}}></i>
        <h3>Market Analysis</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse eligendi omnis qui officiis dolores minus consequatur praesentium modi blanditiis quibusdam quas optio amet ipsum ex eum voluptates, rerum alias!</p>
      </div>

      <div className={styles.card}>
        <i className={`fas fa-poll-h ${styles.color}`} style={{fontSize: '70px'}}></i>
        <h3>Market Analysis</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse eligendi omnis qui officiis dolores minus consequatur praesentium modi blanditiis quibusdam quas optio amet ipsum ex eum voluptates, rerum alias!</p>
      </div>

      <div className={styles.card}>
        <i className={`fas fa-poll-h ${styles.color}`} style={{fontSize: '70px'}}></i>
        <h3>Market Analysis</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse eligendi omnis qui officiis dolores minus consequatur praesentium modi blanditiis quibusdam quas optio amet ipsum ex eum voluptates, rerum alias!</p>
      </div>

    </div>
  </div>
  )
}
