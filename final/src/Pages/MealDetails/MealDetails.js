import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import StyleSingleProduct from "./MealDetails.module.css"
import imageb from "../../Assets/Asset 1 (1).svg"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import image from "../../Assets/AdobeStock_211143160_Preview.jpeg"

export default function MealDetails() {
  const [count, setCount] = useState(1);
  const [meal, setMeal] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }
  function handleDecrease() {
    setCount((prev) => prev - 1);
  }
  async function getMeal() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}meal/${slug}`
      );
      if (response && response.data) {
        setMeal(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMeal();
  }, [slug]);

  return (
    <div className={StyleSingleProduct.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : meal ? (
        <>
          <article className={StyleSingleProduct.imageArticle}>
            <img
              src={meal.image}
              className={StyleSingleProduct.imageProduct}
            />
          </article>

          <article className={StyleSingleProduct.contentArticle}>
            <div className={StyleSingleProduct.nameContainer}>
              <h1>{meal.name} </h1>
              <div className={StyleSingleProduct.categoryContainer}>
                <span>price :</span>
                <p>{meal.price}</p>
              </div>
            </div>
            <div className={StyleSingleProduct.categoryContainer}>
              <span>Category :</span>
              <p>{meal.category.name} </p>
            </div>
            <div className={StyleSingleProduct.weightContainer}>
              <span>Weight : </span>
              <p>{meal.weight}</p>
            </div>
            <section className={StyleSingleProduct.quantityContainer}>
              <span>Quantity : </span>
              <section className={StyleSingleProduct.quantityControl}>
                <div
                  className={`${StyleSingleProduct.decrease} ${
                    count === 0 ? StyleSingleProduct.disabled : ""
                  }`}
                  onClick={count > 0 ? handleDecrease : null}
                >
                  -
                </div>
                <div className={StyleSingleProduct.currentQuantity}>
                  {count}
                </div>
                <div
                  className={StyleSingleProduct.increase}
                  onClick={handleIncrease}
                >
                  +
                </div>
              </section>
            </section>
            <div className={StyleSingleProduct.descriptionContainer}>
              <span>Description: </span>
              <p> {meal.description}</p>
            </div>
            <div className={StyleSingleProduct.ingredientsContainer}>
              <span>Ingredients:</span>
              <p style={{ width: "70%" }}>{meal.ingredients}</p>
            </div>
            <span style={{ marginBottom: "1.5rem" }}>
              <Button
                size="large"
                variant="contained"
                sx={{
                  bgcolor: "#974E44",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    bgcolor: "#974E44",
                    color: "white",
                  },
                }}
                startIcon={<AddShoppingCartIcon />}
              >
                Add to Cart
              </Button>
            </span>
          </article>
        </>
      ) : (
        <p>Meal not found</p>
      )}
    </div>
  );
}
