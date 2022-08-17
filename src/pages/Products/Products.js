import { useEffect, useState } from "react";
import { axios } from "../../helpers";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { ProductCard } from "../../components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { ImageCarousel } from "../../components";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const filterProducts = (category) => {
    const filteredList = products.filter((x) => x.category === category);
    setFilter(filteredList);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products`)
      .then((data) => {
        setProducts(data.products);
        setFilter(data.products);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LinearProgress />;
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
      sx={{ padding: "10px", backgroundColor: "#e5e5e5" }}
      maxWidth="xl"
    >
      <ImageCarousel />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "5px 20px 5px 0",
            position: "sticky",
            top: "50px",
          }}
        >
          <Typography
            sx={{
              margin: "0 0 15px",
              color: "#14213d",
              textTransform: "uppercase",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Categories:
          </Typography>
          <Button
            onClick={() => setFilter(products)}
            sx={{
              display: "flex",
              justifyContent: "left",
              padding: "10px 100px 10px 20px",
              color: "#14213d",
            }}
          >
            All
          </Button>
          <Divider />
          <Button
            onClick={() => filterProducts("smartphones")}
            sx={{
              display: "flex",
              justifyContent: "left",
              padding: "10px 100px 10px 20px",
              color: "#14213d",
            }}
          >
            Smartphones
          </Button>
          <Divider />
          <Button
            onClick={() => filterProducts("laptops")}
            sx={{
              display: "flex",
              justifyContent: "left",
              padding: "10px 100px 10px 20px",
              color: "#14213d",
            }}
          >
            Laptops
          </Button>
          <Divider />
          <Button
            onClick={() => filterProducts("fragrances")}
            sx={{
              display: "flex",
              justifyContent: "left",
              padding: "10px 100px 10px 20px",
              color: "#14213d",
            }}
          >
            Fragrances
          </Button>
          <Divider />
          <Button
            onClick={() => filterProducts("skincare")}
            sx={{
              display: "flex",
              justifyContent: "left",
              padding: "10px 100px 10px 20px",

              color: "#14213d",
            }}
          >
            Skin Care
          </Button>
          <Divider />
          <Button
            onClick={() => filterProducts("groceries")}
            sx={{
              display: "flex",
              justifyContent: "left",
              padding: "10px 100px 10px 20px",
              color: "#14213d",
            }}
          >
            Groceries
          </Button>
          <Divider />
          <Button
            onClick={() => filterProducts("home-decoration")}
            sx={{
              display: "flex",
              justifyContent: "left",
              padding: "10px 100px 10px 20px",
              color: "#14213d",
            }}
          >
            Decoration
          </Button>
          <Divider />
        </Box>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 2, sm: 12, md: 16 }}
          sx={{ alignContent: "center" }}
        >
          {filter.map((product) => (
            <Grid item xs={4} sm={4} md={4} key={product.id}>
              <ProductCard
                product={product}
                title={product.title}
                rating={product.rating}
                price={product.price}
                image={product.thumbnail}
                key={product.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
