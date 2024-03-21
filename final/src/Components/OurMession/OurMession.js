import React from 'react'
import styles from './OurMession.module.css'
import time from '../../Assets/Historical.svg'
import power from '../../Assets/Muscle.svg'
import colab from '../../Assets/Handshake.svg'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

export default function OurMession() {
  return (
    <div className={styles.missinSection}>
    <header className={styles.text}>
      <h1 className={styles.titlemession}>Our Mission</h1>
    </header>
    <div className={styles.container}>
      <div className={styles.card}>
       <img src={time}/>
        <h3>Saving Time</h3>
        <p>Introducing our time-saving app, simplifying cooking with easy recipes and ingredient delivery. Say goodbye to confusion and hello to chef-quality meals at home. Empowering you to make the most of your time, enjoy stress-free cooking like never before.</p>
      </div>

      <div className={styles.card}>
      <img src={colab}/>
        <h3>Collaboration</h3>
        <p>In our community, we foster a safe environment for skilled cooks to grow their businesses while providing busy individuals with safe and delicious food options. Through collaboration, we create a win-win situation where cooks thrive and customers enjoy convenient access to quality meals.</p>
      </div>

      <div className={styles.card}>
      <img src={power}/>
        <h3>Empower Skilled Individuals</h3>
        <p>Empowering skilled individuals to reach their full potential, fostering innovation and excellence in their pursuits, driving positive change within their communities, and creating a brighter future for all.</p>
      </div>

    </div>
  </div>
  )
}
