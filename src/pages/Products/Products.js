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
      .get(`/products?skip=0&limit=100`)
      .then((data) => {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setFilter((prevProducts) => [...prevProducts, ...data.products]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container
        sx={{ height: "100vh", padding: "10px", backgroundColor: "#e5e5e5" }}
        maxWidth="xl"
      >
        <LinearProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        sx={{ height: "100vh", padding: "10px", backgroundColor: "#e5e5e5" }}
        maxWidth="xl"
      >
        <Stack sx={{ width: "60%", margin: "auto" }} spacing={2}>
          <Alert variant="filled" severity="error">
            There was an error loading data!
          </Alert>
        </Stack>
      </Container>
    );
  }

  return (
    <Container
      sx={{ padding: "10px", backgroundColor: "#e5e5e5" }}
      maxWidth="xl"
    >
      <ImageCarousel />
      <Box sx={{ display: "flex", paddingBottom: "30px" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "5px 20px 5px 0",
              "@media (max-width: 900px)": {
                width: "100px",
              },
            }}
          >
            <Typography
              sx={{
                margin: "0 0 15px",
                color: "#14213d",
                textTransform: "uppercase",
                "@media (max-width: 900px)": {
                  fontSize: "15px",
                },
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
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
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
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
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
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
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
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
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
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
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
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
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
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              Decoration
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("furniture")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              Furniture
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("tops")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              Tops
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("womens-dresses")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              W-s Dresses
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("womens-shoes")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              W-s Shoes
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("mens-shirts")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              M-s Shirts
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("mens-shoes")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              M-s Shoes
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("mens-watches")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              M-s Watches
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("womens-watches")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              W-s Watches
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("womens-bags")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              W-s Bags
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("womens-jewellery")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              Jewellery
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("sunglasses")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              Sunglasses
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("automotive")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              Automotive
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("motorcycle")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              Motorcycles
            </Button>
            <Divider />
            <Button
              onClick={() => filterProducts("lighting")}
              sx={{
                display: "flex",
                justifyContent: "left",
                padding: "10px 100px 10px 20px",
                color: "#14213d",
                "@media (max-width: 900px)": {
                  fontSize: "12px",
                },
              }}
            >
              Lighting
            </Button>
            <Divider />
          </Box>
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
