import { useSelector } from "react-redux";
import { ProductCard } from "../ProductCard";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";

const Favorite = () => {
  const state = useSelector((state) => state.favoriteReducer);

  if (state.length === 0) {
    return (
      <Container
        sx={{
          alignContent: "center",
          padding: "10px",
          height: "100vh",
          backgroundColor: "#e5e5e5",
        }}
        maxWidth="lg"
      >
        <Stack sx={{ width: "60%", margin: "auto" }} spacing={2}>
          <Alert variant="filled" severity="info">
            You don't have favorite products!
          </Alert>
        </Stack>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        alignContent: "center",
        padding: "10px",
        height: "100%",
        backgroundColor: "#e5e5e5",
      }}
      maxWidth="lg"
    >
      <Grid
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 16 }}
        sx={{
          alignContent: "center",
          padding: "30px 30px 150px 30px",
          height: "100%",
        }}
      >
        {state.map((product) => (
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
    </Container>
  );
};

export default Favorite;
