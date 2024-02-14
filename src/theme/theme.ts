import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#0f0e0f",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: "black",
        },
        contained: {
          color: "black",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "black", 
          },
          "& label.Mui-focused": {
            color: "black",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black", 
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black", 
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#333",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#555",
    },
  },
});

export default theme;
