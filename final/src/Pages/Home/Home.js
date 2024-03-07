import React from 'react'
import style from "./Home.module.css"
import Hero1 from '../../Components/Hero/Hero1'
import CategoryCard from "../../Components/CategoryCard/CategoryCard.js"
import MealCard from '../../Components/MealCard/MealCard'
import Testimonial from '../../Components/Testimonial/Testimonial'
import ChefCard from '../../Components/BestCook/ChefCard'
import Request from '../../Components/Request/Request.js'
import AboutSection from '../../Components/AboutSection/About '

export default function Home() {
  return (
    <div>
        <section className={style.homePage}>
            <div className={style.hero}>
            <Hero1/>
            </div>
            <AboutSection/>
            <div className={style.category}>
                <CategoryCard/>
            </div>
            {/* <Testimonial/> */}
            <ChefCard/>
            <Request/>
        </section>
      
    </div>
  )
}
