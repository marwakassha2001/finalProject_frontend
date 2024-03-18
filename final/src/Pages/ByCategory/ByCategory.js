import React, { useEffect, useState } from "react";
import style from "./ByCategory.module.css";
import { fetchProducts } from "../../data/mealsData";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import MealCard from '../../Components/MealCard/MealCard';

export default function Meals() {
  const [meals, setMeals] = useState(null);
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [checkboxes, setCheckboxes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [isError, setIsError] = useState({ state: false, message: "ok" });
  const [selectedCategories, setSelectedCategories] = useState(
    id ? [`${id}`] : []
  );


 async function fetchMealsByCateg() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}meal/byCategory/${id}`);
      if (response) {
        setMeals(response.data);
        setIsLoading(false);
        console.log(meals,'hii'); 
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(id){
      fetchMealsByCateg()
    }
  }, []);

  return (
    <div>
      <section className={style.pageWrapper}>
        <div className={style.titleCard}>
          <div >
          <h1>
              <p className={style.title}>
               {id ? meals?.[0].category?.name : "All Categories"} Meals 
              </p>
            </h1>
          </div>
          <div className={style.mealscard}>
          {meals && meals.length > 0 ? (
  meals.map((meal, i) => (
    <div className={style.cardWrapper} key={meal.id}>
      <MealCard
        title={meal.name}
        slug={meal.slug}
        image={meal.image}
        category={meal.category?.name} // Use optional chaining here
        cook={meal.user.firstName}
        city={meal.user.address}
        price={meal.price}
        imagecook={meal.user.image}
      />
    </div>
  ))
) : (
  <div>No meals found</div>
)}
          </div>
        </div>
      </section>
    </div>
  );
}