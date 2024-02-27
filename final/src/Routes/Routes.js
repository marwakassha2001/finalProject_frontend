import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.js";
import Home from "../Pages/Home/Home.js";
import Outlet from "../Routes/Outlet.js";

import React from 'react'
import Meals from "../Pages/Meals/Meals.js";
import MealDetails from "../Pages/MealDetails/MealDetails.js";
import Cart from "../Pages/Cart/Cart.js";
import Login from "../Pages/Login/Login.js"
import Signup from "../Pages/Signup/Signup.js";
import Hero from "../Components/Hero/Hero.jsx";
import Hero1 from "../Components/Hero/Hero1.js";

const AppRouter = () => {
  return (
    <Routes>
      {/* for normal Outlet */}
      <Route path="/" element={<Outlet/>}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        {/* <Route path="/mealsPage/:categoryId" element={<Products />} /> */}
        <Route path="/mealDetails" element={<MealDetails />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} /> */}
        <Route path="/login" exact element={<Login />} />
        <Route path="/signUp" exact element={<Signup/>} />
      </Route>

      <Route path="/hero" element={<Hero1 />} />
      </Routes>
  )
}

export default AppRouter;
