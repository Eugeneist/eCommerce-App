import Box from "@mui/material/Box";
import { SearchItem } from "../SearchItem";
import { NavLink } from "react-router-dom";

const SearchList = ({ products, selected }) => {
  const handleClose = () => {
    selected(false);
  };

  return (
    <Box sx={{ overflowY: "scroll", height: "70vh" }}>
      {products.map(({ id, title, price }) => {
        return (
          <NavLink
            onClick={handleClose}
            key={id}
            title={title}
            price={price}
            style={{
              textDecoration: "none",
              fontFamily: "Roboto",
              color: "#14213d",
            }}
            to={`/product/${id}`}
          >
            <SearchItem key={id} title={title} price={price} />
          </NavLink>
        );
      })}
    </Box>
  );
};

export default SearchList;
