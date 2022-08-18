import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../actions/cartActions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price x1</TableCell>
              <TableCell align="right">Total Price</TableCell>
              <TableCell align="right"></TableCell>
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
                    width="10%"
                    height="auto"
                    src={product.thumbnail}
                    alt={product.title}
                  ></img>
                  {product.title}
                </TableCell>
                <TableCell align="right">{product.amount}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">
                  {product.price * product.amount}
                </TableCell>
                <TableCell align="right">
                  <Button
                    color="secondary"
                    onClick={() => removeProduct(product)}
                  >
                    <ClearIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Cart;
