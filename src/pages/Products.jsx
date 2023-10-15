import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  //const products = useLoaderData();
  //return <ProductsList products={products} />;
  const { products } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={products}>
        {(loadedProducts) => <ProductsList products={loadedProducts} />}
      </Await>
    </Suspense>
  ); //resolve is a prop which will take deffered value
  //Await will wait for the data to be there i.e in resolve

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

async function loadProducts() {
  const response = await fetch("http://localhost:3001/products");
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
    //return response;
    const resData = await response.json(); //this line is added because the response is not in loader function as there is defer function
    return resData;
  }
}

export function loader() {
  return defer({
    products: loadProducts(),
  });
}
