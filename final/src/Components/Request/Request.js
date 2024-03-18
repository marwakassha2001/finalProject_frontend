import React from 'react'
import style from "./Request.module.css"
import { NavLink, useNavigate } from "react-router-dom";

export default function Request() {
    const navigate = useNavigate();
    const goToRequestPage = () => {
        navigate("/Request");
      };
    return (
        <>
        <h1  className={style.title}>Join us as a Cook </h1>
        <div className={style.section}>
            <h2>
                Love to cook?
            </h2>
            <h3>Wanna grow your business?</h3>
            <p className={style.phrase}>Join us and showcase your skills to a hungry audience!
             We'll help you take your passion to the next level.</p>
             <button className={style.button}   onClick={goToRequestPage}>
                Make a Request
             </button>
        </div>
        </>
    )
}
