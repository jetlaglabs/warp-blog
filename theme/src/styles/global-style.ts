import {createGlobalStyle} from "styled-components";
import Theme from "./theme";
import styledNormalize from "styled-normalize";
import * as prismStyle from "prismjs/themes/prism-okaidia.css";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  ${prismStyle}
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i,500,500i,700,700i&display=swap');
  html {
    box-sizing: border-box;
    background-color: ${Theme.layout.backgroundColor};
    scroll-behavior: smooth;
  }

  body {
    font-family: ${Theme.fonts.base};
    line-height: 1.9em;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, span {
    outline: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .gatsby-highlight {
    max-width: 100% !important;
  }

  .gatsby-highlight-code-line {
    background-color: #353631;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
  }

`;

export default GlobalStyle;
