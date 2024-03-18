import React from "react";
import Styles from "./Login.module.css";
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

  const showToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
      <ToastContainer />
     <main className={Styles.mainContainer}>
    <section className={Styles.pageContainer}>
      <div className={Styles.div}>
        <h1 className={Styles.title}>Login to your account</h1>
        <div className={Styles.linkPhrase}>
          <p className={Styles.p}>Don't have one? </p>{" "}
          <NavLink to="/signup" className={Styles.linkLogin}>
            Sign Up
          </NavLink>
        </div>
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
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      style={{ color: "#B55D51" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
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
              {loading === true ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  </main>
    </>
  );
}

export default Login;