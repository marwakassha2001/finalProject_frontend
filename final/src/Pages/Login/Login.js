import React from "react";
import Styles from "./Login.module.css";
import Input from '@mui/material/Input';
import image from "../../Assets/loginpic.jpg"
import Button from "@mui/material/Button";
// import OAuth from "../../Components/OAuth/OAuth.js";
import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import useApi from "../../Hooks/UseApi";
// import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { fetchUserData } = useContext(AuthContext);
  const { apiCall } = useApi();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (success) {
      console.log("Logged in Successfuly");
    }
  }, [success]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      console.log("Please enter both email and password");
      setLoading(false);
      return;
    }

    try {
      const response = await apiCall({
        url: "user/login",
        method: "post",
        data: { email, password },
      });

      if (response) {
        await fetchUserData();
        setLoading(false);
        setSuccess(true);
        console.log("Logged in successfully");
        navigate("/home", { state: { success: true } });
      } else {
        console.log("Email does not exist or Wrong Password");
        setLoading(false);
      }
    } catch (error) {
      // Handle specific errors based on status code, if needed
      if (error.response && error.response.status === 401) {
        console.log("Incorrect email or password");
      } else {
        console.log("Error logging in");
      }

      setLoading(false);
    }
  };

//   const showToast = (message) => {
//     toast.error(message, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

  return (
    <>
           <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          <div className={Styles.left}>
<img src={image}/>
          </div>

          <div className={Styles.right}>
            <p className={Styles.Header}> Register your account </p>
          <Input placeholder="Email" firstName={email}
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
          />
          <Input placeholder="Password" password={password} 
           value={password}
           type={showPassword ? "text" : "password"}
           onChange={(e) => {
             setPassword(e.target.value);
           }}
          />
          <div className={Styles.linkPhrase}>
              <p className={Styles.p}>Don't have an account?</p>
              <NavLink to="/Login" style={{color:"#B55D51"}}>
                signUp
              </NavLink>
            </div>
          <div className={Styles.buttom}>
          <Button
          size="small"
          variant="contained"
          onClick={submitHandler}
          sx={{
            bgcolor: "#974E44",
            color: "white",
            fontSize: "1.3rem",
            ":hover": {
              bgcolor: "#B55D51",
            },
            textTransform: "none",
          }}
        >
            {loading === true ? "Logging in..." : "Login"}
        </Button>
</div>
          </div>
      </div>
      </main>
    </>
  );
}

export default Login;