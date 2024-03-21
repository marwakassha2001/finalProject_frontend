import React from 'react'
import Styles from "./Signup.module.css"
import { useEffect, useContext, useState } from "react";
import image from "../../Assets/loginpic.jpg"
import { NavLink } from "react-router-dom";
import useApi from "../../Hooks/UseApi";
import Box from '@mui/material/Box';
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@mui/material";
import Input from '@mui/material/Input';
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";



import{TextField,IconButton} from "@mui/material";


import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';


const Signup = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    const { fetchUserData } = useContext(AuthContext);
    const { apiCall } = useApi();
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

  useEffect(() => {
    if (success) {
      toast.success('Logged in Successfuly')
      console.log("sign up  Successfuly");
    }
  }, [success]);

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
const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      showToast("All fields are required");
      setLoading(false);
      return;
    }
    // Validate email and password
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(password);

    if (!isValidEmail) {
      setEmailError(" Please enter a valid email address");
      setLoading(false);
      showToast("Invalid email address");
    }

    if (!isValidPassword) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      setLoading(false);
      showToast("Invalid password");
      return;
    }

    try {
      const response = await apiCall({
        url: "user/signup",
        method: "post",
        data: { firstName, lastName, email, password, phoneNumber},
      });

      if (response) {
        await fetchUserData();
        console.log("sign up");
        setLoading(false);
        setSuccess(true);
        // sendWelcomeEmail(firstName, email);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      showToast('Error logging in');
    }
  };

    return (
      <>
      <ToastContainer />
      <main className={Styles.mainContainer}>
        <section className={Styles.pageContainer}>
          <div className={Styles.div}>
            <h1 className={Styles.title}>Register your account</h1>
            <div className={Styles.linkPhrase}>
              <p className={Styles.p}>Already have one?</p>
              <NavLink to="/Login" className={Styles.linkLogin}>
                login
              </NavLink>
            </div>
          </div>

          <div>
            <form className={Styles.formContainer}>
              <div className={Styles.inputContainer}>
                <TextField
                  required
                  fullWidth
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  required
                  fullWidth
                  id="outlined-basic"
                  label=" Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  required
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                    helperText={!emailError ? "": emailError}
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
                     setEmailError("Please enter a valid email address");
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
                  required
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  helperText={!passwordError ? "": passwordError}
                  variant="outlined"
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(null); // Clear previous error when typing
                  }}
                  onBlur={() => {
                    // Validate password on blur
                    const isValidPassword =
                      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
                    if (!isValidPassword) {
                      setPasswordError(
                        "Password must be at least 8 characters long and contain at least one letter and one number"
                      );
                    }
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
                    )
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
                  label="Phone Number"
                  variant="outlined"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                  fullWidth
                  variant="contained"
                  onClick={submitHandler}
                  sx={{
                    bgcolor: "#B55D51",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      bgcolor: "#b5736b",
                      color: "white",
                    },
                    textTransform: 'none'
                  }}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
    )
}

export default Signup;
