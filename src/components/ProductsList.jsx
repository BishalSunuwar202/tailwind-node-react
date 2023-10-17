import React from "react";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  return (
    <div className="my-2 mx-auto max-w-2xl">
      <h1>All Products</h1>
      <ul className="flex flex-col gap-4">
        {props.products.map((product) => (
          <li
            key={product._id}
            className="list-none bg-slate-400 text-current flex rounded-md overflow-hidden"
          >
            {/* <Link to={product._id}> */}
            {/* we need absolute path down here, because when i use relative path, the path will broke and results like this http://localhost:3000/products/651821bdb72f046dd31a2c5b/651821bdb72f046dd31a2c5b */}
            <Link to={`/products/${product._id}`}>
              <div className="p-4 flex flex-col items-center">
                <p>{product.name}</p>
                <h2>{product.price}</h2>
                <img
                  className="w-1/3 object-cover"
                  src={product.url}
                  alt="product.name"
                />
                <h2>{product.description}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
