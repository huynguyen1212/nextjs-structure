import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: ${theme.fonts["K2D-Regular"]};
    user-select: none;
  }

  h1, h2{
    text-align: center;
  }
`;

export default GlobalStyle;