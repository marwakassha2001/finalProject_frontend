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
    const [city,setCity] = useState();
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
            <p className={Styles.Header}> Register </p>
          <Input placeholder="First Name" firstName={firstName} />
          <Input placeholder="Last Name" lastName={lastName} />
          <Input placeholder="Email" firstName={email} />
          <Input placeholder="Password" password={password} />
          <Input placeholder="Phone Number" phoneNumber={phoneNumber} />
          <Input placeholder="City" city={city} />
          <p>you have an account?Login</p>
          <div className={Styles.buttom}>
          <Button
          size="small"
          variant="contained"
          sx={{
            bgcolor: "#974E44",
            color: "white",
            fontSize: "1.3rem",
            ":hover": {
              bgcolor: "#B55D51",
            },
            textTransform: "none",
          }}
          // onClick={() => {
          //   nav("/ProductsPage");
          // }}
        >
          Signup
        </Button>
</div>
          </div>
      </div>
      </main>
    )
}

export default Signup;
