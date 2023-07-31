import React from "react";

// components
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import 'animate.css';
import "./ecommerce.css";
import { ProductProvider } from "../../contexts/ProductContext";

function Ecommerce() {
  return (
    <ProductProvider>
      <div className="ecommerce">
        <Navbar />
        <Product />
      </div>
    </ProductProvider>
  );
}

export default Ecommerce;
