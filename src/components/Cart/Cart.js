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
import ClearIcon from "@mui/icons-material/Clear";

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
          src={`https://www.pngmart.com/files/7/Cart-PNG-Clipart.png`}
          alt="cartimage"
        ></img>
      </TableContainer>
    );
  }

  return (
    <TableContainer
      sx={{ width: "1200px", height: "100vh", margin: "auto" }}
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
                <Button disableElevation onClick={() => removeProduct(product)}>
                  —
                </Button>
                {product.amount}
                <Button disableElevation onClick={() => addProduct(product)}>
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
            <Button color="primary" variant="contained" sx={{ width: "120px" }}>
              Back
            </Button>
          </NavLink>
          <Button
            color="primary"
            variant="contained"
            onClick={() => clearAllCart()}
            sx={{ width: "120px", margin: "10px" }}
          >
            Clear Cart
          </Button>
        </box>
        <box>
          <span style={{ fontSize: "20px" }}>Total:</span> ${calculateTotal}
        </box>
      </Typography>
    </TableContainer>
  );
};

export default Cart;
