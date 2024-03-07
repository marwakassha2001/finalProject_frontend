import { useState, useEffect } from "react";
import { Box, Stack, Avatar, Typography } from "@mui/material";
import styles from "./ProfileCard.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfileCard = ({id,firstName,lastName,city,image}) => {
  const [cook, setCook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const { id } = useParams();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // async function getCook() {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BACKEND_ENDPOINT}user/${id}`
  //     );
  //     if (response && response.data) {
  //       setCook(response.data);
  //       console.log("marwa i'm here");
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getCook();
  // }, [id]);

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
    <Box
      className={styles.Box}
      sx={{
        bgcolor: "white",
        width: "50%",
        mb: "2rem",
        borderRadius: "10px",
        padding: "2rem 0 0 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: "2rem",
        zIndex: 0,
        boxShadow: "0 0 10px #BABABA",
      }}
    >
        <span style={{ display: "flex", paddingLeft: "5rem" }}>
          <Avatar
            alt="User"
            src={image}
            sx={{
              width: "10rem",
              height: "10rem",
            }}
          />
        </span>
      <Stack>
          <>
            <Typography
              variant={screenWidth < 380 ? "h5" : "h4"}
              component={screenWidth < 380 ? "h5" : "h4"}
              sx={{
                textAlign: "center",
                mt: "1rem",
                fontWeight: "650",
              }}
              className={styles.Name}
            >
              {firstName + " " + lastName}
            </Typography>
            <Typography
              variant={screenWidth < 380 ? "h5" : "h4"}
              component={screenWidth < 380 ? "h5" : "h4"}
              sx={{
                width: "100%",
                textAlign: "center",
                mt: "1rem",
                fontWeight: "450",
              }}
              className={styles.city}
            >
              {city}
            </Typography>
          </>
      </Stack>
    </Box>
  );
};
export default ProfileCard;


