import React from "react";
import { Link, useSubmit } from "react-router-dom";
import Button from "./Button";

const ProductItem = ({ product }) => {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      //first argument will be data you wanna submit which will be automatically wrap with form
      //second argument
      //submit(null, {method: 'delete', action: ''})
      submit(null, { method: "delete" });
    }
  }
  return (
    <article className="m-auto text-center">
      <h1 className="m-4 font-bold">Product Details</h1>
      <p className="font-semibold">{product.name}</p>
      <h2 className="font-semibold">{product.price}</h2>

      <img
        className="rounded-xl w-1/6 mx-auto"
        src={product.url}
        alt="product.name"
      />
      <h2 className="w-1/5 mx-auto font-semibold">{product.description}</h2>
      {/* <p className="m-4">{params.productId}</p> */}
      <p>
        <Link to=".." relative="path">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-8"
            onClick={startDeleteHandler}
          >
            Delete
          </button>
        </Link>
        <Link to="edit">
          <Button>Edit</Button>
        </Link>
      </p>
    </article>
  );
};

export default ProductItem;
