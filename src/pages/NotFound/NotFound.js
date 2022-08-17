import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

const NotFound = () => {
  return (
    <Stack sx={{ width: "60%", height: "100vh", margin: "auto" }} spacing={2}>
      <Alert variant="filled" severity="error">
        Error 404. Not found.
      </Alert>
    </Stack>
  );
};

export default NotFound;
