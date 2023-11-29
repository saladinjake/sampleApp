import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  min-height: 100vh;
}

  body {
    font-family: "Mulish";
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
  }

  #root > div {
    height: 100vh;
    overflow: hidden;
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


