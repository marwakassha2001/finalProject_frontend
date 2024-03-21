import React, { useEffect, useRef } from 'react';
import styles from './Testimonial.module.css';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css'; // Import main Swiper CSS
import 'swiper/css/navigation';
import { RiDoubleQuotesL } from 'react-icons/ri';
import Swiper from 'swiper';
import 'swiper/css'; // Import main Swiper CSS
import 'swiper/css/navigation'; // Navigation module styles (optional)
import 'swiper/css/pagination'; // Pagination module styles (optional)
import 'swiper/css/effect-fade'// Optional: import fade effect css
import image from '../../Assets/pic1.jpg'; 
import image1 from '../../Assets/pic2.jpg'; 
import image2 from '../../Assets/pic3.jpg'; 

const Testimonial = () => {
  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, EffectFade]); // Initialize modules
    const swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      },
    });
  
    console.log('Swiper instance:', swiper); // Log the Swiper instance
  }, []);
  
    return (
      <div className={styles.sectionContainer}>
      <div className={styles.header}>
        <h1 className={styles.titletestimonial}>What our clients say about us.</h1>
      </div>
      <div className={styles.testimonials__grid}>
        {/* Individual Testimonial Cards */}
        <div className={styles.card}>
        <span><RiDoubleQuotesL /></span>
          <p>This app simplifies meal orders, offering a seamless experience for enjoying delicious, hassle-free food right at my fingertips. With its user-friendly interface and quick delivery, it's become my go-to solution for satisfying cravings without the fuss.</p>
          <hr />
          <img src={image} alt="user" />
          <p className={styles.name}>Jana Ali</p>
        </div>
        <div className={styles.card}>
        <span><RiDoubleQuotesL /></span>
          <p>Thanks to the food delivery app, I now enjoy the convenience of delicious, homemade meals delivered right to my doorstep, making every dinner feel like a special occasion</p>
          <hr />
          <img src={image1} alt="user" />
          <p className={styles.name}>Joahn Doe</p>
        </div>
        <div className={styles.card}>
        <span><RiDoubleQuotesL /></span>
          <p>The food delivery app not only satisfies my cravings but also empowers me to showcase my culinary skills from the comfort of my own kitchen, delighting friends and family with homemade specialties</p>
          <hr />
          <img src={image2} alt="user" />
          <p className={styles.name}>Layla Hammoud</p>
        </div>
      </div>
    </div>
    );
  };
  
  export default Testimonial;