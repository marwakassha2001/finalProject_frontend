import { useState, useEffect } from "react";
import { Box, Stack, Avatar, Typography } from "@mui/material";
import style from "./ProfileCard.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfileCard = ({id,firstName,email,phone,lastName,city,image}) => {
  const [cook, setCook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.wrapper}>
    <div className={style.userCard}>
      <div className={style.userCardImg}>
        <img src={image} alt="Profile" />
      </div>
      <div className={style.userCardInfo}>
      <h2>{firstName} {lastName}</h2> 
        <p><span>Email:</span> {email}</p>
        <p><span>Location:</span> {city}</p>
        <p><span>phone:</span>{phone}</p>
        <p><span>About me:</span> Passionate and skilled, he transforms ordinary ingredients into culinary masterpieces with creativity and precision, infusing each dish with his unwavering dedication to the art of cooking.</p>
      </div>
    </div>
  </div>
  );
};
export default ProfileCard;


