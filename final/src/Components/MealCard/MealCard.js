import React, { useState } from 'react';
import style from "./MealCard.module.css";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const MealCard = ({image,price,slug, title,cook,city,imagecook,category}) => {
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
        to={`/mealDetails/${slug}`}>
        <Card sx={{ maxWidth: 300,width:'20rem', borderRadius: 4, margin: 2 }}>
          <CardMedia
            component="img"
            height="265"
            src={image}
            alt="Meal"
            sx={{ objectFit: 'cover' ,paddingBottom:"0.5rem"}}
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
              {title}
            </Typography>
          </CardContent>
          <CardHeader
            sx={{
              "& .MuiCardHeader-avatar": {
                width: 50,
                height: 50,
                alignItems: "center",
              }
            }}
            avatar={
              <Avatar alt={cook} src={imagecook} />
            }
            title={cook}
            subheader={category}
          />
        </Card>
      </Link>
    </div>
  );
}

export default MealCard;
