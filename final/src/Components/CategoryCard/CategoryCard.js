import React from "react";
import Styles from "./CartegoryCard.module.css";
import categoryImg from "../../Assets/img.webp";
import categoryImg1 from "../../Assets/AdobeStock_284400339_Preview.jpeg";
import categoryImg2 from "../../Assets/AdobeStock_298854833_Preview.jpeg";
import { NavLink } from "react-router-dom";

const CartegoryCard = () => {

    const categoryData = [
        { name: "Lunch", imgSrc: categoryImg2 },
        { name: "Breakfast", imgSrc: categoryImg },
        { name: "dessert", imgSrc: categoryImg1 },
        { name: "pastries", imgSrc: categoryImg },
        { name: "Pantry Staples", imgSrc: categoryImg1 },
        { name: "Snacks and Sweets", imgSrc: categoryImg },
        { name: "Beverages", imgSrc: categoryImg1 },
        { name: "Cake", imgSrc: categoryImg2 },
    ];

    return (
        <section className={Styles.container}>
      <div>
        <h1 className={Styles.title}>Our Categories</h1>
        </div>
        <div className={Styles.cards}>
            {categoryData.map((item, index) => (
                <div className={Styles.card} key={index}>
                    <div className={Styles.imageContainer}>
                        <img src={item.imgSrc} alt={item.name} className={Styles.img} />
                    </div>
                    <p className={Styles.name}>{item.name}</p>
                </div>

            ))}
            </div>
        </section>
    );
};

export default CartegoryCard;