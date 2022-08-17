import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ProductCard = ({ image, title, rating, price, product, key }) => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  let id = product.id;

  return (
    <Card sx={{ borderRadius: "10px" }}>
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
            <Rating name="read-only" value={rating} readOnly />
          </CardContent>
        </CardActionArea>
      </NavLink>
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
