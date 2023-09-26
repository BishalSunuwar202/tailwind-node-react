import React from "react"; 

const AddProducts = () => {

  return (
    <>
      <div className="bg-slate-900 h-screen flex justify-center">
        <div className=" text-white px-40 max-w-xl bg-slate-500">
          <form action="" className="flex flex-col font-bold">
            <label className="pt-4" htmlFor="name">
              Name
            </label>
            <input
              className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
              type="text"
              id="name"
            />

            <label className="pt-4" htmlFor="price">
              Price
            </label>
            <input
              className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              type="number"
              id="price"
            />

            <label className="pt-4" htmlFor="imageUrl">
              Image Url
            </label>
            <input
              className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
              type="text"
              id="image"
            />

            <label className="pt-4" htmlFor="description">
              Description
            </label>
            <textarea
              className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
              type="text"
              id="description"
            />

            <div className="pt-4 ">
              <button className="p-2 bg-blue-700 m-6 text-center rounded-lg w-20 hover:bg-red-300">
                Add
              </button>
              <button className="p-2 w-20 bg-blue-700 m-6 text-center rounded-lg hover:bg-red-400">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
