import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SearchItem = ({ title, price }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: "10px",
        border: "1px solid #14213d",
        "&:hover": {
          backgroundColor: "#14213d",
          color: "#fff",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography
        sx={{
          "@media (max-width: 900px)": {
            fontSize: "15px",
          },
        }}
        gutterBottom
        variant="subtitle1"
        component="div"
      >
        {title}
      </Typography>
      <Typography
        sx={{
          "@media (max-width: 900px)": {
            fontSize: "15px",
          },
        }}
        gutterBottom
        variant="subtitle1"
        component="div"
      >
        ${price}
      </Typography>
    </Box>
  );
};

export default SearchItem;
