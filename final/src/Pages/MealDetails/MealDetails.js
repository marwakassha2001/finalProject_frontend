import React from 'react'
import { Button } from "@mui/material";
import StyleSingleProduct from "./MealDetails.module.css"
import imageb from "../../Assets/Asset 1 (1).svg"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import image from "../../Assets/AdobeStock_211143160_Preview.jpeg"

export default function MealDetails() {
  return (
      <div className={StyleSingleProduct.container}>
          <article className={StyleSingleProduct.imageArticle}>
            <img
              src={image}
              className={StyleSingleProduct.imageProduct}
            />
          </article>

          <article className={StyleSingleProduct.contentArticle}>
            <div className={StyleSingleProduct.nameContainer}>
              <h1>Delicous salad with fish </h1>
              <div className={StyleSingleProduct.categoryContainer}>
              <span>price :</span>
              <p>$1.5</p>
            </div>
            </div>
            <div className={StyleSingleProduct.categoryContainer}>
              <span>Category :</span>
              <p>Salad </p>
            </div>
            <div className={StyleSingleProduct.weightContainer}>
              <span>Weight : </span>
              <p>1 kg </p>
            </div>
            <section className={StyleSingleProduct.quantityContainer}>
              <span>Quantity : </span>
              <section className={StyleSingleProduct.quantityControl}>
                <div
                  className={StyleSingleProduct.decrease} 
                >
                  -
                </div>
                <div className={StyleSingleProduct.currentQuantity}>
                  1kg
                </div>
                <div
                  className={StyleSingleProduct.increase}
                >
                  +
                </div>
              </section>
            </section>
            <div className={StyleSingleProduct.descriptionContainer}>
              <span>Description: </span>
              <p> This refreshing summer salad combines crisp lettuce, juicy tomatoes, crunchy cucumbers, and tangy red onions, all tossed together with a zesty vinaigrette dressing. Sprinkled with
                 fragrant herbs and topped with creamy feta cheese, this salad is bursting with flavor and perfect for a light lunch or as a side dish for any meal. With its vibrant colors and fresh ingredients,
Feel free to adjust the description according to the specific ingredients and flavors of your salad recipe!</p>
            </div>
            <div className={StyleSingleProduct.ingredientsContainer}>
              <span>Ingredients:</span>
              <div className={StyleSingleProduct.ingredientsList}>
                <p className={StyleSingleProduct.ingred}>ingredient</p>
                <p className={StyleSingleProduct.ingred}>ingredient</p>
                <p className={StyleSingleProduct.ingred}>ingredient</p>
              </div>
            </div>
            <span style={{ marginTop: "1rem" }}>
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
    </div>
  )
}
