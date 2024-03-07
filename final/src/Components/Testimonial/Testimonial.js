import React, { useEffect, useRef } from 'react';
import styles from './Testimonial.module.css';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css'; // Import main Swiper CSS
import 'swiper/css/navigation';
import Swiper from 'swiper';
import 'swiper/css'; // Import main Swiper CSS
import 'swiper/css/navigation'; // Navigation module styles (optional)
import 'swiper/css/pagination'; // Pagination module styles (optional)
import 'swiper/css/effect-fade'// Optional: import fade effect css
import image from '../../Assets/shein Zip front suede biker jackets .jpg'; // Adjust the path

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
      <div className={styles.sectionT}>
      <div className={styles.blogSlider}>
      <div className={`${styles.blogSliderWrapper} ${styles.swiperWrapper}`}>

        <div className={`${styles.blogSliderItem} ${styles.swiperSlide}`}>
          <div className={styles.blogSliderImg}>
            <img src={Image} alt="" />
          </div>
          <div className={styles.blogSliderContent}>
            <span className={styles.blogSliderCode}>26 December 2019</span>
            <div className={styles.blogSliderTitle}>Lorem Ipsum Dolor</div>
            <div className={styles.blogSliderText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            <a href="#" className={styles.blogSliderButton}>READ MORE</a>
          </div>
        </div>
        
        <div className={`${styles.blogSliderItem} ${styles.swiperSlide}`}>
          <div className={styles.blogSliderImg}>
            <img src={Image}  alt="" />
          </div>
          <div className={styles.blogSliderContent}>
            <span className={styles.blogSliderCode}>26 December 2019</span>
            <div className={styles.blogSliderTitle}>Lorem Ipsum Dolor2</div>
            <div className={styles.blogSliderText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
            <a href="#" className={styles.blogSliderButton}>READ MORE</a>
          </div>
        </div>
        
        <div className={`${styles.blogSliderItem} ${styles.swiperSlide}`}>
          <div className={styles.blogSliderImg}>
            <img src={Image}  alt="" />
          </div>
          <div className={styles.blogSliderContent}>
            <span className={styles.blogSliderCode}>26 December 2019</span>
            <div className={styles.blogSliderTitle}>Lorem Ipsum Dolor</div>
            <div className={styles.blogSliderText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
            <a href="#" className={styles.blogSliderButton}>READ MORE</a>
          </div>
        </div>
        
      </div>
      <div className={styles.blogSliderPagination}></div>
    </div>
    </div>
    );
  };
  
  export default Testimonial;