import React, { useEffect, useRef } from 'react';
import styles from './Testimonial.module.css';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/css'; // Import main Swiper CSS
import 'swiper/css/navigation';
import Swiper from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Optional: import fade effect css
import image from '../../Assets/shein Zip front suede biker jackets .jpg'; // Adjust the path

const Testimonial = () => {
    useEffect(() => {
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
    }, []);
  
    return (
      <div className={`${styles.blogSlider} swiper-container`}>
        <div className={`swiper-wrapper ${styles.blogSliderWrapper}`}>
  
          {/* Slide 1 */}
          <div className={`swiper-slide ${styles.blogSliderItem}`}>
            <div className={styles.blogSliderImg}>
              <img src={image} />
            </div>
            <div className={styles.blogSliderContent}>
              <span className={styles.blogSliderCode}>26 December 2019</span>
              <div className={styles.blogSliderTitle}>Lorem Ipsum Dolor</div>
              <div className={styles.blogSliderText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
              <a href="#" className={styles.blogSliderButton}>READ MORE</a>
            </div>
          </div>
  
          {/* Slide 2 */}
          <div className={`swiper-slide ${styles.blogSliderItem}`}>
            <div className={styles.blogSliderImg}>
              <img src={image} />
            </div>
            <div className={styles.blogSliderContent}>
              <span className={styles.blogSliderCode}>26 December 2019</span>
              <div className={styles.blogSliderTitle}>Lorem Ipsum Dolor</div>
              <div className={styles.blogSliderText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
              <a href="#" className={styles.blogSliderButton}>READ MORE</a>
            </div>
          </div>
  
  
          {/* Slide 3 */}
          <div className={`swiper-slide ${styles.blogSliderItem}`}>
            <div className={styles.blogSliderImg}>
              <img src={image} />
            </div>
            <div className={styles.blogSliderContent}>
              <span className={styles.blogSliderCode}>26 December 2019</span>
              <div className={styles.blogSliderTitle}>Lorem Ipsum Dolor</div>
              <div className={styles.blogSliderText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
              <a href="#" className={styles.blogSliderButton}>READ MORE</a>
            </div>
          </div>
  
  
        </div>
        <div className={`swiper-pagination ${styles.blogSliderPagination}`}></div>
      </div>
    );
  };
  
  export default Testimonial;