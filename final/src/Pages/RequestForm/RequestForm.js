import React from "react";
import Styles from "./RequestForm.module.css";
import Input from '@mui/material/Input';
import image from "../../Assets/loginpic.jpg"
import Button from "@mui/material/Button";
import{TextField,IconButton} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
// import OAuth from "../../Components/OAuth/OAuth.js";
import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import useApi from "../../Hooks/UseApi";
// import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

function Request() {
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState(null);
  
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    navigate("/home");
  };


  return (
    <>
     <main className={Styles.mainContainer}>
    <section className={Styles.pageContainer}>
      <div className={Styles.div}>
        <h1 className={Styles.title}>Join us as cook</h1>
          <p className={Styles.p}> Fill your data and we will contact you later </p>{" "}
        </div>
      <div>
        <form className={Styles.formContainer}>
          <div className={Styles.inputContainer}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(null); // Clear previous error when typing
              }}
              onBlur={() => {
                // Validate email on blur
                const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                  email
                );
                if (!isValidEmail) {
                  setEmailError("Invalid email address");
                }
              }}
              sx={{
                "& .Mui-focused > .MuiOutlinedInput-notchedOutline ": {
                  border: "2px solid #B55D51 !important",
                  borderRadius: "4px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #B55D51 ",
                },
                "& .MuiInputLabel-root.Mui-focused ": {
                  color: "#B55D51 ",
                },
              }}
            />
          </div>
          <div className={Styles.buttonContainer}>
            <Button
              variant="contained"
              onClick={submitHandler}
              sx={{
                bgcolor: "#B55D51",
                transition: "background-color 0.3s ease, color 0.3s ease",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#b5736b",
                  color: "white",
                },
              }}
            >
        submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  </main>
    </>
  );
}

export default Request;