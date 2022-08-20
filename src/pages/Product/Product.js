import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { axios } from "../../helpers";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { addToFavorite } from "../../actions/favoriteActions";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const Product = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const addFavorite = (product) => {
    dispatch(addToFavorite(product));
  };

  const navigate = useNavigate();
  let increment = +id + 1;
  let decrement = id - 1;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products/${id}`)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Stack sx={{ width: "60%", margin: "auto" }} spacing={2}>
        <Alert variant="filled" severity="error">
          There was an error loading data!
        </Alert>
      </Stack>
    );
  }

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100%",
        backgroundColor: "#e5e5e5",
        textAlign: "left",
      }}
      maxWidth="xl"
    >
      <Typography
        sx={{
          padding: "10px 10px 5px 50px",
          color: "#14213d",
          textTransform: "uppercase",
        }}
        gutterBottom
        variant="h3"
        component="div"
      >
        {product.title}
      </Typography>
      <Rating
        sx={{ padding: "0 10px 10px 50px" }}
        name="read-only"
        value={product.rating}
        readOnly
      />
      <Box
        sx={{
          display: "flex",
          padding: "10px 10px 100px 10px",
          backgroundColor: "#e5e5e5",
          margin: "auto",
        }}
        maxWidth="lg"
      >
        <Box>
          <img src={product.thumbnail} alt={product.title}></img>
        </Box>
        <Box
          sx={{
            padding: "5px 50px 5px 50px",
            textTransform: "uppercase",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", padding: "0 0 30px" }}
            gutterBottom
            variant="subtitle1"
            component="div"
          >
            {product.category}
          </Typography>
          <Typography
            sx={{
              padding: "0 0 30px",
              color: "#14213d",
            }}
            gutterBottom
            variant="inherit"
            component="div"
          >
            {product.description}
          </Typography>
          <Typography
            sx={{
              padding: "0 0 30px",
              color: "#14213d",
            }}
            gutterBottom
            variant="h4"
            component="div"
          >
            {product.price}$
          </Typography>
          <Box
            sx={{
              display: "flex",
              padding: "10px 10px 10px 10px",
            }}
          >
            <Button
              onClick={() => addProduct(product)}
              sx={{
                backgroundColor: "#14213d",
                margin: "15px",
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
              Add to Cart
            </Button>
            <Button
              onClick={() => addFavorite(product)}
              sx={{
                backgroundColor: "#14213d",
                margin: "15px",
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
              Add to Favorite
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 10px 150px 10px",
        }}
      >
        <Button
          onClick={() => {
            navigate(`/product/${decrement}`);
          }}
          sx={{
            backgroundColor: "#14213d",
            "&:hover": {
              backgroundColor: "#fca311",
              color: "#000",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          variant="contained"
          color="success"
          size="large"
        >
          Previous product
        </Button>
        <Button
          onClick={() => {
            navigate(`/product/${increment}`);
          }}
          sx={{
            backgroundColor: "#14213d",
            "&:hover": {
              backgroundColor: "#fca311",
              color: "#000",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          variant="contained"
          color="success"
          size="large"
        >
          Next product
        </Button>
      </Box>
    </Container>
  );
};

export default Product;
