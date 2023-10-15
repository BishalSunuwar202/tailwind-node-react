import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    // <div className="bg-slate-900 grid place-content-center  h-screen">
    <div className="bg-slate-900  text-slate-900">
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4">
        <div className="text-2xl ">Learning</div>
        <ul className="md:flex hidden font-semibold ">
          <li className="mx-[10px] cursor-pointer">
            <Link to={""}>Home</Link>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <Link
              to={"products"}
              className=" hover:text-blue-800  active:bg-red-600 focus:ring-1 focus:ring-red-500"
            >
              Products
            </Link>
          </li>
          {/* <li className="mx-[10px] cursor-pointer">Cart</li> */}
          <li className="mx-[10px] cursor-pointer">Admin Products</li>
          {/* <li className="mx-[10px] cursor-pointer">
            <Link
              to={"products/add-products"}
              className=" hover:text-blue-800  active:bg-red-600 focus:ring-1 focus:ring-red-500"
            >
              Add Products
            </Link>
          </li> */}
          <li className="mx-[10px] cursor-pointer">Orders</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
          <Link to="auth?mode=login">Login/Signup</Link>
        </div>
        <div className="md:hidden">
          <Link to={"#"} className="text-4xl">
            &#8801;
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
