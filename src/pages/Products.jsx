import React from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../components/ProductsList";

const ProductsPage = () => {
  const products = useLoaderData();
  return <Products products={products} />;

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
  if (!response.ok) {
  } else {
    //const resData = await response.json()
    //return resData.products
    return response;
  }
}
