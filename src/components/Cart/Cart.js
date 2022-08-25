import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  deleteFromCart,
  clearCart,
} from "../../actions/cartActions";
import { NavLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import { DialogWindow } from "../DialogWindow";

const Cart = () => {
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const deleteProduct = (product) => {
    dispatch(deleteFromCart(product));
  };

  const clearAllCart = (product) => {
    dispatch(clearCart(product));
  };

  const calculateTotal = state
    .reduce((acc, product) => acc + product.amount * product.price, 0)
    .toFixed(2);

  if (state.length === 0) {
    return (
      <TableContainer
        sx={{ width: "1200px", height: "100vh", margin: "auto" }}
        component={Paper}
      >
        <Stack
          sx={{ width: "60%", margin: "auto", padding: "10px" }}
          spacing={2}
        >
          <Alert variant="filled" severity="info">
            You cart is empty!
          </Alert>
        </Stack>
        <img
          style={{ margin: "10px" }}
          width="20%"
          height="auto"
          src={`https://i.ibb.co/G2JpX0p/Cart-PNG.png`}
          alt="cartimage"
        ></img>
      </TableContainer>
    );
  }

  const products = state?.map((product) => [
    {
      product: product.title,
      amount: product.amount,
      price: product.price,
    },
  ]);

  return (
    <TableContainer
      sx={{ width: "1200px", height: "100%", margin: "auto" }}
      component={Paper}
    >
      <Table size="small" aria-label="cart table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
              Product
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontWeight: "bold" }}
              align="right"
            >
              Quantity
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontWeight: "bold" }}
              align="right"
            >
              Price x1
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontWeight: "bold" }}
              align="right"
            >
              Total Price
            </TableCell>
            <TableCell sx={{ textAlign: "center" }} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state?.map((product) => (
            <TableRow key={product.id}>
              <TableCell
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                component="th"
                scope="row"
              >
                <img
                  style={{ margin: "10px" }}
                  width="20%"
                  height="auto"
                  src={product.thumbnail}
                  alt={product.title}
                ></img>
                {product.title}
              </TableCell>
              <TableCell align="center">
                <Button
                  sx={{ minWidth: "30px" }}
                  size="small"
                  disableElevation
                  onClick={() => removeProduct(product)}
                >
                  —
                </Button>
                {product.amount}
                <Button
                  sx={{ minWidth: "30px" }}
                  size="small"
                  disableElevation
                  onClick={() => addProduct(product)}
                >
                  +
                </Button>
              </TableCell>
              <TableCell align="center">${product.price}</TableCell>
              <TableCell align="center">
                ${(product.price * product.amount).toFixed(2)}
              </TableCell>
              <TableCell align="right">
                <Button
                  color="secondary"
                  onClick={() => deleteProduct(product)}
                >
                  <ClearIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          padding: "30px 100px 30px 30px",
          display: "flex",
          justifyContent: "space-between",
        }}
        gutterBottom
        variant="h5"
        component="div"
      >
        <box>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "fff", margin: "20px" }}
          >
            <Button
              color="primary"
              variant="contained"
              sx={{
                width: "120px",
                backgroundColor: "#14213d",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#fca311",
                  color: "#000",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              Back
            </Button>
          </NavLink>
          <Button
            color="primary"
            variant="contained"
            onClick={() => clearAllCart()}
            sx={{
              width: "120px",
              margin: "10px",
              backgroundColor: "#14213d",
              textDecoration: "none",
              "&:hover": {
                backgroundColor: "#fca311",
                color: "#000",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            Clear Cart
          </Button>
        </box>
        <Grid
          sx={{
            textAlign: "center",
            padding: "20px",
            border: "1px solid #e5e5e5",
            borderRadius: "25px",
            backgroundColor: "#e5e5e5",
          }}
        >
          <Grid>
            <span style={{ fontSize: "20px" }}>Total:</span> ${calculateTotal}
          </Grid>
          <Grid>
            <DialogWindow
              products={products}
              totalPrice={calculateTotal}
              clearCart={() => clearAllCart()}
            />
          </Grid>
        </Grid>
      </Typography>
    </TableContainer>
  );
};

export default Cart;
