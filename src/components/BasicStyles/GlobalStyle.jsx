import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
background: rgb(174,238,203);
background: radial-gradient(circle, rgba(174,238,203,0.7455357142857143) 0%, rgba(148,187,233,1) 100%);

}

#root {
    display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
}

/* ---------- */
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}
ul, li {
	margin: 0;
	padding: 0;
	/* list-style: none; */
    text-decoration: none
}
img {
  display: block;
  width: 100%;
  height: 100%;
 
  object-fit: cover;
}

button {
  display: block;
  font-family: inherit;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
`;
