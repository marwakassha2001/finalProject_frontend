import React from 'react'
import style from "./Home.module.css"
import Hero from '../../Components/Hero/Hero'
import Hero1 from '../../Components/Hero/Hero1'
import CategoryCard from "../../Components/CategoryCard/CategoryCard.js"
import MealCard from '../../Components/MealCard/MealCard'

export default function Home() {
  return (
    <div>
        <section className={style.homePage}>
            <div className={style.hero}>
            <Hero1/>
            </div>
            <div className={style.category}>
                <CategoryCard/>
            </div>
        </section>
      
    </div>
  )
}
