import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: "Lato", "微軟正黑體", sans-serif;
  }
  .section-fields {
    height: 45px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
