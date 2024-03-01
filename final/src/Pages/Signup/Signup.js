import React from 'react'
import Styles from "./Signup.module.css"
import { useEffect, useContext, useState } from "react";
import image from "../../Assets/loginpic.jpg"
import { NavLink } from "react-router-dom";
import useApi from "../../Hooks/UseApi";
import Box from '@mui/material/Box';
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
      // toast.success('Logged in Successfuly')
      console.log("sign up  Successfuly");
    }
  }, [success]);

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
const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      console.log("All fields are required");
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
      console.log("Invalid email address");
    }

    if (!isValidPassword) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      setLoading(false);
      console.log("Invalid password");
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
        // navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      // showToast('Error logging in');
    }
  };

    return (
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          <div className={Styles.left}>
<img src={image}/>
          </div>

          <div className={Styles.right}>
            <p className={Styles.Header}> Register your account </p>
          <Input placeholder="First Name" firstName={firstName} 
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
           />
          <Input placeholder="Last Name" lastName={lastName}
               value={lastName}
               onChange={(e) => setLastName(e.target.value)}
          />
          <Input placeholder="Email" firstName={email} 
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
          />
          <Input placeholder="Password" password={password}
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
          />
          <Input placeholder="Phone Number" phoneNumber={phoneNumber} 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}/>
          <div className={Styles.linkPhrase}>
              <p className={Styles.p}>Already have one?</p>
              <NavLink to="/Login" style={{color:"#B55D51"}}>
                login
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
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
</div>
          </div>
      </div>
      </main>
    )
}

export default Signup;
