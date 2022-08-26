import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function Copyright() {
  return (
    <Typography
      sx={{
        color: "#e5e5e5",
        padding: "20px 10px 10px 10px",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          width: "350px",
          height: "2px",
          backgroundColor: "#fff",
          top: "10px",
          left: "38%",
        },
        "@media (max-width: 600px)": {
          "&::after": {
            left: "0",
            top: "0",
          },
        },
      }}
      variant="body2"
      color="text.secondary"
    >
      {"Copyright © "}
      <Link
        sx={{
          "&:hover": {
            color: "#fca311",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        color="#fff"
        href="/"
      >
        React Store,
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

let rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "300px",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#14213d",
        }}
      >
        <Container maxWidth="xl">
          <box
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
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
              <Button
                onClick={scrollToTop}
                className="scrollToTopBtn"
                sx={{
                  display: "flex",
                  minWidth: "120px",
                  justifyContent: "center",
                  marginLeft: "50px",
                  marginBottom: "10px",
                  padding: "10px",
                  backgroundColor: "#14213d",
                  color: "#fff",
                  border: "1px solid #fff",
                  position: "sticky",
                  top: "20px",
                  "&:hover": {
                    backgroundColor: "#fca311",
                    border: "1px solid #fca311",
                    color: "#000",
                    opacity: [0.9, 0.8, 0.7],
                  },
                  "@media (max-width: 900px)": {
                    fontSize: "12px",
                  },
                }}
              >
                GO TO TOP
              </Button>
            </Box>
            <TableBody>
              <TableRow>
                <TableCell align="right" sx={{ borderBottom: "none" }}>
                  <a href="https://github.com/Eugeneist">
                    <GitHubIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "#fca311",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    />
                  </a>
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "none" }}>
                  <a href="tg://resolve?domain=rudofylov">
                    <TelegramIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "#fca311",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    />
                  </a>
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "none" }}>
                  <a href="https://www.linkedin.com/in/yevhen-rudofylov-ba8010166/">
                    <LinkedInIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "#fca311",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    />
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </box>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
