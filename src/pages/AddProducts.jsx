import React from "react";
import ProductForm from "../components/ProductForm";
import { json, redirect } from "react-router-dom";

const AddProducts = () => {
  return <ProductForm method="post" />;
};

export default AddProducts;

// export async function action({ request, params }) {
//   const data = await request.formData();

//   const productData = {
//     name: data.get("name"),
//     price: data.get("price"),
//     url: data.get("url"),
//     description: data.get("description"),
//   };

//   const response = await fetch("http://localhost:3001/add-product", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(productData),
//   });

//   if (response.status === 400) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json({ message: "could not save event" }, { status: 500 });
//   }
//   return redirect("/products");
// }
