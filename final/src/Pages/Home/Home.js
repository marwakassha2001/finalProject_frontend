import React from 'react'
import style from "./Home.module.css"
import Hero1 from '../../Components/Hero/Hero1'
import CategoryCard from "../../Components/CategoryCard/CategoryCard.js"
import MealCard from '../../Components/MealCard/MealCard'
import Testimonial from '../../Components/Testimonial/Testimonial'
import ChefCard from '../../Components/BestCook/ChefCard'
import Request from '../../Components/Request/Request.js'
import AboutSection from '../../Components/AboutSection/About '
import HeroSection from '../../Components/Hero/Hero'
import OurMession from '../../Components/OurMession/OurMession'

export default function Home() {
  return (
  <div
      style={{
        width: "100%",
        margin: "5rem auto",
      }}
    >
    <HeroSection/>
            <AboutSection/>
                <CategoryCard/>
            {/* <Testimonial/> */}
            {/* <ChefCard/> */}
            <OurMession/>
            <Testimonial/>
            <Request/>
            </div>
  )
}
