import React from "react";
import { Outlet } from "react-router-dom";
import ProductsNavigation from "../components/ProductsNavigation";

const ProductRootLayout = () => {
  return (
    <>
      <ProductsNavigation />
      <Outlet />
    </>
  );
};

export default ProductRootLayout;
