import React from 'react'
import Styles from "./Hero1.module.css"
import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import img from "../../Assets/food-img-4.png"
import { useNavigate } from "react-router-dom";

export default function Hero1() {

  const nav = useNavigate();
  return (
    <section className={Styles.hero}>
    <div className={Styles.contentWrapper}>
      <div className={Styles.left}>
      <p className={Styles.phrase}>
  Grandma's kitchen, 
  <span style={{ color: "#D0766A",fontSize:"4rem" }}> heartfelt </span>
  meal
</p>
<p className={Styles.phraseDesc}>
      Discover homemade delights straight from mom's kitchen. Order now for a taste of home
      </p>
<Button
          size="large"
          variant="contained"
          sx={{
            bgcolor: "#B55D51",
            color: "white",
            fontSize: "1.3rem",
            ":hover": {
              bgcolor: "#B55D51",
            },
            textTransform: "none",
          }}
          onClick={() => {
            nav("/ProductsPage");
          }}
        >
          Discover products
        </Button>
      </div>
      <div className={Styles.right}>
     <img src={img}/>
      </div>
    </div>
  </section>
  )
}
