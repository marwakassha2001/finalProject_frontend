import React from 'react';
import style from "./Meals.module.css";
import MealCard from '../../Components/MealCard/MealCard';
import imageFood from "../../Assets/AdobeStock_211143160_Preview.jpeg";
import imageFood1 from "../../Assets/AdobeStock_203047826_Preview.jpeg";
import imageFood2 from "../../Assets/AdobeStock_357694106_Preview.jpeg";
import imageFood3 from "../../Assets/goodimage.jpg";
import imageCook1 from "../../Assets/shein jackets.jpg";
import imageCook from "../../Assets/shein Zip front suede biker jackets .jpg";

export default function Meals() {
  const mealsData = [
    {
      id: 1,
      name: "Fresh and Crunchy Spring Salad",
      image: imageFood,
      cook: "Marwa kassha",
      city: "Tripoli",
      price: 9.99,
      value:3,
      imagecook: imageCook1
    },
    {
      id: 2,
      name: "Delicious Pasta Carbonara",
      image: imageFood1,
      cook: "John Doe",
      city: "beirut",
      price: 12.99,
      value:2.5,
      imagecook: imageCook
    },
    {
      id: 3,
      name: "Delicious Pasta Carbonara",
      image: imageFood2,
      cook: "layla Hamoud",
      city: "tripoli",
      price: 10.99,
      value:5,
      imagecook: imageCook1
    },
    {
      id: 4,
      name: "Delicious Pasta Carbonara",
      image: imageFood3,
      cook: "souhair jammal",
      city: "tripoli",
      price: 15.99,
      value:4,
      imagecook: imageCook
    },
    {
      id: 4,
      name: "Delicious Pasta Carbonara",
      image: imageFood3,
      cook: "souhair jammal",
      city: "tripoli",
      price: 15.99,
      value:4,
      imagecook: imageCook
    },
    {
      id: 4,
      name: "Delicious Pasta Carbonara",
      image: imageFood,
      cook: "souhair jammal",
      city: "tripoli",
      price: 15.99,
      value:4,
      imagecook: imageCook1
    }

  ];

  return (
    <div>
      <section className={style.pageWrapper}>
        {mealsData.map((meal) => (
          <div className={style.cardWrapper}>
          <MealCard
            key={meal.id}
            title={meal.name}
            image={meal.image}
            cook={meal.cook}
            city={meal.city}
            price={meal.price}
            value={meal.value}
            imagecook={meal.imagecook}
          />
          </div>
        ))}
      </section>
    </div>
  );
}
