import React, { useState, useEffect } from "react";
import Styles from "./CartegoryCard.module.css";
import categoryImg from "../../Assets/img.webp";
import categoryImg1 from "../../Assets/AdobeStock_284400339_Preview.jpeg";
import categoryImg2 from "../../Assets/AdobeStock_298854833_Preview.jpeg";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
const CartegoryCard = () => {
const [categoryData,setCategoryData]= useState([])
    // const categoryData = [
    //     { name: "Lunch", imgSrc: categoryImg2 },
    //     { name: "Breakfast", imgSrc: categoryImg },
    //     { name: "dessert", imgSrc: categoryImg1 },
    //     { name: "pastries", imgSrc: categoryImg },
    //     { name: "Pantry Staples", imgSrc: categoryImg1 },
    //     { name: "Snacks and Sweets", imgSrc: categoryImg },
    //     { name: "Beverages", imgSrc: categoryImg1 },
    //     { name: "Cake", imgSrc: categoryImg2 },
    // ];
    async function getCategories() {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_ENDPOINT}category`
          );
          if (response && response.data) {
            setCategoryData(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
      useEffect( () => {
        getCategories();
      }, []);

    return (
        <section className={Styles.container}>
      <div>
        <h1 className={Styles.title}>Our Categories</h1>
        </div>
        <div className={Styles.cards}>
            {categoryData.map((item, index) => (
                
                <div className={Styles.card} key={index}>
                    <div className={Styles.imageContainer}>
                    <Link to={`meals/${item._id}`}>
                        <img src={item.image} alt={item.image} className={Styles.img} />
                        </Link>
                    </div>
                    <p className={Styles.name}>{item.name}</p>
                </div>
                
            ))}
            </div>
        </section>
    );
};

export default CartegoryCard;