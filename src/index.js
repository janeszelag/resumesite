import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5f5b6b',
      secondary: "#E6EBE0"
    },
    text: {
      primary: "#E6EBE0",
      secondary: "#EEC584",
      fontSize: "1rem"
    },
    background: {
      default: "#A6B07E"
      
    }
  },
  typography: {
    fontFamily: "Advent Pro",

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    
      <App />
  
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
