import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//product Provider
import PoductProvider from "./Contexts/ProductContext.jsx";
//sidebar provider
import SidebarProvider from "./Contexts/SidebarContext.jsx";
//import cart provider
import CartProvider from "./Contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <PoductProvider>
        <App />
      </PoductProvider>
    </CartProvider>
  </SidebarProvider>
);
