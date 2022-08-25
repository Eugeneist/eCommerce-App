import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Form } from "../Form";

const DialogWindow = ({ products, totalPrice, clearCart }) => {
  const [openForm, setOpenForm] = useState(false);

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleClickOpen = () => {
    setOpenForm(true);
  };

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          width: "220px",
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
        Proceed to checkout
      </Button>
      <Dialog sx={{ marginTop: "50px" }} open={openForm} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#e5e5e5", color: "#14213d" }}>
          Your order
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#e5e5e5" }}>
          <Form
            products={products}
            totalPrice={totalPrice}
            clearCart={clearCart}
            close={handleClose}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#14213d" }}>
          <Button
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#e5e5e5",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogWindow.propTypes = {
  products: PropTypes.array,
  totalPrice: PropTypes.string,
  clearCart: PropTypes.func,
};

export default DialogWindow;
