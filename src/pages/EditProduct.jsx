import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const product = useRouteLoaderData("product-detail");
  return <ProductForm method="patch" product={product} />;
};

export default EditProduct;
