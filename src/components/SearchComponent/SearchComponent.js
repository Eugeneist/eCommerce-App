import { useState, useEffect, useRef } from "react";
import "../../App.css";
import { axios } from "../../helpers";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { SearchList } from "./SearchList";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const filterProducts = (searchText, listOfProducts) => {
  if (!searchText) {
    return listOfProducts;
  }
  return listOfProducts.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  );
};

const SearchComponent = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    axios.get(`/products?skip=0&limit=100`).then((data) => {
      setProducts(data.products);
    });
  }, []);

  useEffect(() => {
    const filteredProducts = filterProducts(searchTerm, products);
    setProducts(filteredProducts);
  }, [searchTerm, products]);

  const rootEl = useRef(null);

  useEffect(() => {
    if (selected) {
      const onClick = (e) =>
        rootEl.current.contains(e.target) || setSelected(false);
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }
  }, [selected]);

  const handleClick = () => {
    setSelected(true);
  };

  return (
    <Box ref={rootEl} sx={{ marginLeft: "20px" }}>
      <Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={searchTerm}
            type="text"
            onClick={handleClick}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box
          className={selected ? "search-list_active" : "search-list"}
          sx={{
            backgroundColor: "#fff",
            position: "absolute",
            left: "20px",
            ZIndex: "9999",
            border: "2px solid #14213d",
            borderRadius: "0 0 25px 25px",
            overflow: "hidden",
          }}
        >
          <SearchList products={products} selected={setSelected} />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchComponent;
