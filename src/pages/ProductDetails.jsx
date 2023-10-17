import React, { Suspense } from "react";
import ProductItem from "../components/ProductItem";
import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import ProductsList from "../components/ProductsList";
const ProductDetails = () => {
  //const products = useLoaderData();
  //const products = useRouteLoaderData("product-detail");
  const { product, products } = useRouteLoaderData("product-detail");

  //const params = useParams();
  //params == router parameters
  // return <ProductItem products={products} />;
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={product}>
          {(loadedProduct) => <ProductItem product={loadedProduct} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={products}>
          {(loadedProducts) => <ProductsList products={loadedProducts} />}
        </Await>
      </Suspense>
    </>
  );
};

export default ProductDetails;

async function loadProduct(id) {
  const response = await fetch("http://localhost:3001/products/" + id);

  if (!response.ok) {
    throw json(
      {
        message: "Could not fetch details for selected event",
      },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function loadProducts() {
  const response = await fetch("http://localhost:3001/products");

  if (!response.ok) {
    throw json(
      {
        message: "could not fetch products",
      },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function loader({ request, params }) {
  const id = params.productId;

  return defer({
    product: await loadProduct(id),
    products: loadProducts(),
  });
}

// export async function loader({ request, params }) {
//   try {
//     const id = params.productId; //this productId is used from the app.js
//     const response = await fetch("http://localhost:3001/products/" + id);
//     if (!response.ok) {
//       throw json(
//         { message: "Could not fetch details for selected event." },
//         {
//           status: 500,
//         }
//       );
//     } else {
//       return response;
//       // const data = await response.json();
//       // console.log(data); // Log the data to inspect it
//       // return data;
//     }
//   } catch (err) {
//     console.log("loder error:", err);
//     throw err;
//   }
// }

export async function action({ params, request }) {
  const productId = params.productId;
  const access_token = getAuthToken();

  const response = await fetch("http://localhost:3001/products/" + productId, {
    //method: "DELETE",
    method: request.method,
    headers: {
      Authorization: "Bearer " + access_token, //space between Bearer and token
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
