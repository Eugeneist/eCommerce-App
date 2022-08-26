import Box from "@mui/material/Box";
import { SearchItem } from "../SearchItem";
import { NavLink } from "react-router-dom";

const SearchList = ({ products, setSelected }) => {
  const handleClose = () => {
    setSelected(false);
  };

  return (
    <Box sx={{ overflowY: "scroll", height: "70vh" }}>
      {products.map((product) => {
        return (
          <NavLink
            onClick={handleClose}
            key={product.id}
            product={product}
            style={{
              textDecoration: "none",
              fontFamily: "Roboto",
              color: "#14213d",
            }}
            to={`/product/${product.id}`}
          >
            <SearchItem key={product.id} product={product} />
          </NavLink>
        );
      })}
    </Box>
  );
};

export default SearchList;
