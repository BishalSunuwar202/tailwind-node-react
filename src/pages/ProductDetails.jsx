import React from "react";
import ProductItem from "../components/ProductItem";
import { json, useLoaderData } from "react-router-dom";
const ProductDetails = () => {
  const products = useLoaderData();

  //const params = useParams();
  //params == router parameters
  return <ProductItem products={products} />;
};

export default ProductDetails;

export async function loader({ request, params }) {
  try {
    const id = params.productId; //this productId is used from the app.js
    const response = await fetch("http://localhost:3001/products/" + id);
    if (!response.ok) {
      throw json(
        { message: "Could not fetch details for selected event." },
        {
          status: 500,
        }
      );
    } else {
      console.log(response);
      return response;
      // const data = await response.json();
      // console.log(data); // Log the data to inspect it
      // return data;
    }
  } catch (err) {
    console.log("loder error:", err);
    throw err;
  }
}
