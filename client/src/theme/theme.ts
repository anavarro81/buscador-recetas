"use client";
import { createTheme } from "@mui/material";
import montserrat from "@/fonts/montserrat";

const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F48E28",
    },
    secondary: {
      main: "#F5DDC4",
    },
    error: {
      main: "#FE645E",
    },
  },

  typography: {
    fontFamily: montserrat.style.fontFamily,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },

  components: {
    MuiTypography: {},
  },
});

const customTypography = {
  h1: {
    fontSize: pxToRem(95),
    color: theme.palette.primary.main,
    fontWeight: 700,
    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(48),
    },
  },
  h2: {
    fontSize: pxToRem(48),
    color: "#000",
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(40),
    },
  },
  h3: {
    fontSize: pxToRem(36),
    color: "#000",
    fontWeight: 700,
    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(26),
    },
  },
  h4: {
    fontSize: pxToRem(26),
    color: "#000000",
    fontWeight: 700,
    [theme.breakpoints.up("md")]: {
      fontsize: pxToRem(16),
    },
  },
  body1: {
    fontSize: pxToRem(18),
    color: "#000",
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(20),
    },
  },
  body2: {
    fontSize: pxToRem(13),
    color: "#000",
    fontWeight: 400,
    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(20),
    },
  },
  caption:{
    fontSize: pxToRem(11),
    color: "#000",
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(11),
    },
  }
};

if (theme?.components?.MuiTypography) {
  theme.components.MuiTypography.styleOverrides = customTypography;
}

export default theme;
