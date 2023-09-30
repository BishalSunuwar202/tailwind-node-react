import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const products = useLoaderData();

  return <ProductsList products={products} />;

  // <>
  //    <h1>The Products Page</h1>
  //   <ul>
  //     {products.map((prod) => (
  //       // <li key={prod.id}>
  //       <li>
  //         <Link to={prod.id}>{prod.id}</Link>
  //       </li>
  //     ))}
  //   </ul>
  // </>
};

export default ProductsPage;

export async function loader() {
  const response = await fetch("http://localhost:3001/products");
  console.log(response);
  if (!response.ok) {
    //throw { message: "Could not fetch products" };
    // throw new Response(JSON.stringify({ message: "could not fetch events" }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch products" },
      {
        status: 500,
      }
    );
  } else {
    //const resData = await response.json()
    //return resData.products
    return response;
  }
}
