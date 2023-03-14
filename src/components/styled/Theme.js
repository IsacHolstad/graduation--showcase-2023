import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      darkPurple: "#6B4492",
      persianGreen: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "#36313D"
    },
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
  }

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default theme;
  