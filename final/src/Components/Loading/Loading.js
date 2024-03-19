import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box  sx={{
      display: "flex",
      justifyContent: "center", // Center horizontally
      alignItems: "center", // Center vertically
      marginLeft:"50rem",
      marginTop:"20rem"
    }}
>
      <CircularProgress style={{ color: "#b55d4e" }} />
    </Box>
  );
}