import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  min-height: 100vh;
}

  body {
    font-family: "Mulish";

  }

  #root {

  }

  #root > div {


  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration:none;
  }


  /* &::-webkit-scrollbar {
    width: 10px;
  }


  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }


  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }


  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  } */
`;
