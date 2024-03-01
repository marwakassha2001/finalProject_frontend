import React, { useEffect, useState } from "react";
import style from "./Meals.module.css";
import { fetchProducts } from "../../data/mealsData";
import { Link, useParams } from "react-router-dom";
import MealCard from '../../Components/MealCard/MealCard';
import imageFood from "../../Assets/AdobeStock_211143160_Preview.jpeg";
import imageFood1 from "../../Assets/AdobeStock_203047826_Preview.jpeg";
import imageFood2 from "../../Assets/AdobeStock_357694106_Preview.jpeg";
import imageFood3 from "../../Assets/goodimage.jpg";
import imageCook1 from "../../Assets/shein jackets.jpg";
import imageCook from "../../Assets/shein Zip front suede biker jackets .jpg";
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import { fetchCategory } from "../../data/categoryData";

export default function Meals() {
  const [meals, setMeals] = useState(null);
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [checkboxes, setCheckboxes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [isError, setIsError] = useState({ state: false, message: "ok" });
  const [selectedCategories, setSelectedCategories] = useState(
    categoryId ? [`${categoryId}`] : []
  );


  async function fetchData() {
    try {
      const response = await fetchProducts();
      if (response) {
        setMeals(response.data);
        setIsLoading(false);
      } else {
        setIsError({ state: true, message: "Network Error marwa" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(meals, 'mmmmmmmmmmm')
  const filteredProducts = meals ? meals.filter((meal) =>
    meal.user.firstName.toLowerCase().includes(searchInput.toLowerCase())
  )
    .filter((meal) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some(
          (categoryId) => categoryId === meal.category._id
        );

      return matchesCategory;
    }) : [];

  console.log(filteredProducts, 'llllllllll')


  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    fetchData();
  }, []);
  if (meals) console.log(meals[0].mealDetails[0].price)
  return (
    <div>
      <section className={style.pageWrapper}>
        {(isLoading) ? (<div>Loadinggg!11</div>) : (
          <div className={style.sidebar}>
            <Sidebar
              setSelectedCategories={setSelectedCategories}
              setSearchInput={setSearchInput}
              setCheckboxes={setCheckboxes}
              mealsData={meals}
            />
          </div>)}
        <div className={style.titleCard}>
          <div >
            <h1> <p className={style.title}> Meals</p></h1>
          </div>
          <div className={style.mealscard}>
            {paginatedProducts && paginatedProducts.map((meal, i) => (
              <div className={style.cardWrapper}>
                <MealCard
                  key={meal.id}
                  title={meal.name}
                  image={meal.image}
                  category={meal.category.name}
                  cook={meal.user.firstName}
                  city={meal.user.address}
                  price={meal.mealDetails[0].price}
                  value={meal.value}
                  imagecook={meal.user.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
