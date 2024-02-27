import React, { useState } from 'react';
import style from "./MealCard.module.css";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

const MealCard = ({ value, image, title, cook, city, price ,imagecook}) => {
  const [ratingValue, setRatingValue] = useState(value);

  return (
    <div className={style.cardMeal}>
      <Card sx={{ maxWidth: 330, borderRadius: 4, margin: 5 }}>
        <CardMedia
          component="img"
          height="265"
          src={image}
          alt="Meal"
          sx={{ objectFit: 'cover' ,width:330}}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Rating
            name="read-only"
            value={ratingValue}
            readOnly
            sx={{ margin: "0", marginLeft: 1 }}
          />
          <Typography variant="body2" color="#B55D51" noWrap sx={{ paddingRight: 2 }}>
            ${price.toFixed(2)}
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
          subheader={city}
        />
      </Card>
    </div>
  );
}

export default MealCard;
