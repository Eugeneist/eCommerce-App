import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { SearchComponent } from "../SearchComponent";

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
            <SearchComponent />
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
