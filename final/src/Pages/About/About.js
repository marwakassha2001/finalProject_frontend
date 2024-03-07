import style from './About.module.css';
import about from '../../Assets/momscooks.jpg';
// import product from '../../assets/images/product (3) 1.png';
// import delivery from '../../assets/images/icon-delivery.png';
// import shield from '../../assets/images/shield-tick.png';
// import customer from '../../assets/images/Customer service .png';


const About = () => {
    return (
        <div className={style.aboutContainer}>
            <div className={style.container}>
                <div className={style.text}>
                    <h2 className={style.aboutTitle}>OUR STORY</h2>
                    <p className={style.phrase1}>
                    Our story began with a simple yet profound inspiration: recognizing the culinary prowess of moms and talented individuals longing for a platform to showcase their cooking skills. We envisioned a space where their expertise could not only shine but also serve as a source of income.  </p>
                    <p>
                    Simultaneously, we empathized with the busy worker, the time-strapped student, and anyone craving healthier options but lacking the time or means to prepare them. In our endeavor, we sought to intertwine the warmth of a mother's love with the comfort of home-cooked meals, ensuring that amidst life's hustle, a taste of wholesome goodness and heartfelt care is always within reach. </p>
                </div>
                <div className={style.image}>
                    <img className={style.img1} src={about} alt="About Us" />
                </div>
            </div>
            {/* <div className={style.whyus}>
                <h2 className={style.aboutTitle}>WHY US</h2>
                <div className={style.allIcon}>
                    <div className={style.icon}>
                        <div className={`${style.frame} ${style.grayFrame}`}>
                            <div className={style.blackFrame}>
                                <img src={product} alt="product" />
                            </div>
                        </div>
                        <div>
                            <div className={style.phrase}>
                                <p className={style.phrase2} >HIGH QUALITY</p>
                                <p>Hight quality original brands </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.icon}>
                        <div className={`${style.frame} ${style.grayFrame}`}>
                            <div className={style.blackFrame}>
                                <img className={style.img2} src={customer} alt="Customer service" />
                            </div>
                        </div>
                        <div>
                            <div className={style.phrase}>
                                <p className={style.phrase2} >CUSTOMER SERVICE</p>
                                <p>Friendly customer suppor</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.icon}>
                        <div className={style.frame + ' ' + style.grayFrame}>
                            <div className={style.blackFrame}>
                                <img className={style.img2} src={shield} alt="shield-tick" />
                            </div>
                        </div>
                        <div>
                            <div className={style.phrase}>
                                <p  className={style.phrase2} >MONEY BACK GUARANTEE</p>
                                <p>We reurn money within 30 days</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.icon}>
                        <div className={style.frame + ' ' + style.grayFrame}>
                            <div className={style.blackFrame}>
                                <img className={style.img2} src={delivery} alt="delivery" />
                            </div>
                        </div>
                        <div className={style.phrase}>
                            <p className={style.phrase2} >FAST DELIVERY</p>
                            <p>Fast delivery all over Lebanon</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    )
}
export default About;