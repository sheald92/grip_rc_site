import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { WishlistContextProvider } from './store/wishlist-context'

ReactDOM.render(
  <WishlistContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </WishlistContextProvider>,
  document.getElementById("root")
);
