import styled, { createGlobalStyle } from "styled-components";

export const Global =  createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  :root{
    --purple: #8284FA;
    --purple-dark: #5E60CE;
    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;

    --gray-700: #0D0D0D;
    --gray-600: #1A1A1A;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #D9D9D9;
    --gray-100: #F2F2F2;

    --danger: #E25858;

  }

  body {
    font-size: 62.5%;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.4;
  }
`
export default Global;