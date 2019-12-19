import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  body {
    background: #fefefe;
    height: 100%;
    overscroll-behavior: none;
    padding: 0;
    margin:0;
    width: 100%;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }
  button {
    background: #ffffff00;
    border: 0;
    outline: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  
  a { 
    text-decoration: none;
    color: #393939
  }

  #app {
    overflow-x: hidden;
    padding-bottom: 10px;
    max-width: 1140px;
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #ccc;  
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #999;  
  }
`;

export default GlobalStyles;
