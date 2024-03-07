import { useEffect, useState } from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard.js";
import MealByCook from "../../Components/MealByCook/MealByCook";
import axios from "axios";
import { useParams } from "react-router-dom";

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
        console.log("marwa two i'm here");
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
              image={cook.image}
            />
          </span>
          <span
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "start",
              marginLeft: "4rem",
              width: "90%",
            }}
          >
         {meals && meals.map((meal, index) => (
    <MealByCook
      key={index}
      id={meal._id}
      name={meal.name}
      price={meal.price}
      image={meal.image}
    />
  ))}

          </span>
        </>
      )}
    </>
  );
};
export default ProfilePage;
