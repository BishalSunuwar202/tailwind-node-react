import React from "react";
import ProductItem from "../components/ProductItem";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
const ProductDetails = () => {
  //const products = useLoaderData();
  const products = useRouteLoaderData("product-detail");

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

export async function action({ params, request }) {
  const productId = params.productId;
  const access_token = getAuthToken();
  console.log(access_token);

  const response = await fetch("http://localhost:3001/products/" + productId, {
    //method: "DELETE",
    method: request.method,
    headers: {
      Authorization: "Bearer" + access_token,
    },
    //dynamically extracting the method
  });
  if (!response.ok) {
    throw json(
      { message: "Could not delete product." },
      {
        status: 500,
      }
    );
  }
  return redirect("/products");
}
