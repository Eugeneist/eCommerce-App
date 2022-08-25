import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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

const Header = () => {
  const state = useSelector((state) => state.cartReducer);
  const favorite = useSelector((state) => state.favoriteReducer);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          margin: "0 0 5px 0",
          position: "sticky",
          top: "0px",
          zIndex: "9999",
        }}
      >
        <AppBar
          position="sticky"
          sx={{ backgroundColor: "#14213d", paddingRight: "10px" }}
        >
          <Toolbar>
            <NavLink to="/">
              <LocalMallIcon
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#fca311",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
            </NavLink>
            <Search sx={{ marginLeft: "10px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              <NavLink to="/favorite">
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={favorite?.length} color="error">
                    <FavoriteBorderOutlinedIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "#fca311",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    />
                  </Badge>
                </IconButton>
              </NavLink>
              <NavLink to="/cart" sx={{ textDecoration: "none", color: "fff" }}>
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={state?.length} color="error">
                    <ShoppingBasketOutlinedIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "#fca311",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    />
                  </Badge>
                </IconButton>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
