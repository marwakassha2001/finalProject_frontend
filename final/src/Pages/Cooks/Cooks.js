import React from 'react'
import style from "./Cooks.module.css"
import CookCard from "../../Components/CookCard/CookCard.js"

export default function Cooks() {
  return (
    <div>
      <section className={style.homePage}>
 <CookCard/>
        </section>
    </div>
  )
}
