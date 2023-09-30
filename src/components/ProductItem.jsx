import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({products}) => {
  return (
    <article className="m-auto grid place-content-center text-center">
      <h1 className="m-4 font-bold">Product Details</h1>
      <p>{products.name}</p>
      <h2>{products.price}</h2>

      <img
        className="w-1/3 object-cover"
        src={products.url}
        alt="product.name"
      />
      <h2>{products.description}</h2>
      {/* <p className="m-4">{params.productId}</p> */}
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </article>
  );
};

export default ProductItem;
