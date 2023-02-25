import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
  font-weight:500;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Rubik;
}
div {
  //  transition: all .250s;

}

img {
  display: block;
  max-width: 100%;
}

::-webkit-scrollbar {
  display: none;
}


 
`;
