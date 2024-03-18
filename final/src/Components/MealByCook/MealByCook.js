import React, { useState } from 'react';
import style from "./MealByCook.module.css";
import { Link, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

const MealByCook = ({image,price,slug, title,cook,city,imagecook,category}) => {
  console.log( "heloo",price, title,image)
  const [ratingValue, setRatingValue] = useState(4);

  return (
    <div className={style.cardMeal}>
       <Link
        style={{
          textDecoration: "none",
          color: "inherit",
          transition: "background-color 0.5s, opacity 0.3s",
          display: "flex",
          flexDirection: "column",
        }}
        to={`/mealDetails/${slug}`}></Link>
      <Card sx={{ maxWidth: 330, borderRadius: 4, margin: 2 }}>
        <CardMedia
          component="img"
          height="265"
          src={image}
          alt="Meal"
          sx={{ objectFit: 'cover' ,width:330,paddingBottom:"0.5rem"}}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
          <Rating
            name="read-only"
            value={ratingValue}
            readOnly
            sx={{ margin: "0", marginLeft: 1 }}
          />
       <Typography variant="body2" color="#B55D51" noWrap sx={{ paddingRight: 2 }}>
  ${parseFloat(price).toFixed(2)}
</Typography>
        </div>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="body2" color="text.secondary">
            {title}title
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default MealByCook;