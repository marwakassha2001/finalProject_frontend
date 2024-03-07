import React from 'react';
import styles from './About.module.css';
import image1 from "../../Assets/coworkers.jpg"
import CheckIcon from '@mui/icons-material/Check';
import image2 from "../../Assets/cookiGrid.jpg"
import image3 from "../../Assets/cooksImage.jpg"
import image4 from "../../Assets/ffodImage.jpg"
import image5 from "../../Assets/momsCook.jpg"

function AboutSection() {
    return (
        <div className={styles.about}>
            <h1  className={styles.title}>Why Choose Us </h1>
            <div className={styles.textGrid}>
                <div className={styles.left}>
                    <h2 className={styles.title2}>
                        we made every thing with love
                    </h2>
                    <p className={styles.phrase}>At our website, we meticulously select the finest cooks to ensure a premium culinary experience for our clients.
                     Through rigorous vetting processes and stringent quality standards,we handpick talented chefs who excel in their craft.
                      Coupled with a seamless user interface, we strive to provide our clients with an effortless and enjoyable browsing experience,
                     making it easy to discover exceptional culinarytalents and indulge in unforgettable dining experiences.</p>
                    <ul className={styles.list}>
                        <li className={styles.list2}> very good taste</li>
                        <li> healthy option</li>
                        <li> afordable prices </li>
                    </ul>
                </div>
                <div className={styles.grid}>
                    <div className={`${styles.item} ${styles.item2}`} style={{ backgroundImage: `url(${image1})` }}></div>
                    <div className={`${styles.item} ${styles.item3}`} style={{ backgroundImage: `url(${image2})` }}></div>
                    <div className={`${styles.item} ${styles.item4}`} style={{ backgroundImage: `url(${image3})` }}></div>
                    <div className={`${styles.item} ${styles.item5}`} style={{ backgroundImage: `url(${image5})` }}></div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;