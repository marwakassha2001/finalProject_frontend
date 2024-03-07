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
import Cooks from "../Pages/Cooks/Cooks.js"
import Hero1 from "../Components/Hero/Hero1.js";
import ContactUs from "../Pages/Contact/Contact.js";
import About from "../Pages/About/About.js";
import ProfilePage from "../Pages/Profile/Profile.js";

const AppRouter = () => {
  return (
    <Routes>
      {/* for normal Outlet */}
      <Route path="/" element={<Outlet/>}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cook" element={<Cooks/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/ProductsPage/:categoryId" element={<Meals />} />
        <Route path="/mealDetails/:slug" element={<MealDetails/>} />
        <Route path="/meals" element={<Meals />} />
        {/* <Route path="/mealDetails" element={<MealDetails />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile/:id"  element={<ProfilePage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signUp" exact element={<Signup/>} />
      </Route>

      <Route path="/hero" element={<Hero1 />} />
      </Routes>
  )
}

export default AppRouter;
