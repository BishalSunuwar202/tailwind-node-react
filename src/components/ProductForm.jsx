import React from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { getAuthToken } from "../utils/auth";

const ProductForm = ({ method, product }) => {
  const data = useActionData();
  console.log(data);
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <div className="bg-slate-900 h-screen flex justify-center">
        <div className=" text-white px-40 max-w-xl bg-slate-500">
          {/* <Form method="post" action="" className="flex flex-col font-bold "> */}
          <Form method={method} action="" className="flex flex-col font-bold ">
            {data && data.errors && (
              <ul>
                {data.errors.map((err, index) => (
                  <li key={index}>{err.msg}</li>
                ))}
              </ul>
            )}
            <label className="pt-4" htmlFor="name">
              Name
            </label>
            <input
              className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
              type="text"
              id="name"
              name="name"
              required
              defaultValue={product ? product.name : ""}
            />

            <label className="pt-4" htmlFor="price">
              Price
            </label>
            <input
              className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              type="number"
              id="price"
              name="price"
              required
              defaultValue={product ? product.price : ""}
            />

            <label className="pt-4" htmlFor="imageUrl">
              Image Url
            </label>
            <input
              className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
              type="text"
              id="image"
              name="url"
              required
              defaultValue={product ? product.url : ""}
            />

            <label className="pt-4" htmlFor="description">
              Description
            </label>
            <textarea
              className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
              type="text"
              id="description"
              name="description"
              required
              defaultValue={product ? product.description : ""}
            />

            <div className="pt-4 ">
              <button
                disabled={isSubmitting}
                className="p-2 bg-blue-700 m-6 text-center rounded-lg w-20 hover:bg-red-300"
              >
                {isSubmitting ? "Submitting" : "Save"}
              </button>
              <button className="p-2 w-20 bg-blue-700 m-6 text-center rounded-lg hover:bg-red-400">
                Delete
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const productData = {
    name: data.get("name"),
    price: data.get("price"),
    url: data.get("url"),
    description: data.get("description"),
  };

  let url = "http://localhost:3001/products/add-product";
  if (method === "PATCH") {
    const productId = params.productId; //productId here because i wrote :productId in route
    url = "http://localhost:3001/products/add-product/" + productId;
  }

  const access_token = getAuthToken()
  const response = await fetch(url, {
    //const response = await fetch("http://localhost:3001/add-product", {
    //method: "POST",
    method: method,
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + access_token
    },
    body: JSON.stringify(productData),
  });

  if (response.status === 400) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "could not save event" }, { status: 500 });
  }
  return redirect("/products");
}
