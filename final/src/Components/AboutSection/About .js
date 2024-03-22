import React from 'react';
import style from './About.module.css';
import img from "../../Assets/share eal.jpg"
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';


function AboutSection() {

    const navigate = useNavigate();

    const goToSignUpPage = () => {
        navigate("/SignUp");
      };
    return (
        <div className={style.container}>

            <div className={style.image}>
                <img className={style.img1} src={img} alt="About Us" />
            </div>
            <div className={style.btntext}>
            <div className={style.text}>
                <h2 className={style.aboutTitle}> Discover your favorite  meals</h2>
                <p className={style.phrase1}>
                  
Discover top options for healthy, time-saving recipes from Lebanon's finest chefs who have a genuine passion for cooking.</p>
            </div>
            <Button
                        onClick={goToSignUpPage}
                        variant="contained"
                        sx={{
                          bgcolor: "#b55d4e",
                          // marginLeft:'-28rem',
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                          textTransform: "none",
                          "&:hover": {
                            bgcolor: "#b55d4e",
                            color: "white",
                          },
                        }}
                      >
                        Sign Up
                      </Button>
                </div>
        </div>

    );
}

export default AboutSection;