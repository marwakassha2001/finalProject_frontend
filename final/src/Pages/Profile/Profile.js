import { useEffect, useState } from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard.js";
import MealByCook from "../../Components/MealByCook/MealByCook";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Profile.module.css"
import styled from "@emotion/styled";

const ProfilePage = () => {
  const [cook, setCook] = useState(null);
  const [meals, setMeals] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  async function getCook() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}user/${id}`
      );
      if (response && response.data) {
        setCook(response.data);
        console.log("marwa i'm here");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }


  async function getMealByCook() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}meal/mealsByUser/${id}`
      );
      if (response && response.data) {
        setMeals(response.data);
        console.log(meals,'mealsssssss');
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  useEffect( () => {
    getCook();
    getMealByCook();
    console.log('heree')
  }, [id]);
// console.log(cook.user)


  return (
    <>
      {cook && (
        <>
          <span
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              width: "90%",
            }}
          >
            <ProfileCard
              id={cook.id}
              firstName={cook.firstName}
              lastName={cook.lastName}
              city={cook.city}
              phone={cook.phoneNumber}
              email={cook.email}
              image={cook.image}
            />
          </span>

          <div className={style.titleCard}>
          <div >
            <h1> <p className={style.title}>  My  Meals</p></h1>
          </div>
          <div className={style.mealscard}>
          {meals && meals.map((meal, i) => (
    <div className={style.cardWrapper} key={meal.id}>
      <MealByCook
      id={meal._id}
      slug={meal.slug}
      name={meal.name}
      price={meal.price}
      image={meal.image}
      />
    </div>
  ))}
          </div>
        </div>





        </>
      )}
    </>
  );
};
export default ProfilePage;
