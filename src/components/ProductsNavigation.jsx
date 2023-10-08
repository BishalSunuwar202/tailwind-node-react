import React from "react";
import { NavLink } from "react-router-dom";

const ProductsNavigation = () => {
  return (
    <header>
      <nav>
        <ul className="flex  bg-slate-800 justify-evenly">
          <li>
            <NavLink
              to="/products"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
              end
            >
              All products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products/add-product"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
            >
              New Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ProductsNavigation;
