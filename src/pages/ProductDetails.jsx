import React from "react";
import { Link, useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  return (
    <div className="m-auto grid place-content-center text-center">
      <h1 className="m-4">Product Details</h1>
      <p className="m-4">{params.productId}</p>
      <p>
        <Link to=".." relative="path">Back</Link>
      </p>
    </div>
  );
};

export default ProductDetails;
