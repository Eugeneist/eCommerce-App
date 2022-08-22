import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../actions/favoriteActions";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  ToggleButton,
  CardActionArea,
  CardActions,
} from "@mui/material";

const ProductCard = ({ image, title, rating, price, product }) => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const [ratingValue, setRatingValue] = useState(rating);
  const [favoriteProduct, setFavoriteProduct] = useState(false);

  const addFavoriteProduct = (product) => {
    if (favoriteProduct) {
      dispatch(removeFromFavorite(product));
      setFavoriteProduct(false);
    } else {
      dispatch(addToFavorite(product));
      setFavoriteProduct(true);
    }
  };

  const favorite = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    if (favorite.includes(product)) {
      setFavoriteProduct(true);
    }
  }, [favorite, product]);

  let id = product.id;

  return (
    <Card sx={{ position: "relative", borderRadius: "10px" }}>
      <ToggleButton
        value="check"
        selected={favoriteProduct}
        variant="outlined"
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "#fca311",
          zIndex: "9",
          border: "1px solid transparent",
          "&:hover": {
            color: "#E01F0D",
            fill: "#E01F0D",
            opacity: [0.9, 0.8, 0.7],
            border: "1px solid transparent",
          },
        }}
        onClick={() => addFavoriteProduct(product)}
        size="medium"
      >
        {!favoriteProduct ? (
          <FavoriteBorderOutlinedIcon />
        ) : (
          <FavoriteIcon sx={{ color: "#E01F0D" }} />
        )}
      </ToggleButton>
      <NavLink
        style={{
          textDecoration: "none",
          fontFamily: "Roboto",
          color: "#14213d",
        }}
        to={`/product/${id}`}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="320"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <Rating
        name="simple-controlled"
        value={ratingValue}
        onChange={(event, value) => {
          let newValue = (value + ratingValue) / 2;
          setRatingValue(newValue);
        }}
      />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <NavLink
          style={{
            textDecoration: "none",
            fontFamily: "Roboto",
            color: "#14213d",
          }}
          to={`/product/${id}`}
        >
          <Button
            sx={{
              backgroundColor: "#14213d",
              textDecoration: "none",
              "&:hover": {
                backgroundColor: "#fca311",
                color: "#000",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            variant="contained"
            color="success"
            size="medium"
          >
            More
          </Button>
        </NavLink>
        <Typography gutterBottom variant="h5" component="div">
          {price}$
        </Typography>
        <Button
          onClick={() => addProduct(product)}
          sx={{
            backgroundColor: "#14213d",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: "#fca311",
              color: "#000",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          variant="contained"
          color="success"
          size="medium"
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
