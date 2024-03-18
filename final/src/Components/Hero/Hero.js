import Styles from "./Hero.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const nav = useNavigate();


  return (
    <header className={Styles.HeroSection}>
      <div className={Styles.left}>
      <p className={Styles.phrase}>
  Grandma's kitchen, 
  <span style={{ color: "#D0766A",fontSize:"4rem" }}> heartfelt </span>
  meal
</p>
        <div className={Styles.SloganContainer}>
        <p className={Styles.phraseDesc}>
      Discover homemade delights straight from mom's kitchen. Order now for a taste of home
      </p>
        </div>
        <Button
          size="large"
          variant="contained"
          sx={{
            bgcolor: "#B55D51",
            color: "white",
            fontSize: "1.3rem",
            ":hover": {
              bgcolor: "#b55d4e",
            },
            textTransform: "none",
          }}
          onClick={() => {
            nav("/meals");
          }}
        >
          Discover products
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;