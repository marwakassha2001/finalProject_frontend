import React, { useState } from 'react';
import style from "./Request.module.css"
import TextField from "@mui/material/TextField";
import { NavLink, useNavigate } from "react-router-dom";

export default function Request() {
    const [email, setEmail] = useState(""); // State to manage email input value
    const navigate = useNavigate();
    const goToRequestPage = () => {
        // Navigate to request page
        navigate("/");
        // Clear the email input field
        setEmail("");
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
             We'll help you take your passion to the next level.Fill your email and we will contact you.</p>
             <div className={style.inputbtn}>
             <TextField
             fullWidth
                                 value={email} // Bind input value to state
                                 onChange={(e) => setEmail(e.target.value)} 
                helperText="Please Ensure it's a valid email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                sx={{
                  "& .Mui-focused > .MuiOutlinedInput-notchedOutline ": {
                    border: "2px solid #b55d4e !important",
                    borderRadius: "4px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #b55d4e ",
                  },
                  "& .MuiInputLabel-root.Mui-focused ": {
                    color: "#b55d4e ",
                  },
                }}
              />
             <button className={style.button}   onClick={goToRequestPage}>
                Make a Request
             </button>
             </div>
        </div>
        </>
    )
}
