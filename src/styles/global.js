import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
  }

  :root {
    scroll-behavior: smooth;

    --white: #fff;
    --gray: #8e8ea8;
    --gray-30: #f5f4fa;
    --gray-50: #9da0bf;
    --green: #44d77d;
    --dark-green: #005773;
    --orange: #ffa34e;
    --pink: #ed65a6;
    --blue: #4d25e0;
    --dark-blue-30: #340ec1;
    --dark-blue-50: #26127e;
    --dark-blue: #0d0724;
  }

  body {
    background-color: var(--white);
    font-family: "Roboto", sans-serif;
    color: var(--dark-blue-50);
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
