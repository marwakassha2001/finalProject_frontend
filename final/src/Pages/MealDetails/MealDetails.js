import React, {useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import StyleSingleProduct from "./MealDetails.module.css"
import imageb from "../../Assets/Asset 1 (1).svg"
import Loading from "../../Components/Loading/Loading";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import image from "../../Assets/AdobeStock_211143160_Preview.jpeg"
import { CartContext } from "../../Context/CartContext";

export default function MealDetails() {
  const [count, setCount] = useState(1);
  const { increaseCartItem, setCartItems } = useContext(CartContext);
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


  const addToCart = (meal) => {
    const currentItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = currentItems.findIndex(
      (item) => item.id === meal._id
    );

    if (existingItemIndex !== -1) {
      currentItems[existingItemIndex].quantity += count;
      currentItems[existingItemIndex].totalPrice =
        currentItems[existingItemIndex].quantity *
        currentItems[existingItemIndex].price;
    } else {
      currentItems.push({
        id: meal._id,
        name: meal.name,
        price: meal.price,
        quantity: count,
        slug: slug,
        image: meal.image,
        totalPrice: count * meal.price,
      });
    }

    localStorage.setItem("cart", JSON.stringify(currentItems));

    // Update the total number of items in the cart
    updateCartItemCount();
};

const isProductInCart = (productId) => {
    const currentItems = JSON.parse(localStorage.getItem("cart")) || [];
    return currentItems.some((item) => item.id === productId);
};

const updateCartItemCount = () => {
    const currentItems = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = currentItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItems(totalItems);
    increaseCartItem();
};

  return (
    <div className={StyleSingleProduct.container}>
      {isLoading ? (
   <Loading/>
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
                disabled={isProductInCart(meal._id)}
                onClick={() => addToCart(meal)}
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
                 {isProductInCart(meal._id) ? (
                      "Already in Cart"
                    ) : (
                      <>
                        <AddShoppingCartIcon />
                        Add to cart
                      </>
                    )}{" "}
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
